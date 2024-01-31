/* eslint-disable @next/next/no-img-element */
"use client";
import {
  BadgeCheck,
  Briefcase,
  Check,
  Award,
  Link,
  CircleUserRound,
  Compass,
  Flag,
  GraduationCap,
  X,
  Zap,
  Crosshair,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import React, { useState } from "react";
import { Button } from "./ui/button";

interface typeTouchConfig {
  touchStart: number | null;
  touchEnd: number | null;
  minSwipe: number;
  detectedSwipe : boolean,
  direction : 'left' | 'right' | null,
}

function Profile() {
  const touchConfig: typeTouchConfig = {
    touchEnd: null,
    touchStart: null,
    minSwipe: 40,
    detectedSwipe : false,
    direction :null,
  };
  const [touch, setTouch] = useState<typeTouchConfig>(touchConfig);

  const onTouchStart = (e:  React.TouchEvent<HTMLDivElement>) => {
    const { clientX } = e.targetTouches[0];
    setTouch((prev: typeTouchConfig) => ({
      ...prev,
      touchEnd: null,
      touchStart: clientX,
    }));
  };

  const onTouchMove = (e:  React.TouchEvent<HTMLDivElement>) =>{
    const { clientX } = e.targetTouches[0];
    setTouch((prev: typeTouchConfig) => ({
      ...prev,
      touchEnd: clientX,

    }))
    const { touchStart, touchEnd, minSwipe } = touch;
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipe;
    const isRightSwipe = distance < -minSwipe;
    if (isLeftSwipe || isRightSwipe){
      setTouch((prev: typeTouchConfig) => ({
        ...prev,
        direction : isLeftSwipe? 'left' : isRightSwipe ? 'right' : null
      }))
    }else{
      setTouch((prev: typeTouchConfig) => ({
        ...prev,
        direction : null
      }))

    }
  
  
  
  }

  const onTouchEnd = (e :  React.TouchEvent<HTMLDivElement>) => {
    const {direction} = touch;
    if (direction){
      setTouch((prev: typeTouchConfig) => ({
        ...prev,
        detectedSwipe :true
      }))
    }else{
      setTouch(touchConfig)
    }

    // actual swipe logic comes here 
  };
  return (
    <div
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      className={` w-full h-full transform duration-500 ease-in-out ${touch.detectedSwipe && touch.direction === 'left'  ? ' -translate-x-full  overflow-hidden' : touch.detectedSwipe && touch.direction === 'right' ? ' translate-x-full overflow-hidden' : '' }  ${!touch.detectedSwipe && touch.direction === 'left'  ? ' -translate-x-1/2 -rotate-12 overflow-hidden' : !touch.detectedSwipe && touch.direction === 'right' ? ' translate-x-1/2 rotate-12 overflow-hidden' : '' } `}
    >
      <div className=" h-full relative md:hidden">
        <img
          className=" h-full w-full object-cover"
          src="https://media.licdn.com/dms/image/D4D03AQFMdduotOpucQ/profile-displayphoto-shrink_800_800/0/1696180126571?e=1712188800&v=beta&t=SgsSNG9IUtGVebS_l64txlqOVvl3Zbfot_iAtDHuw-0"
        />
        <div className=" absolute bottom-0 space-y-1  p-4 bg-gradient-to-t from-black text-white w-full">
          <h2 className=" text-2xl flex ">
            Anmol, 22
            <span className=" text-white">
              <BadgeCheck fill="blue" strokeWidth={3} />
            </span>
          </h2>
          <p className=" flex text-sm items-center">
            <span className=" mr-1">
              <CircleUserRound size={20} />
            </span>
            he /him
          </p>
          <p className=" flex text-sm items-center">
            <span className=" mr-1">
              <Briefcase size={20} />
            </span>
            Machine Learning Intern , Drut.ai
          </p>
          <p className=" flex text-sm items-center">
            <span className=" mr-1">
              <GraduationCap size={20} />
            </span>{" "}
            KL University , Hyderabad
          </p>
        </div>
      </div>
      <div className="hidden md:flex p-8">
        <img
          className=" h-46 w-60 rounded-full p-2 border dark:bg-black/5 bg-white  "
          src="https://media.licdn.com/dms/image/D4D03AQFMdduotOpucQ/profile-displayphoto-shrink_800_800/0/1696180126571?e=1712188800&v=beta&t=SgsSNG9IUtGVebS_l64txlqOVvl3Zbfot_iAtDHuw-0"
        />
        <div className="  p-4 w-full max-w-max space-y-1">
          <h2 className=" text-2xl flex ">
            Anmol, 22
            <span className=" text-white">
              {" "}
              <BadgeCheck fill="blue" strokeWidth={3} />
            </span>
          </h2>
          <p className=" flex text-sm items-center">
            <span className=" mr-1">
              <CircleUserRound size={20} />
            </span>
            he /him
          </p>
          <p className=" flex text-sm items-center">
            <span className=" mr-1">
              <Briefcase size={20} />
            </span>
            Machine Learning Intern , Drut.ai
          </p>
          <p className=" flex text-sm items-center">
            <span className=" mr-1">
              <GraduationCap size={20} />
            </span>{" "}
            KL University , Hyderabad
          </p>
          <div className=" pt-3.5">
            <p className=" text-sm font-semibold">About Me</p>
            <p className=" text-xs">
              {" "}
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was{" "}
            </p>
          </div>
        </div>
      </div>
      <div className=" pt-3.5 md:hidden bg-yellow-500/10 rounded-b-md p-4">
        <p className=" text-sm font-semibold">About Me</p>
        <p className=" text-xs">
          {" "}
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries, but also the
          leap into electronic typesetting, remaining essentially unchanged. It
          was{" "}
        </p>
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
        <div className=" grid md: grid-cols-3 gap-2">
          <div className=" bg-gradient-to-t min-h-24 from-green-200 via-green-300 to-green-300 rounded-md text-green-800 justify-center items-center   flex ">
            <div className=" scale-75 md:scale-100">
              <div className=" flex">
                <Flag fill="green" />
                <h1 className=" text-2xl"> 8</h1>
              </div>
              <p className="text-black/90 text-xs">Goals in Week</p>
            </div>
          </div>
          <div className=" bg-gradient-to-t min-h-24 from-yellow-200 via-yellow-300 to-yellow-300 rounded-md text-yellow-800 justify-center items-center   flex ">
            <div className=" scale-75 md:scale-100">
              <div className=" flex">
                <Zap fill="#854d0e" />
                <h1 className=" text-2xl"> 12</h1>
              </div>
              <p className="text-black/90 text-xs w-full">Days Streaks</p>
            </div>
          </div>
          <div className=" bg-gradient-to-t min-h-24 from-purple-200 via-purple-300 to-purple-300 rounded-md text-purple-800 justify-center items-center   flex ">
            <div className=" scale-75 md:scale-100">
              <div className=" flex">
                {/* <Flag /> */}
                <h1></h1>
              </div>
              <p className="text-black/90 text-xs">4th place</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Tabs defaultValue="wexp" className="w-full">
          <TabsList className="flex relative justify-start flex-wrap gap-2 md:gap-x-4 md:pl-2">
            <TabsTrigger className=" flex-1 md:max-w-max" value="wexp">
              Work Experience
            </TabsTrigger>
            <TabsTrigger className=" flex-1 md:max-w-max" value="proj">
              Projects
            </TabsTrigger>
            <TabsTrigger className=" flex-1 md:max-w-max" value="achi">
              Achievements
            </TabsTrigger>
            <TabsTrigger className=" flex-1 md:max-w-max" value="lnc">
              Licenses & certifications
            </TabsTrigger>
          </TabsList>
          <div className="" />
          <TabsContent value="wexp">
            <div className=" dark:bg-white/5 border-[1px] rounded-lg px-8 p-4 ">
              <div className="p-2  space-y-1 border-b border-yellow-500  py-4">
                <p className="text-sm font-semibold">Developer Role</p>
                <p className="text-black/90 dark:text-white/90 font-semibold text-xs">
                  Some Organisation
                </p>
                <p className="text-black/70 dark:text-white/70 text-xs">Date</p>
                <p className="text-black/70 dark:text-white/70 text-xs">
                  Remote
                </p>
              </div>
              <div className="p-2  space-y-1 border-b border-yellow-500  py-4">
                <p className="text-sm font-semibold">Developer Role</p>
                <p className="text-black/90 dark:text-white/90 font-semibold text-xs">
                  Some Organisation
                </p>
                <p className="text-black/70 dark:text-white/70 text-xs">Date</p>
                <p className="text-black/70 dark:text-white/70 text-xs">
                  Remote
                </p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="proj">
            <div className="  border-[1px] rounded-lg px-8 py-4 h-[490px] md:h-[350px]">
              <div className="pt-2 h-20">
                <div className="flex flex-row">
                  <Link size={15} className="mr-1 cursor-pointer" />
                  <p className="text-sm font-semibold cursor-pointer">
                    Discord Clone
                  </p>
                </div>
                <p className="text-black/90 font-semibold text-xs">
                  Explaination is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the standard dummy
                  text ever since the 1500
                </p>
              </div>
              <hr />
            </div>
          </TabsContent>
          <TabsContent value="achi">
            <div className="  border-[1px] rounded-lg px-8 py-4 h-[490px] md:h-[350px] flex flex-col justify-center items-center">
              <div className="flex flex-row">
                <Award size={20} />
                <p className="text-black/50 dark:text-white/80 pb-2 text-sm font-semibold">
                  Show off your Achievements and Certifications
                </p>
              </div>
              <AlertDialog>
                <AlertDialogTrigger>
                  <Button className=""> Add + </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete
                      your account and remove your data from our servers.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Continue</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <div className=" border my-2 rounded-md p-4">
        <p className=" font-semibold text-center md:text-left">Tech Stack</p>
        <div className=" grid grid-cols-3 md:grid-cols-6 gap-2 pt-4">
          <div className=" md:flex items-center space-x-3 p-3 md:border rounded-md">
            <img
              className=" mx-auto md:mx-0 h-10"
              src="https://img.icons8.com/officel/160/react.png"
              alt="react"
            />
            <p className=" text-xs text-center md:text-sm">React Js</p>
          </div>
          <div className=" md:flex items-center space-x-3 p-3 md:border rounded-md">
            <img
              className=" mx-auto md:mx-0 h-10"
              src="https://img.icons8.com/officel/160/react.png"
              alt="react"
            />
            <p className=" text-xs text-center md:text-sm">React Js</p>
          </div>
          <div className=" md:flex items-center space-x-3 p-3 md:border rounded-md">
            <img
              className=" mx-auto md:mx-0 h-10"
              src="https://img.icons8.com/officel/160/react.png"
              alt="react"
            />
            <p className=" text-xs text-center md:text-sm">React Js</p>
          </div>
          <div className=" md:flex items-center space-x-3 p-3 md:border rounded-md">
            <img
              className=" mx-auto md:mx-0 h-10"
              src="https://img.icons8.com/officel/160/react.png"
              alt="react"
            />
            <p className=" text-xs text-center md:text-sm">React Js</p>
          </div>
          <div className=" md:flex items-center space-x-3 p-3 md:border rounded-md">
            <img
              className=" mx-auto md:mx-0 h-10"
              src="https://img.icons8.com/officel/160/react.png"
              alt="react"
            />
            <p className=" text-xs text-center md:text-sm">React Js</p>
          </div>
          <div className=" md:flex items-center space-x-3 p-3 md:border rounded-md">
            <img
              className=" mx-auto md:mx-0 h-10"
              src="https://img.icons8.com/officel/160/react.png"
              alt="react"
            />
            <p className=" text-xs text-center md:text-sm">React Js</p>
          </div>
          <div className=" md:flex items-center space-x-3 p-3 md:border rounded-md">
            <img
              className=" mx-auto md:mx-0 h-10"
              src="https://img.icons8.com/officel/160/react.png"
              alt="react"
            />
            <p className=" text-xs text-center md:text-sm">React Js</p>
          </div>
          <div className=" md:flex items-center space-x-3 p-3 md:border rounded-md">
            <img
              className=" mx-auto md:mx-0 h-10"
              src="https://img.icons8.com/officel/160/react.png"
              alt="react"
            />
            <p className=" text-xs text-center md:text-sm">React Js</p>
          </div>
          <div className=" md:flex items-center space-x-3 p-3 md:border rounded-md">
            <img
              className=" mx-auto md:mx-0 h-10"
              src="https://img.icons8.com/officel/160/react.png"
              alt="react"
            />
            <p className=" text-xs text-center md:text-sm">React Js</p>
          </div>
          <div className=" md:flex items-center space-x-3 p-3 md:border rounded-md">
            <img
              className=" mx-auto md:mx-0 h-10"
              src="https://img.icons8.com/officel/160/react.png"
              alt="react"
            />
            <p className=" text-xs text-center md:text-sm">React Js</p>
          </div>
        </div>
      </div>
      <div className=" border my-2 rounded-md p-4">
        <p className=" font-semibold text-center md:text-left">
          Recomendations
        </p>
        <div className=" grid grid-cols-1 md:grid-cols-2 pt-6 gap-2">
          <div className="p-6  rounded-4xl shadow-lg border rounded-lg">
            <div className="flex mb-2 items-center">
              <img
                className="block w-16 h-16 rounded-full"
                src="https://media.licdn.com/dms/image/D4D03AQFMdduotOpucQ/profile-displayphoto-shrink_800_800/0/1696180126571?e=1712188800&v=beta&t=SgsSNG9IUtGVebS_l64txlqOVvl3Zbfot_iAtDHuw-0"
                alt=""
              />
              <div className="ml-5">
                <span className="block text-lg font-semibold leading-none">
                  Jerome Bell
                </span>
                <span className="block text-sm text-gray-500">
                  Founder of Uranus
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-900 dark:text-gray-200 mb-6">
              It was a pleasure working with the Saturn. They understood the
              brief correctly and delivered great designs exceeding the
              expectations.
            </p>
            <div className="flex items-center">
              <img
                className="block mr-1.5"
                src="saturn-assets/images/testimonials/star.svg"
                alt=""
              />
              <img
                className="block mr-1.5"
                src="saturn-assets/images/testimonials/star.svg"
                alt=""
              />
              <img
                className="block mr-1.5"
                src="saturn-assets/images/testimonials/star.svg"
                alt=""
              />
              <img
                className="block mr-1.5"
                src="saturn-assets/images/testimonials/star.svg"
                alt=""
              />
              <img
                className="block mr-1.5"
                src="saturn-assets/images/testimonials/star.svg"
                alt=""
              />
            </div>
          </div>
          <div className="p-6  rounded-4xl shadow-lg border rounded-lg">
            <div className="flex mb-2 items-center">
              <img
                className="block w-16 h-16 rounded-full"
                src="https://media.licdn.com/dms/image/D4D03AQFMdduotOpucQ/profile-displayphoto-shrink_800_800/0/1696180126571?e=1712188800&v=beta&t=SgsSNG9IUtGVebS_l64txlqOVvl3Zbfot_iAtDHuw-0"
                alt=""
              />
              <div className="ml-5">
                <span className="block text-lg font-semibold leading-none">
                  Jerome Bell
                </span>
                <span className="block text-sm text-gray-500">
                  Founder of Uranus
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-900 dark:text-gray-200 mb-6">
              It was a pleasure working with the Saturn. They understood the
              brief correctly and delivered great designs exceeding the
              expectations.
            </p>
            <div className="flex items-center">
              <img
                className="block mr-1.5"
                src="saturn-assets/images/testimonials/star.svg"
                alt=""
              />
              <img
                className="block mr-1.5"
                src="saturn-assets/images/testimonials/star.svg"
                alt=""
              />
              <img
                className="block mr-1.5"
                src="saturn-assets/images/testimonials/star.svg"
                alt=""
              />
              <img
                className="block mr-1.5"
                src="saturn-assets/images/testimonials/star.svg"
                alt=""
              />
              <img
                className="block mr-1.5"
                src="saturn-assets/images/testimonials/star.svg"
                alt=""
              />
            </div>
          </div>
          
        </div>
        
      </div>

      <div className=" hidden md:flex items-center justify-center py-24 pb-32 space-x-4">
        <button className=" border p-6 rounded-full bg-gradient-to-br from-yellow-400/30 to-yellow-600/50 hover:bg-yellow-500  "><X /></button>
        <button className=" border p-6 -mt-24 rounded-full bg-gradient-to-br from-yellow-400/30 to-yellow-600/50 hover:bg-yellow-500 "><Crosshair /></button>
        <button className=" border p-6 rounded-full bg-gradient-to-br from-yellow-400/30 to-yellow-600/50 hover:bg-yellow-500 "><Check /></button>

      </div>
    </div>
  );
}

export default Profile;
