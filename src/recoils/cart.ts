import { atom, selectorFamily, useRecoilValue } from 'recoil';

const cartState = atom({
  key: 'cartState',
  default: new Map(),
});

export const cartItemSelector = selectorFamily<number, string>({
  key: 'cartItem',
  get:
    (id: string) =>
    ({ get }) => {
      const carts = get(cartState);
      return carts.get(id);
    },
  set:
    (id: string) =>
    ({ get, set }, newValue) => {
      const newCart = new Map([...get(cartState)]);
      newCart.set(id, newValue);
      console.log(newCart);
      set(cartState, newCart);
    },
});
