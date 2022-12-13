import React, { useState, useEffect } from "react";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { Link, useHistory } from "react-router-dom";
import Cookies from "universal-cookie";

import Circle from "../components/animation/circle";
import Header from "../components/header/header";

const Home = () => {
     const cookies = new Cookies();
     const history = useHistory();

     useEffect(() => {
          document.title = "Sign In | BookNook Library";

          if (isUserAuthenticatedCookie()) {
               history.push("/books-recommendations");
          }
     });

     const isUserAuthenticatedCookie = () => {
          return cookies.get("bn_aut");
     };

     const [timeNow, setTimeNow] = useState("");

     useEffect(() => {
          document.title = "Home | BookNook Library";

          setInterval(() => {
               setTimeNow(
                    `${
                         new Date().getHours() > 12
                              ? new Date().getHours() % 12
                              : new Date().getHours()
                    } : ${new Date().getMinutes()} : ${new Date().getSeconds()} ${
                         new Date().getHours() > 12 ? "PM" : "AM"
                    }`
               );
          }, 1000);

          // console.log(timeNow);
     });

     return (
          <div className="home-route position-relative w-100 vh-100 overflow-hidden">
               <Header />
               <Circle
                    size="7"
                    backgroundColor="beige"
                    duration="25"
                    top="150"
                    right="400"
               />
               <Link to="/books-recommendations   ">
                    <Circle
                         size="20"
                         backgroundColor="light-purple"
                         duration="30"
                         top="300"
                         right="400"
                         hover
                    >
                         Book Recommendation
                    </Circle>
               </Link>
               <Circle
                    size="10"
                    backgroundColor="beige"
                    duration="15"
                    bottom="90"
                    left="400"
               />

               <Circle
                    size="8"
                    backgroundColor="beige"
                    duration="23"
                    bottom="60"
                    right="600"
               />

               <Circle
                    size="8"
                    backgroundColor="beige"
                    duration="31"
                    bottom="550"
                    left="200"
                    hover
               ></Circle>

               <Circle
                    size="6"
                    backgroundColor="beige"
                    duration="27"
                    bottom="300"
                    right="100"
               />

               <Link to="/sign-in">
                    <Circle
                         size="15"
                         backgroundColor="light-purple"
                         duration="20"
                         bottom="150"
                         left="400"
                         hover
                    >
                         Sign In
                    </Circle>
               </Link>
               <Link to="/sign-up">
                    <Circle
                         size="10"
                         backgroundColor="light-purple"
                         duration="21"
                         bottom="100"
                         right="150"
                         hover
                    >
                         Sign Up
                    </Circle>
               </Link>

               <div className="time-now position-absolute bottom-50 end-0">
                    <p className="text-white fs-3 m-0">{timeNow}</p>
               </div>
               <div className="social-media position-absolute bottom-0 start-0 ms-3 d-flex justify-content-center align-content-center flex-column h-100">
                    <p className="text-white fs-2">
                         <BsFacebook />
                    </p>
                    <p className="text-white fs-2 mt-3">
                         <BsInstagram />
                    </p>
                    <p className="text-white fs-2 mt-3">
                         <BsTwitter />
                    </p>
                    <p className="text-white fs-2 mt-3">
                         <BsGithub />
                    </p>
               </div>
          </div>
     );
};

export default Home;
