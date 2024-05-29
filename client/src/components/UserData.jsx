import React, {useEffect, useState} from "react";
import img from "../assets/image14.png";
import {Link, useNavigate} from "react-router-dom";
import WeatherComp from "./WeatherComp";
import movies from "./../movieGenres.js";

const UserData = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const getData = localStorage.getItem("items");
  const parseData = JSON.parse(getData);

  const fetchUser = async () => {
    const res = await fetch(`https://super-app-1.onrender.com/api/getOneUser/${localStorage.getItem("userId")}`);
    const data = await res.json();
    setName(data.data.name);
    setEmail(data.data.email);
  };

  useEffect(() => {
    fetchUser();
    setData(parseData);
  }, []);

  const imgPrint = (name) => {
    const movie = movies.find((item) => item.name === name);
    return movie ? movie.image : null;
  };

  return (
    <>
      <div className="w-screen h-screen flex p-20 bgBlack">
        <div className=" w-[70%]   p-10 flex flex-col gap-5">
          <div className="  bg-[#5746EA] p-10 flex rounded-2xl relative ">
            <button onClick={() => navigate("/dashboard")} className="absolute duration-200 active:scale-95 top-[2%] bg-[#9F94FF] p-1 rounded-2xl  right-[89%]">
              <span className=" text-black px-1 ">
                <lord-icon
                  src="https://cdn.lordicon.com/alinocam.json"
                  trigger="hover"
                  colors="primary:black"
                  style={{width: "20px", height: "20px", backgroundColor: "transparent", translate: "0px 4px"}}
                ></lord-icon>
                Back
              </span>
            </button>
            <img className="w-[22%] mt-5" src={img} alt="UserImg" />
            <div className=" flex flex-col gap-6 py-4 px-8 ">
              <span className=" text-5xl font-bold super-text">{name}</span>
              <span className=" text-xl font-bold font-DM">{email}</span>
              <div className=" grid grid-cols-3 gap-3 text-sm font-roboto ">
                {data &&
                  data.map((item) => (
                    <span key={item} className=" bg-[#9F94FF] text-black text-center px-2 py-1 rounded-2xl">
                      {item}
                    </span>
                  ))}
              </div>
            </div>
            <Link to={"/user_dashboard/user"} className="absolute top-[80%] text-black bg-[#9F94FF] p-3 rounded-2xl  right-[8%] duration-200 active:scale-95">
              View Profile
              <span className=" px-2 ">
                <lord-icon src="https://cdn.lordicon.com/vduvxizq.json" trigger="hover" style={{width: "20px", height: "20px", backgroundColor: "transparent", translate: "0px 4px"}}></lord-icon>
              </span>
            </Link>
          </div>
          <div className=" bg-[#101744] p-3 py-5 flex justify-between rounded-2xl  ">
            <div className=" flex justify-evenly gap-2">
              {data.map((name) => {
                const imageUrl = imgPrint(name);
                return imageUrl ? (
                  <Link to={`/news/${name}`} key={name}>
                    <img className=" w-[5.4rem] hover:scale-105 duration-200 cursor-pointer rounded-md" src={imageUrl} alt={name} />
                  </Link>
                ) : null;
              })}
            </div>
            <Link to="/news/politics" className="px-1 text-end flex items-center  text-black boxShadow bg-[#9F94FF] rounded-xl">
              All News
              <span className=" px-1 ">
                <lord-icon src="https://cdn.lordicon.com/vduvxizq.json" trigger="hover" style={{width: "20px", height: "20px", backgroundColor: "transparent", translate: "0px 4px"}}></lord-icon>
              </span>
            </Link>
          </div>
        </div>
        <div className="w-[30%]  p-10">
          <div className=" p-2 bg-[#dfe3f1] boxShadow rounded-2xl ">
            <WeatherComp />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserData;
