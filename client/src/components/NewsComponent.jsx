import React, {useEffect, useState} from "react"
import {Link, Outlet, useMatch, useParams} from "react-router-dom"

import businessImg from "../assets/business.png"
import entertainmentImg from "../assets/entertain.png"
import technologyImg from "../assets/technology.png"
import scienceImg from "../assets/science.png"
import sportsImg from "../assets/sports.png"
import healthImg from "../assets/health.png"
import politicsImg from "../assets/politics.png"
import educationImg from "../assets/education.png"

import favImg from "../assets/favicon.ico"
import {useDispatch, useSelector} from "react-redux"
import {decrement, increment} from "../store/pageSlice"
import polites from "./../HardCodedNewsApi/politesApi.js"
import entertainment from "./../HardCodedNewsApi/entertainmentApi.js"
import sports from "./../HardCodedNewsApi/sports.js"
import technology from "./../HardCodedNewsApi/technology.js"
import business from "./../HardCodedNewsApi/business.js"
import health from "./../HardCodedNewsApi/health.js"
import science from "./../HardCodedNewsApi/science.js"

const NewsComponent = () => {
  const [articlesLength, setArticlesLength] = useState()
  const [api, setApi] = useState()
  const [defaultImg, setDefaultImg] = useState()
  const match = useMatch("/news/:category/:title")
  const {category} = useParams()
  const receivePage = useSelector((state) => state.page.value)
  const dispatch = useDispatch()

  const [edit, setEdit] = useState("")

  const editClickHandler = (e) => {
    setEdit(e.target.value)
  }

  // const fetchNews = async () => {
  //   const res = await fetch(`https://newsdata.io/api/1/news?apikey=pub_4195082b54ab7fdd21d1ef1f2710ff7a33fd1&country=in&language=en&category=${category} `);
  //   const data = await res.json();
  //   console.log(data.results);
  //   setArticles(data.result)
  // };

  const mainArticleLength = Math.ceil(articlesLength / 20)

  useEffect(() => {
    window.scrollTo(0, 0)
    switch (category) {
      case "politics":
        setApi(polites)
        return setDefaultImg(politicsImg)
      case "Health":
        setApi(health)
        return setDefaultImg(healthImg)
      case "Sports":
        setApi(sports)
        return setDefaultImg(sportsImg)
      case "Science":
        setApi(science)
        return setDefaultImg(scienceImg)
      case "business":
        setApi(business)
        return setDefaultImg(businessImg)
      case "entertainment":
        setApi(entertainment)
        return setDefaultImg(entertainmentImg)
      case "Technology":
        setApi(technology)
        return setDefaultImg(technologyImg)
      default:
        return setDefaultImg(educationImg)
    }
  }, [category])

  
  return (
    <>
      <div className="newsBanner text-9xl font-singleDay text-[#72db73] mt-10">{category.slice(0, 1).toUpperCase() + category.slice(1)}</div>

      {match ? (
        <Outlet />
      ) : (
        <div>
          <div className=" flex w-[100%] bg-gray-500 justify-center items-center pb-2 ">
            <input onChange={(e) => editClickHandler(e)} className=" w-[23%] outline-none text-black rounded-3xl text-[.8rem] font-roboto bg-[#eff0f4] flex flex-col items-center justify-center" type="text" name="edit" value={edit} placeholder="Title search" />
          </div>
          <div className="px-24 py-6 flex gap-5 flex-wrap justify-around bg-black text-white ">
            {api?.map((item) => (
              <Link to={`/news/${category}/${item.title}`} key={item.title} className=" relative hover:scale-105 duration-200 border bg-[#4c4f5a] text-white   rounded-lg w-[250px] h-[270px] ">
                <div className=" absolute shadow-xl top-[47%] left-[40%] w-[40px] bg-white  p-[.4rem] rounded-full">
                  <img className=" rounded-2xl" src={item.source_icon || favImg} alt="" />
                </div>
                <div className=" overflow-hidden p-1 h-[150px] z-10">
                  <div className="  h-full w-full backImg rounded-md" style={{backgroundImage: `url(${item.image_url || defaultImg})`}}></div>
                </div>
                <div className="text-[.6rem] font-bold flex items-center justify-between px-1">
                  <span className=" text-[#72db73] ">{item.source_id.toUpperCase().slice(0, 16)}</span>
                  <span className=" ">
                    {item.pubDate.slice(0, 10).split("-").reverse().join("-")}, {item.pubDate.slice(11, 16)}
                  </span>
                </div>
                <div className="  h-[100px] px-2 flex  items-center justify-center text-center">
                  <div className=" font-DM">{item.title.slice(0, 75) + "..."}</div>
                </div>
              </Link>
            ))}
          </div>

          <div className=" bg-black   px-24 flex justify-between">
            <button disabled={receivePage <= 1} onClick={() => dispatch(decrement())} className={` ${receivePage <= 1 ? "bg-red-400" : "bg-blue-400"} border rounded-md px-2 my-3`}>
              Previous
            </button>
            <button disabled={mainArticleLength <= receivePage} onClick={() => dispatch(increment())} className={` ${mainArticleLength <= receivePage ? "bg-red-400" : "bg-blue-400"}  border rounded-md px-2 my-3`}>
              Next
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default NewsComponent
