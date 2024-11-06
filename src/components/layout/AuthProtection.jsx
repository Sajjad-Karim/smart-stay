import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { checkSession } from "@/features/auth/auth.actions";
import { resetLoginState } from "@/features/auth/auth.slicer";

const AuthProtection = () => {
  const { sessionError } = useSelector((state) => state.auth);
  //   const token = localStorage.getItem('authToken');

  const dispatch = useDispatch();
  const token = localStorage.getItem("authToken");

  useEffect(() => {
    if (token) {
      console.log(token);

      dispatch(checkSession(token));
    }

    // return () => {
    //   dispatch(resetLoginState());
    // };
  }, [dispatch, token]);

  // if token is invalid
  if (sessionError) {
    dispatch(resetLoginState());
    localStorage.removeItem("authToken");
    toast.error(sessionError);
  }
  if (!token) {
    dispatch(resetLoginState());
  }

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AuthProtection;
