export interface OrderdItemType {
  id: string;
  count: number;
  price: number;
  orderStatus: 'IS_ORDERED' | 'COMPLETED';
  item: {
    id: string;
    name: string;
    price: number;
    image: string;
  };
  user: {
    id: string;
    email: string;
    name: string;
    profileImage: string;
  };
}
