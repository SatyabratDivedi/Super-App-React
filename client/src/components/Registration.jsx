import React, {useRef, useState} from "react"
import SighInPage from "./SighInPage"
import toast from "react-hot-toast"

const Registration = () => {
  const [isSignIn, setIsSighIn] = useState(false)
  const errorRefs = Array(4)
    .fill()
    .map(() => useRef())
  const borderRefs = Array(3)
    .fill()
    .map(() => useRef())
  const signUpFormRef = useRef()
  const signInFormRef = useRef()

  const user = {
    name: "",
    email: "",
    password: "",
  }
  const [edit, setEdit] = useState(user)
  const [select, setSelect] = useState(false)

  const changeHandle = (e) => {
    setEdit({...edit, [e.target.name]: e.target.value})
  }
  const selectHandle = () => {
    setSelect(true)
  }
  const signInSlideHandle = () => {
    signUpFormRef.current.style.bottom = "110%"
    setTimeout(() => {
      setIsSighIn(true)
    }, 900)
  }

  const submitHandle = (e) => {
    e.preventDefault()
    const conditions = [edit.name, edit.email, edit.password, select]
    conditions.forEach((condition, index) => {
      if (!condition) {
        errorRefs[index].current.style.display = "block"
        index <= 2 && (borderRefs[index].current.style.border = "1px solid red")
      } else if (condition) {
        errorRefs[index].current.style.display = "none"
        index <= 2 && (borderRefs[index].current.style.border = "1px solid black")
      }
    })

    const createData = async () => {
      const toastId = toast.loading("Creating Account...")
      const res = await fetch("https://super-app-1.onrender.com/api/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(edit),
      })
      const data = await res.json()
      if (res.ok) {
        setTimeout(()=>{
          toast.success(data.msg, {id: toastId})
        }, 400)
        setEdit(user)
        signUpFormRef.current.style.bottom = "110%"
        setTimeout(() => {
          setIsSighIn(true)
        }, 900)
      } else {
        setTimeout(()=>{
          toast.error(data, {id: toastId})
        }, 600)
      }
    }

    if (conditions.every((condition) => condition)) {
      const myPromise = createData()

      toast.promise(myPromise, {
        loading: "I am using free server Please wait few seconds..",
        success: 'connected to backend',
        error: 'Something went wrong',
      })
    }
  }
  return (
    <>
      <div className="mainHeader bgBlack">
        <div className="left z-10">
          <div className="imgText">
            Discover new things on <br /> Superapp
          </div>
        </div>

        {isSignIn ? (
          <div ref={signInFormRef} className=" right absolute top-[50%] right-0  duration-[1500ms]">
            <SighInPage signInFormRef={signInFormRef} setIsSighIn={setIsSighIn} signUpFormRef={signUpFormRef} />
          </div>
        ) : (
          <div ref={signUpFormRef} className=" absolute  right-0 right z-0  bottom-[20%] duration-[1000ms]">
            <div className="w-[50%] text-center">
              <div className="super-text">Super App</div>
              <div className="createAcc-text">Create your new account</div>
              <div>
                <form onSubmit={submitHandle} className="form">
                  <input onChange={changeHandle} ref={borderRefs[0]} type="text" placeholder="Name" name="name" value={edit.name} />

                  <span ref={errorRefs[0]} className=" hidden text-start text-[.7rem] text-red-500  max-h-3">
                    Field is required
                  </span>
                  <input onChange={changeHandle} ref={borderRefs[1]} type="email" placeholder="Email" name="email" value={edit.email} />
                  <span ref={errorRefs[1]} className=" hidden text-start text-[.7rem] text-red-500  max-h-3">
                    Field is required
                  </span>
                  <input onChange={changeHandle} ref={borderRefs[2]} type="text" placeholder="Password" name="password" value={edit.password} />
                  <span ref={errorRefs[2]} className=" hidden text-start text-[.7rem] text-red-500  max-h-3">
                    Field is required
                  </span>
                  <div className="flex gap-2 mt-2 items-center ">
                    <input onClick={selectHandle} className=" -translate-y-1" type="radio" />
                    <span className="radio-text">Share my registration data with Superapp</span>
                  </div>
                  <span ref={errorRefs[3]} className=" hidden mb-3 text-start text-[.7rem] text-red-500 ">
                    Check this box if you want to proceed
                  </span>
                  <button className="bg-[#72DB73] rounded-2xl mb-3 font-roboto font-bold p-[.2rem] active:scale-95 duration-200">Sing Up</button>
                </form>
                <div className="font-roboto text-[.7rem] text-start">
                  By clicking on Sign up. you agree to Superapp <span className=" text-[#72DB73] cursor-pointer">Terms and Conditions of Use</span>
                </div>
                <div className="font-roboto mt-2 text-[.7rem] text-start">
                  To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <span className=" cursor-pointer text-[#72DB73]">Privacy Policy</span>
                </div>
              </div>
              <div className=" text-start border-b borderw w-[80%] mt-4">
                {" "}
                Already have an account{" "}
                <span onClick={signInSlideHandle} className=" font-roboto text-[#72DB73] cursor-pointer">
                  Sigh In
                </span>{" "}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Registration
