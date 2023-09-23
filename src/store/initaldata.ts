import image1 from "../assets/image_full/image-01.png";
import image2 from "../assets/image_full/image-02.png";
import image3 from "../assets/image_full/image-03.png";
import image4 from "../assets/image_full/image-04.png";
import image5 from "../assets/image_full/image-05.png";
import image6 from "../assets/image_full/image-06.png";
import type { ProductState } from "../types";
const products: ProductState[] = [
  {
    id: "1",
    title: "Regular fit slogan",
    price: 1190,
    discription:
      "THE NAME SAYS IT ALL, THE RIGHT SIZE SLIGHTLY SNUGS THE BODY LEAVING ENOUGH ROOM FOR COMFORT IN THE SLEEVES AND WAIST",
    isFavorite: false,
    imgSrc: image1,
  },
  {
    id: "2",
    title: "Regular fit polo",
    price: 1100,
    discription:
      "THE NAME SAYS IT ALL, THE RIGHT SIZE SLIGHTLY SNUGS THE BODY LEAVING ENOUGH ROOM FOR COMFORT IN THE SLEEVES AND WAIST",
    isFavorite: false,
    imgSrc: image2,
  },
  {
    id: "3",
    title: "Regular fit color block",
    price: 1100,
    discription:
      "THE NAME SAYS IT ALL, THE RIGHT SIZE SLIGHTLY SNUGS THE BODY LEAVING ENOUGH ROOM FOR COMFORT IN THE SLEEVES AND WAIST",
    isFavorite: false,
    imgSrc: image3,
  },
  {
    id: "5",
    title: "Regular fit v-neck",
    price: 1690,
    discription:
      "THE NAME SAYS IT ALL, THE RIGHT SIZE SLIGHTLY SNUGS THE BODY LEAVING ENOUGH ROOM FOR COMFORT IN THE SLEEVES AND WAIST",
    isFavorite: false,
    imgSrc: image4,
  },
  {
    id: "6",
    title: "Regular fit pink round neck",
    price: 1290,
    discription:
      "THE NAME SAYS IT ALL, THE RIGHT SIZE SLIGHTLY SNUGS THE BODY LEAVING ENOUGH ROOM FOR COMFORT IN THE SLEEVES AND WAIST",
    isFavorite: false,
    imgSrc: image5,
  },
  {
    id: "6",
    title: "Regular fit black round neck",
    price: 1100,
    discription:
      "THE NAME SAYS IT ALL, THE RIGHT SIZE SLIGHTLY SNUGS THE BODY LEAVING ENOUGH ROOM FOR COMFORT IN THE SLEEVES AND WAIST",
    isFavorite: false,
    imgSrc: image6,
  },
];

export { products };
