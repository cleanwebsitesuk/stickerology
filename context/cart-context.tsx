"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from "react";

export type CartItem = {
  id: string;
  title: string;
  slug: string;
  price: number;
  image: string;
  quantity: number;
  stock: number;
};

type AddCartItemInput = Omit<CartItem, "quantity"> & {
  quantity?: number;
};

type CartContextValue = {
  items: CartItem[];
  isHydrated: boolean;
  totalItems: number;
  subtotal: number;
  addItem: (item: AddCartItemInput) => void;
  buyNow: (item: AddCartItemInput) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

const STORAGE_KEY = "stickerology_cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);

      if (raw) {
        const parsed = JSON.parse(raw) as CartItem[];
        if (Array.isArray(parsed)) {
          setItems(parsed);
        }
      }
    } catch {
      // Ignore malformed localStorage data
    } finally {
      setIsHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!isHydrated) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, isHydrated]);

  const addItem = (item: AddCartItemInput) => {
    const quantityToAdd = Math.max(1, item.quantity ?? 1);

    setItems((current) => {
      const existing = current.find((cartItem) => cartItem.id === item.id);

      if (existing) {
        return current.map((cartItem) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
                quantity: Math.min(
                  cartItem.quantity + quantityToAdd,
                  cartItem.stock
                ),
              }
            : cartItem
        );
      }

      return [
        ...current,
        {
          ...item,
          quantity: Math.min(quantityToAdd, item.stock),
        },
      ];
    });
  };

  const buyNow = (item: AddCartItemInput) => {
    const quantity = Math.max(1, item.quantity ?? 1);

    setItems([
      {
        ...item,
        quantity: Math.min(quantity, item.stock),
      },
    ]);
  };

  const removeItem = (id: string) => {
    setItems((current) => current.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    setItems((current) =>
      current
        .map((item) => {
          if (item.id !== id) return item;

          const nextQuantity = Math.max(1, Math.min(quantity, item.stock));
          return { ...item, quantity: nextQuantity };
        })
        .filter((item) => item.quantity > 0)
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const value = useMemo<CartContextValue>(() => {
    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    return {
      items,
      isHydrated,
      totalItems,
      subtotal,
      addItem,
      buyNow,
      removeItem,
      updateQuantity,
      clearCart,
    };
  }, [items, isHydrated]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
}
