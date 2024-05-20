//import React from 'react';
// import { Link } from "react-router-dom";
// //import AddComment from '../Post/AddComment';
// //import Comments from '../Post/Comments';
// //import CreatePost from "../Post/CreatePost";
// //import Post from "../Post/Post";
// import ProfileHeader from "./profileHeader";
// // import Header from "../components/Header";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import JobCard from "../components/JobCard";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import { Link, Outlet } from "react-router-dom";
import axios from "axios";

function Profile() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios
      .get("/api/User/get-Current-user", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      })
      .then((res) => {
        setUser(res.data);
        console.log(user);
      });
  }, []);
  return (
    <div className="h-screen ">
      <Header />

      <div className=" shadow bg-white m-auto w-3/5 rounded-xl">
        <div className=" w-full flex justify-center m-2">
          <div className="flex flex-col">
            <div
              className="md:relative bg-gray-100  md:rounded-lg
                        bg-gradient-to-b from-gray-100 via-gray-100 to-gray-400 m-4"
              style={{ width: "890px", height: "348px" }}
            >
              {/* // cover photo */}
              <div className="">
                {/* profile photo */}
                <img
                  src="./images/profile_photo_cat.jpg"
                  className="rounded-full md:absolute top-48 inset-x-96 border-4 border-white w-40 h-40"
                />
              </div>
            </div>
          </div>
        </div>
        {/* // INFOS */}
        <div className="flex justify-center flex-col mt-5 mb-3.5">
          <h1 className="text-center font-bold text-3xl">
            {user.firstName + " " + user.lastName}
          </h1>

          <hr className="full flex self-center w-2/3 mt-2  border-gray-300 " />
        </div>
        <div className="p-4">
          <p className="text-xl font-semibold my-2">{user.jopTitle}</p>
          <p>{user.description}</p>
        </div>

        {/* // END INFOS */}
        {/* // TABS */}

        <ul className="flex px-5 py-1.5 justify-evenly">
          <li className="px-3 font-semibold text-xl">
            <Link to="Posts">Posts</Link>
          </li>
          <li className="px-3 font-semibold text-black text-xl">
            <Link to="skills">Skills</Link>
          </li>
          <li className="px-2 font-semibold">
            <Link to="edite-profile">
              <button className="bg-blue-700 px-5 py-1 rounded-lg text-white font-semibold text-xl ">
                Edit Profile
              </button>
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}

export default Profile;
