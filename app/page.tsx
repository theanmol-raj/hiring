import Job from "@/components/Job";
import JobCard from "@/components/JobCard";
import { Atom, Book, CheckCircle2, Hourglass, Mail, PanelsTopLeft, Phone, Triangle, icons } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const JobCategories = [
    { name: "Business Development", count: 0, icon: <Book /> },
    { name: "Business Development", count: 0, icon: <Book /> },
  ];

  const loveHir = [ {
    t : '24/7 Support',
    d: 'Many desktop publishing now use and a search for job.',
    l: '' ,
    i : <Phone />
  } ,{
    t : 'Tech & Startup Jobs',
    d: 'Many desktop publishing now use and a search for job.',
    l: '' ,
    i : <Atom/>
  },{
    t : 'Quick & Easy',
    d: 'Many desktop publishing now use and a search for job.',
    l: '' ,
    i : <PanelsTopLeft />
  },{
    t : 'Save Time',
    d: 'Many desktop publishing now use and a search for job.',
    l: '' ,
    i : <Hourglass />
  }]

  return (
    <div>
      <section className="h-screen bg-[#f2faf7] dark:bg-[#1f1d1f] flex items-center justify-center ">
        <div className=" p-4 md:p-8 lg:p-12 w-full flex items-center max-w-max max-h-max relative py-24">
          <img
            className="absolute bg-white rounded-md p-2 animate-spin duration-1000 -bottom-5 left-1/3 h-10"
            src="https://img.icons8.com/fluency/48/google-logo.png"
            alt="google-logo"
          />
          <img
            className="absolute bg-white rounded-md p-2 animate-pulse top-1/2 -left-24 h-10"
            src="https://img.icons8.com/color/48/facebook-new.png"
            alt="facebook-new"
          />
          <img
            className="absolute bg-white rounded-md p-2 right-0  md:-right-10 h-10"
            src="https://img.icons8.com/color/48/skype.png"
            alt="skype"
          />
          <img
            className="absolute bg-white rounded-md p-2 animate-ping top-0 right-0 h-10"
            src="https://img.icons8.com/ios-filled/50/FCC419/snapchat--v1.png"
            alt="snapchat--v1"
          />
          <img
            className="absolute bg-white rounded-md p-2 animate-bounce top-0 left-1/2  h-10"
            src="https://img.icons8.com/color/48/amazon.png"
            alt="amazon"
          />
          <div className="text-center space-y-3 w-full">
            <p className=" text-4xl xl:text-6xl tracking-tight font-semibold">
              Join us &{" "}
              <span className=" text-purple-500">
                Explore <br />
                Thousands
              </span>{" "}
              of Jobs
            </p>
            <p className=" max-w-2xl text-sm lg:text-lg leading-6  text-gray-500 dark:text-gray-300 mx-auto">
              Find Jobs, Employment & Career Opportunities. Some of the
              companies {`we've`} helped recruit excellent applicants over the
              years.
            </p>
            <div className=" flex border rounded-md md:rounded-lg bg-white dark:bg-white/10 h-24 w-full max-w-4xl  mx-auto"></div>
            <p className=" dark:text-gray-300 text-xs text-gray-500 font-light">
              <span className=" font-semibold dark:text-white text-black">
                Popular Searches :
              </span>{" "}
              Designer, Developer, Web, IOS, PHP Senior Engineer
            </p>
          </div>
        </div>
      </section>
      <section className=" p-4 md:p-8 lg:p-0 lg:pb-28">
        <div className=" max-w-7xl mx-auto py-12 md:py-24">
          <p className=" text-center text-2xl">Popular Categories</p>
          <p className=" text-sm font-light text-center max-w-lg mx-auto pt-2">
            Search all the open positions on the web. Get your own personalized
            salary estimate. Read reviews on over 30000+ companies worldwide.
          </p>
        </div>
        <div className=" grid pb-12 md:pb-24 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 max-w-7xl gap-4 md:gap-5 mx-auto">
          {JobCategories.map((item: any, index: number) => (
            <div key={index} className="p-4 border space-y-2 rounded-md md:p-8">
              <div className="p-4 rounded-lg text-purple-500 border  max-w-max mx-auto">
                {item.icon}
              </div>
              <p className=" text-sm font-medium leading-4 text-center">
                {item.name}
              </p>
              <p className=" font-light text-xs text-center">
                {item.count} Jobs
              </p>
            </div>
          ))}
        </div>
        <div className=" grid grid-cols-1 gap-4 md:gap-5 lg:gap-6 md:grid-cols-2 max-w-5xl mx-auto pb-12 md:pb-24">
          <div className=" relative">
            <button className=" text-purple-500 shadow-xl border p-8 rounded-full absolute z-10 bg-white rotate-90 right-5 top-5">
              <Triangle fill="#a855f7" size={16} />
            </button>
            <img
              className="h-[28rem] mx-auto rounded-lg"
              src="https://shreethemes.in/jobstack/layouts/assets/images/about/ab01.jpg"
            />
            <img
              className=" h-60 hidden md:block absolute -bottom-10 right-0 border p-2 bg-white "
              src="https://shreethemes.in/jobstack/layouts/assets/images/about/ab01.jpg"
            />
          </div>
          <div>
            <p className=" text-2xl font-semibold tracking-wide">
              Millions of jobs.
            </p>
            <p className=" text-2xl font-semibold tracking-wide">
              Find the one thats right for you.
            </p>
            <p className=" text-gray-500 pt-3  dark:text-gray-200">
              Search all the open positions on the web. Get your own
              personalized salary estimate. Read reviews on over 30000+
              companies worldwide.
            </p>
            <div className=" space-y-1 pt-3 text-gray-500 dark:text-gray-200 text-sm">
              <p className=" flex items-center ">
                <span className=" text-purple-500 mr-2">
                  <CheckCircle2 size={16} />
                </span>{" "}
                Digital Marketing Solutions for Tomorrow
              </p>
              <p className=" flex items-center ">
                <span className=" text-purple-500 mr-2">
                  <CheckCircle2 size={16} />
                </span>{" "}
                Digital Marketing Solutions for Tomorrow
              </p>
              <p className=" flex items-center ">
                <span className=" text-purple-500 mr-2">
                  <CheckCircle2 size={16} />
                </span>{" "}
                Digital Marketing Solutions for Tomorrow
              </p>
            </div>
            <button className=" flex bg-gradient-to-br from-purple-500 to-purple-400 p-2 px-6 rounded-md mt-4 text-white">
              <Mail />
              Contact Us
            </button>
          </div>
        </div>
      </section>
      <section className=" bg-[#f2faf7] dark:bg-[#1f1d1f] pb-16 dark:pb-24">
        <div className=" max-w-7xl mx-auto py-12 md:pt-24 md:pb-16">
          <p className=" text-center text-2xl">Popular Jobs</p>
          <p className=" text-sm font-light text-center max-w-lg mx-auto pt-2">
            Search all the open positions on the web. Get your own personalized
            salary estimate. Read reviews on over 30000+ companies worldwide.
          </p>
        </div>
        <div className=" grid grid-cols-1 gap-4 md:gap-5 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          <JobCard/>
          <JobCard/>
          <JobCard/>
          <JobCard/>
          <JobCard/>
          <JobCard/>

        </div>
        <p className=" text-center pt-4  underline text-sm dark:text-gray-500 font-light">See more -</p>
      </section>
      <section className=" p-4 md:p-8 lg:py-12 xl:py-24">
      <div className=" grid grid-cols-1 gap-4 md:gap-5 lg:gap-6 md:grid-cols-2 max-w-5xl mx-auto pb-12 md:pb-24">
          <div>
            <p className=" text-2xl font-semibold tracking-wide">
            Find Best Companies.
            </p>
            <p className=" text-2xl font-semibold tracking-wide">
            </p>
            <p className=" text-gray-500 pt-3  dark:text-gray-200">
            Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.
            </p>
            <div className=" grid grid-cols-1 gap-4 md:gap-6 sm:grid-cols-2 pt-4 md:pt-8">
              <div className="flex items-center space-x-4 p-4 border rounded-md">
                <img className=" border bg-white dark:bg-black p-2 h-12 rounded-md" src="https://shreethemes.in/jobstack/layouts/assets/images/company/spotify.png" />
                <div>
                  <p className=" text-sm">Spotify</p>
                  <p className=" text-xs">5 Vacancy</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 border rounded-md">
                <img className=" border bg-white dark:bg-black p-2 h-12 rounded-md" src="https://shreethemes.in/jobstack/layouts/assets/images/company/spotify.png" />
                <div>
                  <p className=" text-sm">Spotify</p>
                  <p className=" text-xs">5 Vacancy</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 border rounded-md">
                <img className=" border bg-white dark:bg-black p-2 h-12 rounded-md" src="https://shreethemes.in/jobstack/layouts/assets/images/company/spotify.png" />
                <div>
                  <p className=" text-sm">Spotify</p>
                  <p className=" text-xs">5 Vacancy</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 border rounded-md">
                <img className=" border bg-white dark:bg-black p-2 h-12 rounded-md" src="https://shreethemes.in/jobstack/layouts/assets/images/company/spotify.png" />
                <div>
                  <p className=" text-sm">Spotify</p>
                  <p className=" text-xs">5 Vacancy</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 border rounded-md">
                <img className=" border bg-white dark:bg-black p-2 h-12 rounded-md" src="https://shreethemes.in/jobstack/layouts/assets/images/company/spotify.png" />
                <div>
                  <p className=" text-sm">Spotify</p>
                  <p className=" text-xs">5 Vacancy</p>
                </div>
              </div>

            </div>
            
          </div>
          <div className=" relative">
            <button className=" text-purple-500 shadow-xl border p-8 rounded-full absolute z-10 bg-white rotate-90 right-5 top-5">
              <Triangle fill="#a855f7" size={16} />
            </button>
            <img
              className="h-[28rem] mx-auto rounded-lg"
              src="https://shreethemes.in/jobstack/layouts/assets/images/about/ab01.jpg"
            />
            <img
              className=" h-60 hidden md:block absolute -bottom-10 left-0 border p-2 bg-white "
              src="https://shreethemes.in/jobstack/layouts/assets/images/about/ab01.jpg"
            />
          </div>
        </div>
        <div className=" max-w-7xl mx-auto py-12 md:pt-24 md:pb-16">
          <p className=" text-center text-2xl">{`Here's why you'll love it Jobstack`}</p>
          <p className=" text-sm font-light text-center max-w-lg mx-auto pt-2">
          Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.
          </p>
        </div>
        <div className=" gap-4 md:gap-5 max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4">
          {loveHir.map((item: any, index: number) => (
            <div key={index} className="p-4 border space-y-2 rounded-md md:p-8">
              <div className="p-4 rounded-lg text-purple-500 border  max-w-max mx-auto">
                {item.i}
              </div>
              <p className=" text-sm font-medium leading-4 text-center">
                {item.t}
              </p>
              <p className=" text-xs text-center">{item.d}</p>
              <p className=" font-light text-xs text-center">
                Read More
              </p>
            </div>
          ))}
            
        </div>
        {/*  */}
      </section>
    </div>
  );
}
