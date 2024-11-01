import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import logo from "../../assets/logo/smartstay.png";
const Header = () => {
  return (
    <>
      <header className="shadow-md  text-gray-800 flex justify-between items-center px-5 py-3">
        <div>
          <Link to={"/"}>
            <img src={logo} balt="logo" className="h-[30px]" />
          </Link>
        </div>
        <ul className="flex gap-5 text-[15px] font-medium">
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>About</Link>
          </li>
          <li>
            <Link>Contact us</Link>
          </li>
          <li>
            <Link>Blogs</Link>
          </li>
          <li>
            <Link>Home</Link>
          </li>
        </ul>
        <div className="flex gap-5">
          <Link to={"signup"}>
            <Button className="text-gray-800" variant="outline">
              Sign Up
            </Button>
          </Link>
          <Link to={"login"}>
            <Button className="text-gray-800" variant="outline">
              Login
            </Button>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
