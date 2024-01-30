"use client";
import { BadgeCheck, Briefcase, Check, CircleUserRound, Compass, Flag, GraduationCap, X, Zap } from "lucide-react";
import React, { useState } from "react";

interface typeTouchConfig {
  touchStart: any;
  touchEnd: any;
  minSwipe: number;
}

function Profile() {
  const touchConfig: typeTouchConfig = {
    touchEnd: null,
    touchStart: null,
    minSwipe: 40,
  };
  const [touch, setTouch] = useState<typeTouchConfig>(touchConfig);

  const onTouchStart = (e: any) => {
    const { clientX } = e.targetTouches[0];
    setTouch((prev: typeTouchConfig) => ({
      ...prev,
      touchEnd: null,
      touchStart: clientX,
    }));
  };

  const onTouchMove = (e: any) =>
    setTouch((prev: typeTouchConfig) => ({
      ...prev,
      touchEnd: e.targetTouches[0].clientX,
    }));

  const onTouchEnd = () => {
    const { touchStart, touchEnd, minSwipe } = touch;
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipe;
    const isRightSwipe = distance < -minSwipe;
    if (isLeftSwipe || isRightSwipe)
      console.log("swipe", isLeftSwipe ? "left" : "right");
    // add your conditional logic here
  };
  return (
    <div onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd} className=" w-full h-full">
      <div className=" h-full relative md:hidden">
        <img
          className=" h-full w-full object-cover"
          src="https://media.licdn.com/dms/image/D4D03AQFMdduotOpucQ/profile-displayphoto-shrink_800_800/0/1696180126571?e=1712188800&v=beta&t=SgsSNG9IUtGVebS_l64txlqOVvl3Zbfot_iAtDHuw-0"
        />
        <div className=" absolute bottom-0 space-y-1  p-4 bg-gradient-to-t from-black text-white w-full">
          <h2 className=" text-2xl flex ">Anmol, 22<span className=" text-white"><BadgeCheck  fill="blue"strokeWidth={3} /></span></h2>
          <p className=" flex text-sm items-center"><span className=" mr-1"><CircleUserRound size={20} /></span>he /him</p>
          <p className=" flex text-sm items-center"><span className=" mr-1"><Briefcase  size={20} /></span>Machine Learning Intern , Drut.ai</p>
          <p className=" flex text-sm items-center"><span className=" mr-1"><GraduationCap size={20} /></span> KL University , Hyderabad</p>
        </div>
      </div>
      <div className="hidden md:flex p-8">
        <img
          className=" h-46 w-60 rounded-full p-2 border dark:bg-black/5 bg-white  "
          src="https://media.licdn.com/dms/image/D4D03AQFMdduotOpucQ/profile-displayphoto-shrink_800_800/0/1696180126571?e=1712188800&v=beta&t=SgsSNG9IUtGVebS_l64txlqOVvl3Zbfot_iAtDHuw-0"
        />
        <div className="  p-4 w-full max-w-max space-y-1">
          <h2 className=" text-2xl flex ">Anmol, 22<span className=" text-white"> <BadgeCheck fill="blue" strokeWidth={3} /></span></h2>
          <p className=" flex text-sm items-center"><span className=" mr-1"><CircleUserRound size={20} /></span>he /him</p>
          <p className=" flex text-sm items-center"><span className=" mr-1"><Briefcase  size={20} /></span>Machine Learning Intern , Drut.ai</p>
          <p className=" flex text-sm items-center"><span className=" mr-1"><GraduationCap size={20} /></span> KL University , Hyderabad</p>
          <div className=" pt-3.5">
            <p className=" text-sm font-semibold">About Me</p>
            <p className=" text-xs"> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was </p>
          </div>
        </div>
      </div>
      <div className=" pt-3.5 md:hidden bg-yellow-500/10 rounded-b-md p-4">
            <p className=" text-sm font-semibold">About Me</p>
            <p className=" text-xs"> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was </p>
          </div>
      <div className=" w-full md:p-2 py-2 flex flex-col gap-2">
          <div className=" bg-gradient-to-t from-blue-200 via-blue-300 to-blue-300 rounded-md text-blue-800 p-8">
            <div className=" flex">
              <Compass />
              <h1> Cheif Design Officer</h1>
            </div>
            <p className="text-black/90 text-xs">
              My goal in 1.5 years - 200 points
            </p>
          </div>
          <div className=" grid md:grid-cols-3 gap-2">
            <div className=" bg-gradient-to-t from-green-200 via-green-300 to-green-300 rounded-md text-green-800 p-8">
              <div className=" flex">
                <Flag fill="green" />
                <h1 className=" text-2xl"> 8</h1>
              </div>
              <p className="text-black/90 text-xs">
                Goals in Week
              </p>
            </div>
            <div className=" bg-gradient-to-t from-yellow-200 via-yellow-300 to-yellow-300 rounded-md text-yellow-800 p-8">
              <div className=" flex">
              <Zap fill="#fde049" />
                <h1 className=" text-2xl"> 12</h1>
              </div>
              <p className="text-black/90 text-xs">
                Days Streaks
              </p>
            </div>
            <div className=" bg-gradient-to-t from-purple-200 via-purple-300 to-purple-300 rounded-md text-purple-800 p-8">
              <div className=" flex">
                {/* <Flag /> */}
                <h1></h1>
              </div>
              <p className="text-black/90 text-xs">
                4th place
              </p>
            </div>
          </div>
        </div>



      {/* <p>Hellp</p>
      <p>Hellp</p>
      <p>Hellp</p>
      <p>Hellp</p>
      <p>Hellp</p>
      <p>Hellp</p>
      <p>Hellp</p>
      <p>Hellp</p>
      <p>Hellp</p>
      <p>Hellp</p>
      <p>Hellp</p>
      <p>Hellp</p>
      <p>Hellp</p>
      <p>Hellp</p>
      <p>Hellp</p>
      <p>Hellp</p>
      <p>Hellp</p>
      <p>Hellp</p>
      <p>Hellp</p>
      <p>Hellp</p>
      <p>Hellp</p> */}
    </div>
  );
}

export default Profile;
