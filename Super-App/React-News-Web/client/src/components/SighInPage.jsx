import React, {useRef, useState} from "react";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";

const SighInPage = ({signInFormRef, setIsSighIn}) => {
  const navigate = useNavigate();
  const user = {
    email: "",
    password: "",
  };
  const [edit, setEdit] = useState(user);
  const errorRefs = Array(2)
    .fill()
    .map(() => useRef());
  const borderRefs = Array(2)
    .fill()
    .map(() => useRef());

  const changeHandle = (e) => {
    setEdit({...edit, [e.target.name]: e.target.value});
  };

  const signUpSlideHandle = () => {
    signInFormRef.current.style.top = "50%";
    setTimeout(() => {
      setIsSighIn(false);
    }, 900);
  };
  const sighIntHandle = (e) => {
    e.preventDefault();
    const conditions = [edit.email, edit.password];
    conditions.forEach((condition, index) => {
      if (!condition) {
        errorRefs[index].current.style.display = "block";
        index <= 1 && (borderRefs[index].current.style.border = "1px solid red");
      } else if (condition) {
        errorRefs[index].current.style.display = "none";
        index <= 1 && (borderRefs[index].current.style.border = "1px solid black");
      }
    });

    const sighInData = async () => {
      const res = await fetch("https://super-app-7dz2.onrender.com/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(edit),
      });
      const data = await res.json();
      if (res.ok) {
        toast.success(data.msg);
        setEdit(user);
        navigate("/dashboard");
        localStorage.setItem("isLogin", true);
        localStorage.setItem("userId", data.user._id);  
      }else{
        toast.error(data);
      }
    };

    if (conditions.every((condition) => condition)) {
      sighInData();
    }
  };
  return (
    <>
      <div className="w-[50%] text-center">
        <div className="super-text">Super App</div>
        <div className="createAcc-text">Sign In in your account</div>
        <div>
          <form onSubmit={sighIntHandle} className="form">
            <input onChange={changeHandle} ref={borderRefs[0]} type="email" placeholder="Email" name="email" value={edit.email} />
            <span ref={errorRefs[0]} className=" hidden text-start text-[.7rem] text-red-500  max-h-3">
              Field is required
            </span>
            <input onChange={changeHandle} ref={borderRefs[1]} type="text" placeholder="Password" name="password" value={edit.password} />
            <span ref={errorRefs[1]} className=" hidden text-start text-[.7rem] text-red-500  max-h-3">
              Field is required
            </span>
            <button type="submit" className="bg-[#72DB73] rounded-2xl my-3 font-roboto font-bold p-[.2rem] active:scale-95 duration-200">
              Sing In
            </button>
          </form>
        </div>
        <div className=" text-start border-b borderw w-[60%] mt-3">
          {" "}
          Not an account{" "}
          <span onClick={signUpSlideHandle} className=" font-roboto text-[#72DB73] cursor-pointer">
            Sign Up
          </span>{" "}
        </div>
      </div>
    </>
  );
};

export default SighInPage;
