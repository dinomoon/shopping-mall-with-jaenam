import { useQuery } from 'react-query';
import CartList from '../../components/cart';
import { CartType, GET_CART } from '../../graphql/cart';
import { graphqlFetcher, QueryKeys } from '../../queryClient';

const Cart = () => {
  const { data } = useQuery(QueryKeys.CART, () => graphqlFetcher(GET_CART));
  const cartItems = Object.values(data || {}) as CartType[];

  console.log(data);

  if (cartItems.length === 0) {
    return <div>장바구니가 비었어요.</div>;
  }

  console.log(cartItems);

  return <CartList items={cartItems} />;
};

export default Cart;
