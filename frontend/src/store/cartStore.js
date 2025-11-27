import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      toggleCart: () => set(state => ({ isOpen: !state.isOpen })),
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),

      addItem: (product) => {
        set(state => {
          const existing = state.items.find(i => i.id === product.id);

          if (existing) {
            return {
              items: state.items.map(i =>
                i.id === product.id ? { ...i, qty: i.qty + 1 } : i
              )
            };
          }

          return { items: [...state.items, { ...product, qty: 1 }] };
        });

        get().openCart();
      },

      increaseQty: (id) => {
        set(state => ({
          items: state.items.map(item =>
            item.id === id ? { ...item, qty: item.qty + 1 } : item
          )
        }));
      },

      decreaseQty: (id) => {
        set(state => {
          const item = state.items.find(i => i.id === id);
          if (!item) return state;

          if (item.qty === 1) {
            return {
              items: state.items.filter(i => i.id !== id)
            };
          }

          return {
            items: state.items.map(i =>
              i.id === id ? { ...i, qty: i.qty - 1 } : i
            )
          };
        });
      },
      totalCost: () => {
        const { items } = get();
        return items.reduce((sum, item) => sum + item.price * item.qty, 0);
      }
    }),
    {
      name: "cart-storage",
      partialize: (state) => ({
        items: state.items,
      }),
    }
  )
);
