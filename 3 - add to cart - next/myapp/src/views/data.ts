import { StaticImageData } from "next/image";
import p1 from "../public/p1.png";
import p2 from "../public/p2.png";
import p3 from "../public/p3.png";
import p4 from "../public/p4.png";
import p5 from "../public/p5.png";
import p6 from "../public/p6.png";
import p7 from "../public/p7.png";
import p8 from "../public/p8.png";

type product = {
  id: number;
  title: string;
  price: string;
  image: string | StaticImageData;
  category: string;
};
export const data: product[] = [
  {
    id: 1,
    category: "female",
    image: p1,
    title: "Pink Fleas Sweat Shirt",
    price: "$175",
  },
  {
    id: 2,
    category: "female",
    image: p2,
    title: "Flex Push Button Bomber",
    price: "$225",
  },
  {
    id: 3,
    category: "female",
    image: p3,
    title: "Muscle Tank",
    price: "$75",
  },
  {
    id: 4,
    category: "kids",
    image: p4,
    title: "Flex Sweat Shirt",
    price: "$225",
  },
  {
    id: 5,
    category: "male",
    image: p5,
    title: "Cameryn Sash Tie Dress",
    price: "$245",
  },
  {
    id: 6,
    category: "kids",
    image: p6,
    title: "Brushed Raglan Sweatshirt",
    price: "$195",
  },
  {
    id: 7,
    category: "male",
    image: p7,
    title: "Raglan Sweatshirt",
    price: "$195",
  },
  {
    id: 8,
    category: "female",
    image: p8,
    title: "Flex Sweatshirt",
    price: "$195",
  },
];
