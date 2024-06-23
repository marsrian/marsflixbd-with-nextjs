"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const Slider = () => {
  const [itemActive, setItemActive] = useState(0);
  const items = [
    {
      img: "/Debi.jpg",
      title: "DEBI",
      desc: "A story following the life of Ranu (Joya Ahsan) and her paranormal powers. She goes to psychiatrist Misir Ali (Chanchal Chowdhury) to find an answer to all her questions.",
    },
    {
      img: "/Surongo.jpg",
      title: "Surongo",
      desc: "A simple electrician from a village turns to crime and goes to extreme lengths to satisfy his love.",
    },
    {
      img: "/img3.jpg",
      title: "Slider 03",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.",
    },
    {
      img: "/img4.jpg",
      title: "Slider 04",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.",
    },
    {
      img: "/img5.jpg",
      title: "Slider 05",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.",
    },
  ];

  const countItem = items.length;

  const nextSlide = () => {
    setItemActive((prevItem) => (prevItem + 1) % countItem);
  };

  const prevSlide = () => {
    setItemActive((prevItem) => (prevItem - 1 + countItem) % countItem);
  };

  const showSlider = (index) => {
    setItemActive(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      <div className="list">
        {items.map((item, index) => (
          <div
            className={`item ${index === itemActive ? "active" : ""}`}
            key={index}
          >
            <img src={item.img} alt={`Slide ${index + 1}`} />
            <div className="content">
              <p></p>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="arrows">
        <button id="prev" onClick={prevSlide}>
          &lt;
        </button>
        <button id="next" onClick={nextSlide}>
          &gt;
        </button>
      </div>
      <div className="thumbnail">
        {items.map((item, index) => (
          <div
            className={`item ${index === itemActive ? "active" : ""}`}
            key={index}
            onClick={() => showSlider(index)}
          >
            <img src={item.img} alt={`Thumbnail ${index + 1}`} />
            <div className="content">{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
