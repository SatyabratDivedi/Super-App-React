import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const NewsPage = () => {
  const navigate = useNavigate();
  const logoutHandle=()=>{
    localStorage.removeItem('isLogin')
    // window.location.reload()
    navigate('/')

  }
  return (
    <>
      <div className=" ">
        <nav className=" bg-gray-800 text-white px-20 p-2 flex items-center gap-5">
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
          <NavLink className={({ isActive }) => `text-lg ${isActive && "text-[#72db73]"} font-bold font-DM `} to={`/news/Crime`}>
            Crime
          </NavLink>
          <NavLink className={({ isActive }) => `text-lg ${isActive && "text-[#72db73]"} font-bold font-DM `} to={`/news/Lifestyle`}>
            Lifestyle
          </NavLink>
          <NavLink className={({ isActive }) => `text-lg ${isActive && "text-[#72db73]"} font-bold font-DM `} to={`/news/Education`}>
            Education
          </NavLink>

          <div onClick={logoutHandle} className=" flex cursor-pointer text-black bg-[#9F94FF] p-3 rounded-2xl">
            LogOut
            <span className=" px-1 ">
              <lord-icon
                src="https://cdn.lordicon.com/vduvxizq.json"
                trigger="hover"
                style={{ width: "20px", height: "20px", backgroundColor: "transparent", translate: "0px 4px" }}></lord-icon>
            </span>
          </div>
        </nav>

        <Outlet />
      </div>
    </>
  );
};

export default NewsPage;
