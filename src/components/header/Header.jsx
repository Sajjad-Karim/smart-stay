import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import logo from "../../assets/logo/smartstay.png";
import { useDispatch, useSelector } from "react-redux";
import { FaUserCircle } from "react-icons/fa";
import { useState } from "react";
import { resetLoginState } from "@/features/auth/auth.slicer";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userData } = useSelector((state) => state.auth.login);
  const [toggle, setToggle] = useState(false);
  const handleLogout = () => {
    setToggle(false);
    dispatch(resetLoginState());
    navigate("/");
  };
  return (
    <>
      <header className="shadow-md  text-gray-800 flex justify-between items-center px-16 py-3">
        <div>
          <Link to={"/"}>
            <img src={logo} alt="logo" className="h-[30px]" />
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
        </ul>
        <div className="flex gap-5">
          {userData ? (
            <div className=" relative">
              <Button
                className="text-gray-800 rounded-full"
                variant="outline"
                onClick={() => setToggle(!toggle)}
              >
                <FaUserCircle />
              </Button>
              {toggle && (
                <ul className=" absolute w-[100px]  rounded bg-white py-[10px]">
                  <Link
                    to={"user-profile"}
                    onClick={() => setToggle(!toggle)}
                    className="py-[5px] w-[100%] block cursor-pointer pl-[5px] hover:bg-slate-100"
                  >
                    Profile
                  </Link>
                  <li
                    onClick={handleLogout}
                    className="py-[5px] w-[100%] cursor-pointer pl-[5px] hover:bg-slate-100"
                  >
                    Logout
                  </li>
                </ul>
              )}
            </div>
          ) : (
            <>
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
            </>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
