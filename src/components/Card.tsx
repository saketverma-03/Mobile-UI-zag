import { Link } from "react-router-dom";
import favIcon from "../assets/icons/activity-heart.svg";
import { ProductState } from "../types";

const Card = ({ product }: { product: ProductState }) => {
  const { id, imgSrc, price, title } = product;
  return (
    <>
      <div
        key={id}
        className="card h-56 md:h-80 rounded-none w-auto bg-base-100  "
      >
        <figure className="relative">
          <img className="rounded-xl" src={imgSrc} alt="Shoes" />

          {/* Heart Button add to saved list */}
          <span className="absolute z-[1] rounded-md top-4 right-4 bg-white hover:bg-slate-100 p-2">
            <img src={favIcon} alt="" />
          </span>
        </figure>
        <div className="card-body px-1 py-3">
          <h2 className="card-title text-sm">{title}</h2>
          <p className="text-xs text-gray-500 ">INR {price}</p>
        </div>
        <Link
          className=" before:absolute before:top-0 before:bottom-0 before:h-full before:w-full"
          to="/productdetails"
          state={product}
          preventScrollReset={true}
        />
      </div>
    </>
  );
};

export default Card;
