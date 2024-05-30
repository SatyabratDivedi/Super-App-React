import React, {useEffect, useState} from "react"
import {useMatch, useNavigate, useParams} from "react-router-dom"

import polites from "./../HardCodedNewsApi/politesApi.js"
import entertainment from "./../HardCodedNewsApi/entertainmentApi.js"
import sports from "./../HardCodedNewsApi/sports.js"
import technology from "./../HardCodedNewsApi/technology.js"
import business from "./../HardCodedNewsApi/business.js"
import health from "./../HardCodedNewsApi/health.js"
import science from "./../HardCodedNewsApi/science.js"

import businessImg from "../assets/business.png"
import entertainmentImg from "../assets/entertain.png"
import technologyImg from "../assets/technology.png"
import scienceImg from "../assets/science.png"
import sportsImg from "../assets/sports.png"
import healthImg from "../assets/health.png"
import politicsImg from "../assets/politics.png"
import educationImg from "../assets/education.png"

import favImg from "../assets/favicon.ico"
import {useSelector} from "react-redux"

const NewsDetails = () => {
  const navigate = useNavigate()
  const {title, category} = useParams()
  console.log("category: ", category)
  const [articles, setArticles] = useState()
  const [defaultImg, setDefaultImg] = useState()

  const receivePage = useSelector((state) => state.page.value)

  // const fetchData = async () => {
  //   const res = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=7e753acdd6e147029ff658f3f9f90931&page=${receivePage}`);
  //   const data = await res.json();
  //   setArticles(data.articles);
  // };

  useEffect(() => {
    // fetchData();

    switch (category) {
      case "Politics":
        setArticles(polites)
        return setDefaultImg(politicsImg)
      case "Health":
        setArticles(health)
        return setDefaultImg(healthImg)
      case "Sports":
        setArticles(sports)
        return setDefaultImg(sportsImg)
      case "Science":
        setArticles(science)
        return setDefaultImg(scienceImg)
      case "Business":
        setArticles(business)
        return setDefaultImg(businessImg)
      case "Entertainment":
        setArticles(entertainment)
        return setDefaultImg(entertainmentImg)
      case "Technology":
        setArticles(technology)
        return setDefaultImg(technologyImg)
      default:
        return setDefaultImg(educationImg)
    }
  }, [receivePage])

  return (
    <>
      <div className="bg-black h-[78vh]">
        {articles?.map((item) => {
          if (item.title === title) {
            return (
              <div key={item.title} className="  flex p-5 h-[78vh] relative justify-between items-start bg-black text-white">
                <button onClick={() => navigate(-1)} className="absolute top-[5%] bg-[#9F94FF] p-1 rounded-2xl  left-[2%]">
                  <span className=" text-black px-1 ">
                    <lord-icon src="https://cdn.lordicon.com/alinocam.json" trigger="hover" colors="primary:black" style={{width: "20px", height: "20px", backgroundColor: "transparent", translate: "0px 4px"}}></lord-icon>
                    Back
                  </span>
                </button>
                <img className=" w-[500px] h-[400px] rounded-md " src={item.image_url || defaultImg} alt={item.title} />
                <div className=" p-5 px-24 ">
                  <h1 className=" text-xl font-mono text text-[#72db73]  ">{item.title || "Title is not provided from API provider"}</h1>
                  <div className="  font-medium text-[.8rem] flex justify-between px-1">
                    <span className=" flex justify-center items-center gap-3">
                      <div className=" w-[40px] bg-white  p-[.4rem] rounded-full">
                        <img className=" rounded-2xl" src={item.source_icon || favImg} alt="" />
                      </div>
                      {item.source_id.toUpperCase().slice(0, 19)}
                    </span>
                    <span>
                      {item.pubDate.slice(0, 10).split("-").reverse().join("-")}, {item.pubDate.slice(11, 19)}
                    </span>
                  </div>
                  <p className=" mt-5">{item?.description?.slice(0, 600) + "..." || "Description is not provided by API provider"}</p>
                  <div className=" mt-9 float-right">
                    <a href={item.link} target="_blank" className=" cursor-pointer mt-3 text-black bg-[#9F94FF] p-3 rounded-2xl">
                      View Details
                      <span className=" px-2 ">
                        <lord-icon src="https://cdn.lordicon.com/vduvxizq.json" trigger="hover" style={{width: "20px", height: "20px", backgroundColor: "transparent", translate: "0px 4px"}}></lord-icon>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            )
          }
        })}
      </div>
    </>
  )
}

export default NewsDetails
