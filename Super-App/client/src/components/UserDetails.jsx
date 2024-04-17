import React from "react";
import { Link, useNavigate } from "react-router-dom";
import img from "../assets/image14.png";

const UserDetails = () => {
  const navigate = useNavigate();
  const UpdateHandle = () => {
    console.log("update clicked");
  };
  const deleteHandle=()=>{
    console.log("delete clicked")
  }
  return (
    <>
      <div className=" bg-black text-white h-screen p-20">
        <div className="  bg-[#5746EA] p-10 flex rounded-2xl relative ">
          <button onClick={() => navigate("/user_dashboard")} className="absolute top-[2%] bg-[#9F94FF] p-1 rounded-2xl duration-200 active:scale-95  right-[89%]">
            <span className=" text-black px-1 ">
              <lord-icon
                src="https://cdn.lordicon.com/alinocam.json"
                trigger="hover"
                colors="primary:black"
                style={{ width: "20px", height: "20px", backgroundColor: "transparent", translate: "0px 4px" }}></lord-icon>
              Back
            </span>
          </button>
          <img className="w-[20%] pt-5" src={img} alt="UserImg" />
          <div className=" flex flex-col gap-6 py-4 px-8 ">
            <span className=" text-5xl font-bold super-text">Satyabrat Divedi</span>
            <span className=" text-xl font-bold font-DM">Email: satyabrat@gmail.com</span>
            <span className=" text-xl font-bold font-DM">Password: 12345</span>

            <button onClick={UpdateHandle} className=" duration-200 active:scale-95 bg-[#9F94FF] p-1 rounded-2xl">
              <span className=" text-black px-1 ">
                <lord-icon
                  src="https://cdn.lordicon.com/uwbjfiwe.json"
                  trigger="hover"
                  colors="primary:black"
                  style={{ width: "20px", height: "20px", backgroundColor: "transparent", translate: "0px 4px" }}></lord-icon>
                You Can Update Your Details
              </span>
              </button>
            <button onClick={deleteHandle} className=" duration-200 active:scale-95 bg-[#f59090] p-1 text-red-800 rounded-2xl">
              <span className=" px-1 text-red-600 ">
                <lord-icon
                  src="https://cdn.lordicon.com/wpyrrmcq.json"
                  trigger="hover"
                  colors="primary:red"
                  style={{ width: "20px", height: "20px", backgroundColor: "transparent", translate: "0px 4px" }}></lord-icon>
                Delete Data
              </span>
            </button>
          </div>
          <Link to={"/user_dashboard/user"} className="absolute top-[80%] text-black bg-[#9F94FF] p-3 rounded-2xl  right-[8%]">
            LogOut
            <span className=" px-2 ">
              <lord-icon
                src="https://cdn.lordicon.com/vduvxizq.json"
                trigger="hover"
                style={{ width: "20px", height: "20px", backgroundColor: "transparent", translate: "0px 4px" }}></lord-icon>
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
