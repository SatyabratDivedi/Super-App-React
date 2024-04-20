import React, { useEffect, useState } from "react";
import { Link, Outlet, useMatch, useParams } from "react-router-dom";

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
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../store/pageSlice";

const NewsComponent = () => {
  const [articles, setArticles] = useState();
  const [articlesLength, setArticlesLength] = useState();
  const match = useMatch("/news/:category/:title");
  const { category } = useParams();
  const receivePage = useSelector((state) => state.page.value);
  const dispatch = useDispatch();
  console.log(receivePage);

  const [edit, setEdit] = useState("");

  const editClickHandler = (e) => {
    setEdit(e.target.value);
  };

  const fetchNews = async () => {
    const res = await fetch(
      `https://newsapi.org/v2/top-headlines?q=${edit}&country=in&category=${category}&apiKey=7e753acdd6e147029ff658f3f9f90931&page=${receivePage}`
    );
    const data = await res.json();
    setArticles(data.articles);
    setArticlesLength(data.totalResults);
  };

  const mainArticleLength = Math.ceil(articlesLength / 20);

  useEffect(() => {
    fetchNews();
    window.scrollTo(0, 0);
  }, [edit, category, receivePage]);

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
      <div className="newsBanner text-9xl font-singleDay text-[#72db73] mt-10">{category.slice(0, 1).toUpperCase() + category.slice(1)}</div>

      {match ? (
        <Outlet />
      ) : (
        <div>
          <div className=" flex w-[100%] bg-gray-500 justify-center items-center pb-2 ">
            <input
              onChange={(e) => editClickHandler(e)}
              className=" w-[23%] outline-none text-black rounded-3xl text-[.8rem] font-roboto bg-[#dfe3f1] flex flex-col items-center justify-center"
              type="text"
              name="edit"
              value={edit}
              placeholder="Title search"
            />
          </div>
          <div className="px-24 py-6 flex gap-5 flex-wrap justify-around bg-black text-white ">
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
                <div className=" h-[20px] textSmall font-medium flex bg-red-400 items-center justify-between px-1">
                  <span className="">{item.source.name.toUpperCase().slice(0, 19)}</span>
                  <span className=" text-[2px]">
                    {item.publishedAt.slice(0, 10).split("-").reverse().join("-")}, {item.publishedAt.slice(11, 19)}
                  </span>
                </div>
                <div className="  h-[100px] px-2 flex  items-center justify-center text-center">
                  <div className=" font-DM">{item.title.slice(0, 75) + "..."}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
      <div className=" bg-black   px-24 flex justify-between">
        <button
          disabled={receivePage <= 1}
          onClick={() => dispatch(decrement())}
          className={` ${receivePage <= 1 ? "bg-red-400" : "bg-blue-400"} border rounded-md px-2 my-3`}>
          Previous
        </button>
        <button
          disabled={mainArticleLength <= receivePage}
          onClick={() => dispatch(increment())}
          className={` ${mainArticleLength <= receivePage ? "bg-red-400" : "bg-blue-400"}  border rounded-md px-2 my-3`}>
          Next
        </button>
      </div>
    </>
  );
};

export default NewsComponent;
