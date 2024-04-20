import React from "react";
import { useDispatch } from "react-redux";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { valOne } from "../store/pageSlice";

const NewsPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandle = () => {
    const cnf =  confirm("Are you sure you want to log Out");
    if (cnf) {
      localStorage.removeItem("isLogin");
      navigate("/");
    }
  };
  return (
    <>
      <div className=" relative ">
        <nav className=" fixed top-0 z-10 w-full bg-gray-800 text-white px-10 p-2 flex items-center justify-center gap-7">
          <NavLink onClick={()=> dispatch(valOne())}  className={({ isActive }) => ` hidden text-lg ${isActive && "text-[#72db73]"} font-bold font-DM `} to="/news/allNews">
            AllNews
          </NavLink>
          <NavLink onClick={()=> dispatch(valOne())}  className={({ isActive }) => `text-lg ${isActive && "text-[#72db73]"} font-bold font-DM `} to={`/news/politics`}>
            Politics
          </NavLink>
          <NavLink onClick={()=> dispatch(valOne())}  className={({ isActive }) => `text-lg ${isActive && "text-[#72db73]"} font-bold font-DM `} to={`/news/business`}>
            Business
          </NavLink>
          <NavLink onClick={()=> dispatch(valOne())}  className={({ isActive }) => `text-lg ${isActive && "text-[#72db73]"} font-bold font-DM `} to={`/news/entertainment`}>
            Entertainment
          </NavLink>
          <NavLink onClick={()=> dispatch(valOne())}  className={({ isActive }) => `text-lg ${isActive && "text-[#72db73]"} font-bold font-DM `} to={`/news/Technology`}>
            Technology
          </NavLink>
          <NavLink onClick={()=> dispatch(valOne())}  className={({ isActive }) => `text-lg ${isActive && "text-[#72db73]"} font-bold font-DM `} to={`/news/Science`}>
            Science
          </NavLink>
          <NavLink onClick={()=> dispatch(valOne())}  className={({ isActive }) => `text-lg ${isActive && "text-[#72db73]"} font-bold font-DM `} to={`/news/Sports`}>
            Sports
          </NavLink>
          <NavLink onClick={()=> dispatch(valOne())}  className={({ isActive }) => `text-lg ${isActive && "text-[#72db73]"} font-bold font-DM `} to={`/news/Health`}>
            Health
          </NavLink>

          <div onClick={logoutHandle} className=" cursor-pointer">
            <lord-icon
              src="https://cdn.lordicon.com/ysopsmtv.json"
              trigger="hover"
              colors="primary:white"
              style={{ width: "40px", height: "40px", backgroundColor: "transparent", translate: "0px 4px" }}></lord-icon>
          </div>
          <span className=" cursor-pointer px-1  " onClick={()=> navigate('/user_dashboard/user')}>
            <lord-icon
              src="https://cdn.lordicon.com/kthelypq.json"
              trigger="hover"
              colors="primary:white"
              style={{ width: "40px", height: "40px", backgroundColor: "transparent", translate: "0px 4px" }}></lord-icon>
          </span>
        </nav>

        <Outlet />
      </div>
    </>
  );
};

export default NewsPage;
