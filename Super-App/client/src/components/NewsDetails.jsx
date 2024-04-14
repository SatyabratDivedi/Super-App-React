import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import results from "../newsApi";
import defaultImg from '../assets/mainNews.png'

import ndtvImg from "../assets/NDTV.png";
import favImg from "../assets/favicon.ico";
import mintImg from "../assets/livemint.png";
import teluguImg from "../assets/123telgu.png";
import pinkvillaImg from "../assets/pinkvilla.png";
import bbcImg from "../assets/bbc.png";
import toiImg from "../assets/toi.png";
import bLifeImg from "../assets/blife.png";
import hTimesImg from "../assets/htimes.png";
import quintImg from "../assets/q.png";
import expressImg from "../assets/express.png";
import odishaImg from "../assets/odisha.png";

const NewsDetails = () => {
  const navigate = useNavigate();
  const { title } = useParams();

  const profileImg = (name) => {
    console.log(name);
    switch (name) {
      case "NDTV News":
        return ndtvImg;
      case "Livemint":
        return mintImg;
      case "Odishatv.in":
        return odishaImg;
      case "The Indian Express":
        return expressImg;
      case "The Quint":
        return quintImg;
      case "Hindustan Times":
        return hTimesImg;
      case "Bollywood Life":
        return bLifeImg;
      case "The Times of India":
        return toiImg;
      case "123telugu.com":
        return teluguImg;
      case "PINKVILLA":
        return pinkvillaImg;
      case "BBC News":
        return bbcImg;
      default:
        return favImg;
    }
  };
  return (
    <>
      {results.map((item) => {
        if (item.title === title) {
          return (
            <div key={item.title} className="  flex p-5 h-[71vh] relative justify-between items-start bg-black text-white">
               <button onClick={() => navigate(-1)} className="absolute top-[5%] bg-[#9F94FF] p-1 rounded-2xl  left-[2%]">
              <span className=" text-black px-1 ">
                <lord-icon
                  src="https://cdn.lordicon.com/alinocam.json"
                  trigger="hover"
                  colors="primary:black"
                  style={{ width: "20px", height: "20px", backgroundColor: "transparent", translate: "0px 4px" }}></lord-icon>
                Back
              </span>
            </button>
              <img className=" w-[50%] " src={item.urlToImage || defaultImg} alt={item.title} />
              <div className=" p-5 ">
                <h1 className=" text-xl font-mono text text-[#72db73]  ">{item.title || 'Title is not provided from API provider'}</h1>
                <div className="  font-medium text-[.8rem] flex justify-between px-1">
                  <span className=" flex justify-center items-center gap-3">
                    <div className=" w-[40px] bg-white  p-[.4rem] rounded-full">
                      <img className=" rounded-2xl" src={profileImg(item.source.name)} alt="" />
                    </div>
                    {item.source.name.toUpperCase().slice(0, 19)}
                  </span>
                  <span>
                    {item.publishedAt.slice(0, 10).split("-").reverse().join("-")}, {item.publishedAt.slice(11, 19)}
                  </span>
                </div>
                <p className=" mt-5">{item.description || 'Description is not provided by API provider'}</p>
                <div className=" float-right">
                  <a href={item.url} target="_blank" className=" mt-3 text-black bg-[#9F94FF] p-3 rounded-2xl">
                    View Details
                    <span className=" px-2 ">
                      <lord-icon
                        src="https://cdn.lordicon.com/vduvxizq.json"
                        trigger="hover"
                        style={{ width: "20px", height: "20px", backgroundColor: "transparent", translate: "0px 4px" }}></lord-icon>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          );
        }
      })}
    </>
  );
};

export default NewsDetails;
