export interface OrderdItemType {
  id: string;
  count: number;
  price: number;
  item: {
    id: string;
    name: string;
    price: number;
    image: string;
  };
  user: {
    id: string;
    name: string;
    profileImage: string;
  };
}
