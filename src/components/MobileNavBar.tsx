import { Link } from "react-router-dom";
import favIcon from "../assets/icons/activity-heart.svg";
import homeIcon from "../assets/icons/home-line.svg";
import settingIcon from "../assets/icons/settings-02.svg";
import carIcon from "../assets/icons/shopping-bag-03.svg";

function MobileNavBar() {
  return (
    <>
      <div className="z-[3] btm-nav sticky bottom-0 sm:hidden border-t-2">
        <button>
          <img src={homeIcon} alt="" />
          <span className="text-xs">Home</span>
        </button>
        <button>
          <img src={favIcon} alt="" />
          <span className="text-xs">Saved</span>
        </button>
        <Link to="/cart">
          <img src={carIcon} alt="" />
          <span className="text-xs">Cart</span>
        </Link>
        <button>
          <img src={settingIcon} alt="" />
          <span className="text-xs">Settings</span>
        </button>
      </div>
    </>
  );
}
export default MobileNavBar;
