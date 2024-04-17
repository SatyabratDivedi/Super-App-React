import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const NewsPage = () => {
  const navigate = useNavigate();
  const logoutHandle = () => {
    confirm("Are you sure you want to log Out");
    if (confirm) {
      localStorage.removeItem("isLogin");
      navigate("/");
    }
  };
  return (
    <>
      <div className=" ">
        <nav className=" bg-gray-800 text-white px-10 p-2 flex items-center gap-5">
          <NavLink className={({ isActive }) => `text-lg ${isActive && "text-[#72db73]"} font-bold font-DM `} to="/news/allNews">
            AllNews
          </NavLink>
          <NavLink className={({ isActive }) => `text-lg ${isActive && "text-[#72db73]"} font-bold font-DM `} to={`/news/politics`}>
            Politics
          </NavLink>
          <NavLink className={({ isActive }) => `text-lg ${isActive && "text-[#72db73]"} font-bold font-DM `} to={`/news/business`}>
            Business
          </NavLink>
          <NavLink className={({ isActive }) => `text-lg ${isActive && "text-[#72db73]"} font-bold font-DM `} to={`/news/entertainment`}>
            Entertainment
          </NavLink>
          <NavLink className={({ isActive }) => `text-lg ${isActive && "text-[#72db73]"} font-bold font-DM `} to={`/news/Technology`}>
            Technology
          </NavLink>
          <NavLink className={({ isActive }) => `text-lg ${isActive && "text-[#72db73]"} font-bold font-DM `} to={`/news/Science`}>
            Science
          </NavLink>
          <NavLink className={({ isActive }) => `text-lg ${isActive && "text-[#72db73]"} font-bold font-DM `} to={`/news/Sports`}>
            Sports
          </NavLink>
          <NavLink className={({ isActive }) => `text-lg ${isActive && "text-[#72db73]"} font-bold font-DM `} to={`/news/Health`}>
            Health
          </NavLink>
          <form className=" flex -translate-y-1">
            <input
              // onChange={(e) => changeHandle(e)}
              className=" w-full outline-none text-black rounded-3xl text-[.8rem] font-roboto bg-[#dfe3f1] flex flex-col items-center justify-center"
              type="text"
              name="edit"
              // value={edit}
              placeholder="Title search"
            />
          </form>

          <div onClick={logoutHandle} className=" cursor-pointer">
            <lord-icon
              src="https://cdn.lordicon.com/ysopsmtv.json"
              trigger="hover"
              colors="primary:white"
              style={{ width: "40px", height: "40px", backgroundColor: "transparent", translate: "0px 4px" }}></lord-icon>
          </div>
          <span className=" px-1 ">
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
