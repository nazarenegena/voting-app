import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import { GoBook } from "react-icons/go";
import { MdAnimation } from "react-icons/md";
import { MdLibraryMusic } from "react-icons/md";
import { MdOutlineLocalMovies } from "react-icons/md";
import { IoMdAlbums } from "react-icons/io";
import VotePieChart from "./Charts/VotePieChart";
import FavouritesLineCharts from "./Charts/FavouritesLineCharts";
import topic from "../Images/topic.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import GenderPieChart from "./Charts/GenderPieChart";
import AgeBarChart from "./Charts/AgeBarChart";

const Content = () => {
  const candidates = [
    {
      name: "Taylor Swift",
      title: "Artist",
      votes: "134k",
    },
    {
      name: "Shonda Rhyms",
      title: "Director",
      votes: "214k",
    },
    {
      name: "J.K Rowlins",
      title: "Author",
      votes: "434k",
    },
    {
      name: "Stephen Hillenburg",
      title: "Producer",
      votes: "100k",
    },
    {
      name: "Eddy Park",
      title: "Director",
      votes: "104k",
    },
  ];

  const genre = [
    {
      icon: <MdOutlineLocalMovies />,
      type: "movies",
      title: "Barbie",
      votes: "234k",
    },
    {
      icon: <IoMdAlbums />,
      type: "album",
      title: "Cowboy Carter",
      votes: "694k",
    },
    {
      icon: <GoBook />,
      type: "book",
      title: "Harry Potter",
      votes: "600k",
    },
    {
      icon: <MdAnimation />,
      type: "animation",
      title: "Kung Fu Panda 4",
      votes: "105k",
    },
    {
      icon: <MdLibraryMusic />,
      type: "music",
      title: "Beautiful Things",
      votes: "350k",
    },

    {
      icon: <MdAnimation />,
      type: "cartoons",
      title: "SpongeBob SquarePants",
      votes: "702k",
    },
  ];

  const categories = [
    {
      icon: <MdLibraryMusic />,
      title: "music",
      votes: "544k",
    },
    {
      icon: <MdOutlineLocalMovies />,
      title: "movies",
      votes: "694k",
    },
    {
      icon: <MdAnimation />,
      title: "cartoons",
      votes: "300k",
    },
    {
      icon: <GoBook />,
      title: "Books",
      votes: "72k",
    },
    {
      icon: <MdAnimation />,
      title: "animation",
      votes: "100k",
    },

    {
      icon: <IoMdAlbums />,
      title: "Albums",
      votes: "203k",
    },
  ];
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=7c174ddd1a234b5a967a8a5e9261d1a3"
        );
        const data = await response.json();
        setNews(data.articles);
        console.log(news, "the data");
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchNews();
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className=" bg-neutral h-screen min-w-screen-md">
      <div className="grid grid-cols-4 gap-x-5 gap-y-4  mx-4 my-10">
        <Card title={"Top Candidates"} className={" "}>
          {candidates
            .map((candidate, index) => (
              <div key={index} className="flex ml-20 my-4">
                {" "}
                <div className="flex flex-col">
                  <p className="text-zinc-600 font-bold">{candidate.name} </p>
                  <p className=" font-medium text-zinc-500  mt-1 ">
                    {" "}
                    {candidate.title}
                    <span className="ml-3 text-zinc-600 ">
                      {candidate.votes} votes
                    </span>
                  </p>
                </div>
              </div>
            ))
            .slice(0, 3)}
        </Card>
        <Card title={"Top Categories"}>
          {categories
            .map((category, index) => (
              <div key={index} className="flex ml-20 mt-4">
                <div className="mr-10 font-bold flex">
                  {" "}
                  <p className="text-primary mt-1">{category.icon}</p>
                  <p className="ml-3 font-medium text-zinc-500">
                    {" "}
                    {category.title}
                    <span className="ml-16 text-zinc-600 ">
                      {category.votes} Votes
                    </span>
                  </p>
                </div>
              </div>
            ))
            .slice(0, 4)}
        </Card>

        <Card title={"Top Genre"} className={" "}>
          {genre
            .map((item, index) => (
              <div key={index} className="flex ml-20 my-4">
                {" "}
                <div className="flex flex-col">
                  <p className="text-zinc-600 font-bold ">{item.type} </p>
                  <p className=" font-medium text-zinc-500 ">
                    {" "}
                    {item.title}
                    <span className="ml-3 text-zinc-600 ">
                      {item.votes} votes
                    </span>
                  </p>
                </div>
              </div>
            ))
            .slice(0, 3)}
        </Card>
        <Card title="Votes Received">
          <VotePieChart />
        </Card>
      </div>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        infinite={true}
        partialVisible={false}
      >
        {news.map((newsItem, index) => (
          <div
            key={index}
            className=" bg-zinc-900   h-64 mx-5 font-semibold text-lg relative rounded-lg shadow-lg cursor-pointer  transform transition duration-500 
                                hover:scale-105 "
          >
            <a href={newsItem.url} target="#">
              <div
                className="absolute bg-cover bg-center inset-0 z-0 h-64 w-full rounded-lg bg-zinc-900 opacity-60 "
                style={{ backgroundImage: `url(${newsItem.urlToImage})` }}
              >
                {" "}
              </div>
              <div className="opacity-0 bg-muted/60 rounded-lg hover:opacity-100  duration-300 absolute inset-0 z-10  flex justify-center items-center">
                <p className="text-lg bg-primary text-white w-40 h-10 font-medium text-center flex justify-center items-center rounded-md">
                  View More
                </p>
              </div>{" "}
              <div className=" text-white mt-6 mx-8 absolute z-60 ">
                <p className="">{newsItem.description}</p>
                <p className="mt-8 italic font-medium ">{newsItem.author}</p>
              </div>
            </a>
          </div>
        ))}
      </Carousel>

      <div className="flex mt-10 ">
        <div className="w-1/3 h-96 bg-white shadow-lg  rounded-lg  p-5 mx-5">
          <p className=" font-bold text-lg text-purple-400 mb-4">Favourites</p>
          <FavouritesLineCharts />
        </div>
        <div className="w-1/3 h-96 bg-white shadow-lg  rounded-lg  p-5 ">
          <p className=" font-bold text-lg text-purple-400 mb-4">Gender</p>
          <GenderPieChart />
        </div>
        <div className="w-1/3 h-96 bg-white shadow-lg  rounded-lg  p-5 mx-5">
          <p className=" font-bold text-lg text-purple-400 mb-4">Age</p>
          <AgeBarChart />
        </div>
      </div>
    </div>
  );
};

export default Content;
