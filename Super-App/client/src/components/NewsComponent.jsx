import React, { useEffect, useState } from "react";
import { Link, Outlet, useLoaderData, useMatch, useParams } from "react-router-dom";

import defaultImg from "../assets/entertain.png";

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
import news18Img from "../assets/news18.png";

const NewsComponent = () => {
  const [articles, setArticles] = useState();
  const match = useMatch("/news/:category/:title");
  const data = useLoaderData();
  const { category } = useParams();

  useEffect(() => {
    console.log(data);
    setArticles(data.articles);
  }, [category]);

  const profileImg = (name) => {
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
      case "News18":
        return news18Img;
      default:
        return favImg;
    }
  };

  return (
    <>
      <div className="newsBanner text-9xl font-singleDay text-[#72db73]  ">{category.slice(0, 1).toUpperCase() + category.slice(1)}</div>

      {match ? (
        <Outlet />
      ) : (
        <div className="px-24 py-6 flex gap-5 flex-wrap justify-start bg-black text-white ">
          {articles?.map((item) => (
            <Link
              to={`/news/${category}/${item.title}`}
              key={item.title}
              className=" relative hover:scale-105 duration-200 border bg-[#dfe3f1]  text-black rounded-lg w-[250px] h-[270px] ">
              <div className=" absolute shadow-xl top-[47%] left-[40%] w-[40px] bg-white  p-[.4rem] rounded-full">
                <img className=" rounded-2xl" src={profileImg(item.source.name)} alt="" />
              </div>
              <div className=" overflow-hidden p-1 h-[150px] z-10">
                <div className="  h-full w-full backImg rounded-md" style={{ backgroundImage: `url(${item.urlToImage || defaultImg})` }}></div>
              </div>
              <div className=" h-1 font-medium text-[.6rem] flex justify-between px-1">
                <span>{item.source.name.toUpperCase().slice(0, 19)}</span>
                <span>
                  {item.publishedAt.slice(0, 10).split("-").reverse().join("-")}, {item.publishedAt.slice(11, 19)}
                </span>
              </div>
              <div className="  h-[100px] px-2 flex  items-center justify-center text-center">
                <div className=" font-DM">{item.title.slice(0, 75) + "..."}</div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default NewsComponent;

export const allNewsDataLoader = async (params) => {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=in&category=${params.params.category}&apiKey=7e753acdd6e147029ff658f3f9f90931`
  );
  const data = await res.json();
  return data;
};
