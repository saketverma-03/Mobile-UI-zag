interface ProductState {
  id: string;
  title: string;
  discription: string;
  price: number;
  isFavorite: boolean;
  imgSrc: string;
}

type Size = "S" | "M" | "L";
interface CardItem extends ProductState {
  quantity: number;
  size: Size;
}

export type { CardItem, ProductState, Size };
