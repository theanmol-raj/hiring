/* eslint-disable @next/next/no-img-element */
"use client";

import { Bookmark } from "lucide-react";
import React, { useEffect, useState } from "react";

interface typeTouchConfigJob {
  activeColour : number
  touchStart: number | null;
  touchEnd: number | null;
  minSwipe: number;
  detectedSwipe: boolean;
  direction: "left" | "right" | null;
}

function Job() {
  const touchConfig: typeTouchConfigJob = {
    activeColour : 0,
    touchEnd: null,
    touchStart: null,
    minSwipe: 40,
    detectedSwipe: false,
    direction: null,
  };
  const [touch, setTouch] = useState<typeTouchConfigJob>(touchConfig);

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const { clientX } = e.targetTouches[0];
    setTouch((prev: typeTouchConfigJob) => ({
      ...prev,
      touchEnd: null,
      touchStart: clientX,
    }));
  };

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const { clientX } = e.targetTouches[0];
    setTouch((prev: typeTouchConfigJob) => ({
      ...prev,
      touchEnd: clientX,
    }));
    const { touchStart, touchEnd, minSwipe } = touch;
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipe;
    const isRightSwipe = distance < -minSwipe;
    if (isLeftSwipe || isRightSwipe) {
      setTouch((prev: typeTouchConfigJob) => ({
        ...prev,
        direction: isLeftSwipe ? "left" : isRightSwipe ? "right" : null,
      }));
    } else {
      setTouch((prev: typeTouchConfigJob) => ({
        ...prev,
        direction: null,
      }));
    }
  };

  const onTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const { direction } = touch;
    if (direction) {
      setTouch((prev: typeTouchConfigJob) => ({
        ...prev,
        detectedSwipe: true,
      }));
    } else {
      setTouch(touchConfig);
    }

    // actual swipe logic comes here
  };

  const colours = ["bg-green-200/50", "bg-rose-200/50"];
  useEffect(()=>{
    setTouch((prev :typeTouchConfigJob) => ({...prev , activeColour : Math.floor(Math.random() * colours.length) }))
  },[])

  return (
    <div
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      className={` w-full h-full p-2 border transform duration-500  flex flex-col   ease-in-out ${
        touch.detectedSwipe && touch.direction === "left"
          ? " -translate-x-full   overflow-hidden"
          : touch.detectedSwipe && touch.direction === "right"
          ? " translate-x-full overflow-hidden "
          : ""
      }  ${
        !touch.detectedSwipe && touch.direction === "left"
          ? " -translate-x-1/2 -rotate-12 overflow-hidden"
          : !touch.detectedSwipe && touch.direction === "right"
          ? " translate-x-1/2 rotate-12 overflow-hidden"
          : ""
      } `}
    >
      <div
        className={`"  flex-1 md:flex-none md:pb-16 md:px-24 max-h-max rounded-lg ${
          colours[touch.activeColour]
        }`}
      >
        <div className="flex items-center p-8 px-4 justify-between">
          <div className=" bg-white dark:bg-black p-2 text-sm rounded-full font-semibold px-4">
            {" "}
            20th May 2024{" "}
          </div>
          <button className=" bg-white dark:bg-black p-2 text-sm rounded-full font-semibold">
            <Bookmark size={18} fill="black" />
          </button>
        </div>
        <div className="flex items-end p-8 px-4 justify-between">
          <div className=" w-full">
            <p className=" font-medium ">Amazon</p>
            <p className=" font-bold text-3xl tracking-tighter">Software Development Intern</p>
          </div>
          <img className=" h-12 w-12 rounded-full bg-white  p-2" src="https://img.icons8.com/3d-fluency/188/amazon.png" alt="amazon"/>
        </div>
        <div className="flex gap-3 px-4 flex-wrap">
            <p className=" whitespace-nowrap text-xs dark:border-white border border-black p-2 px-4 rounded-full">Part Time</p>
            <p className=" whitespace-nowrap text-xs dark:border-white border border-black p-2 px-4 rounded-full">Remote Work</p>
            <p className=" whitespace-nowrap text-xs dark:border-white border border-black p-2 px-4 rounded-full">Senior </p>
            <p className=" whitespace-nowrap text-xs dark:border-white border border-black p-2 px-4 rounded-full">Data Analytics</p>
        </div>

      </div>
      <div className=" flex justify-between px-4 p-8">
        <div>
            <p className=" text-lg font-bold">$250/hr</p>
            <p className=" text-xs">Hyderabad , India</p>
        </div>
        <div className=" space-x-3"><button className=" font-bold text-black dark:text-white border border-black hidden md:inline-flex dark:border-white px-8 rounded-full py-2">Apply</button>
        <button className=" font-bold text-white bg-black px-8 rounded-full py-2">Details</button></div>
      </div>

      <div className=" px-24 border-t py-8 hidden md:block">
        <p className=" uppercase font-semibold">About the Job</p>
        <p className=" text-sm tracking-tight  pt-2 dark:text-gray-300">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the {`industry's`} standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
      </div>
      <div className=" px-24 border-t py-8 md:block hidden">
        <p className=" uppercase font-semibold">Responsiblities</p>
        <ul className=" list-disc pl-4 pt-1">
          <li>d</li>
          <li>ki</li>
        </ul>
      </div>
    </div>
  );
}

export default Job;
