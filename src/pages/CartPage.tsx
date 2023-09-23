import { Link } from "react-router-dom";
import image6 from "../assets/image_full/image-02.png";

// import { useState } from "react";
// import { useDispatch } from "react-redux";
import arrowRightLine from "../assets/icons/arrow-right.svg";
import bellIcon from "../assets/icons/bell-01.svg";
import arrowIcon from "../assets/icons/home-line.svg";
// import cartIcon from "../assets/icons/shopping-bag-03-white.svg";
// import { addToCart } from "../store/cartSlice";
// import { CardItem, ProductState } from "../types";
const cartItem = {
  id: "6",
  title: "Regular fit black round neck",
  price: 1100,
  discription:
    "THE NAME SAYS IT ALL, THE RIGHT SIZE SLIGHTLY SNUGS THE BODY LEAVING ENOUGH ROOM FOR COMFORT IN THE SLEEVES AND WAIST",
  isFavorite: false,
  imgSrc: image6,
  quantity: 2,
  size: "M",
};

function CartPage() {
  return (
    <>
      {/* Header */}
      <div className="flex align-middle items-center mb-4">
        <Link to="../">
          <img src={arrowIcon} alt="" />
        </Link>
        <h1 className="flex-1 text-center text-2xl font-bold">Discover</h1>
        <img src={bellIcon} alt="" />
      </div>
      {/* Cart items */}
      {/* cart container */}
      <div className="grid gap-2 ">
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      {/* voucher */}
      <input
        type="text"
        className="input mt-6 bg-gray-100 w-full "
        name=""
        placeholder="Add a voucher"
        id=""
      />
      <div className="grid mt-4 gap-5">
        <div className="flex">
          <span className="flex-1 text-gray-500">Sub-total</span>
          <span className="">INR 500</span>
        </div>
        <div className="flex">
          <span className="flex-1 text-gray-500">VAT (%)</span>
          <span className="">INR 0.00</span>
        </div>
        <div className="flex">
          <span className="flex-1 text-gray-500">Shipping fee</span>
          <span className="">INR 80</span>
        </div>
      </div>
      <div className="divider before:bg-black after:bg-black"></div>
      <div className="flex">
        <span className="flex-1">Total</span>
        <span className="">INR 5000</span>
      </div>
      <div className="sticky bottom-0 bg-white py-4 px-6 border-t grid">
        <button className="btn btn-primary">
          Checkout <img src={arrowRightLine} alt="" />
        </button>
      </div>
    </>
  );
}

export default CartPage;

const CartItem = () => (
  <>
    <div>
      <div className="flex h-28 items-center bg-gray-100 p-2 rounded-lg ">
        {/* <figure className="m-1"> */}
        <img
          className="h-full w-16 mr-2 object-cover border-4 border-gray-300 "
          src={cartItem.imgSrc}
          alt="Movie"
        />
        {/* </figure> */}
        <div className="flex-1">
          <div className="flex">
            <h2 className="flex-1 self-end">{cartItem.title}</h2>
            <button className="btn">{"dl"}</button>
          </div>
          <span className="text-gray-500">Size {cartItem.size}</span>
          <div className="flex">
            <span className="block text-sm flex-1">INT {cartItem.price}</span>
            <div>
              <button className="rounded-lg px-3 bg-transparent border border-gray-300 ">
                -
              </button>
              <button className="px-2">3</button>
              <button className="rounded-lg px-3  bg-transparent  border border-gray-300">
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);
