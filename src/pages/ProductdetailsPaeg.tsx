import { Link, useLocation } from "react-router-dom";

import { useState } from "react";
import { useDispatch } from "react-redux";
import backArrowIcon from "../assets/icons/arrow-right-back.svg";
import bellIcon from "../assets/icons/bell-01.svg";
import cartIcon from "../assets/icons/shopping-bag-03-white.svg";
import { addToCart } from "../store/cartSlice";
import { CardItem, ProductState } from "../types";

function ProductdetailsPage() {
  const { state }: { state: ProductState } = useLocation();
  const { title, imgSrc, discription, price } = state;
  const dispatch = useDispatch();

  const [size, SetSize] = useState<CardItem["size"]>("S");

  function handleAddToCart() {
    const cartItem: CardItem = { ...state, quantity: 1, size: size };
    dispatch(addToCart(cartItem));
  }

  function handleSizeSelector(e: any) {
    SetSize(e.target.value as CardItem["size"]);
  }

  return (
    <>
      <div className="flex">
        <Link to="../">
          <img src={backArrowIcon} alt="" />
        </Link>
        <h1 className="flex-1 text-center text-3xl font-bold">Discover</h1>
        <img src={bellIcon} alt="" />
      </div>
      {/* <div className="flex mt-9">{JSON.stringify(state)}</div> */}
      <img
        className="h-[28rem] w-full object-cover mt-4"
        src={imgSrc}
        alt={title}
      />
      <h1 className="text-3xl mt-4">{title}</h1>
      <span className="block font-semibold py-4">
        4.5/5<span className="text-gray-600 ml-2">(35reviews)</span>
      </span>
      <p className="text-gray-600">{discription}</p>
      <h2 className="text-2xl mt-4">Choose Size</h2>
      <div className="flex gap-3 my-4 ">
        <button
          value={"S"}
          onClick={handleSizeSelector}
          className="btn border-2 border-gray-300  text-lg join-item"
        >
          S
        </button>
        <button
          value={"M"}
          onClick={handleSizeSelector}
          className="btn border-2 border-gray-300 text-lg join-item"
        >
          M
        </button>
        <button
          value={"L"}
          onClick={handleSizeSelector}
          className="btn border-2 border-gray-300  text-lg join-item"
        >
          L
        </button>
      </div>
      <div className="bg-white p-4 sticky border-t bottom-0 grid grid-cols-2">
        <span className="inline-felx flex-col">
          <span className="block text-gray-500 ">Price</span>
          <span className="block text-2xl ">INR {price}</span>
        </span>
        <span className="inline-flex items-center justify-center">
          <button
            className="rounded-xl btn  btn-primary"
            onClick={handleAddToCart}
          >
            <img src={cartIcon} alt="" />
            ADD to cart
          </button>
        </span>
      </div>
    </>
  );
}

export default ProductdetailsPage;
