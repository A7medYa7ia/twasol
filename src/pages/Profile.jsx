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
import Header from "../components/Header";
import { Link, Outlet } from "react-router-dom";

function Profile() {
  return (
    <div className="h-screen ">
      <Header />

      <div className="flex">
        <div className="  w-4/5 mx-auto ">
          <div className="w-full flex flex-col my-4 p-4 rounded-xl bg-white  items-center   ">
            <h1 className="  font-bold text-4xl">Add Job</h1>

            <form className="w-5/6 mt-2 flex flex-col  ">
              <div className="mb-2">
                <label className="block font-bold" htmlFor="jobTitle">
                  Job Title
                </label>
                <input
                  className="w-full p-8 h-5 rounded-xl border-2"
                  type="text"
                  id="Title"
                  name="jobTitle"
                  required
                />
              </div>
              {/* <div className="form-group">
              <label className="block font-bold" htmlFor="salary">
                Salary
              </label>
              <input
                className="w-full p-8 h-5 rounded-xl border-2"
                type="text"
                id="salary"
                name="salary"
              />
            </div> */}
              <div className="mb-2">
                {/* <label className="block font-bold" htmlFor="jobDescription">
              Job Description
            </label> */}
                {/* <textarea
              className="w-full p-2 rounded-xl border-2"
              id="Description"
              name="jobDescription"
              rows="4"
              required
            ></textarea> */}
              </div>
              <button
                className="p-2 bg-blue-700 rounded-2xl text-zinc-100 w-1/4 m-auto font-semibold text-lg"
                type="submit"
              >
                Edite
              </button>
            </form>
          </div>
        </div>
        <div className="">
          <div className=" shadow bg-white m-auto w-4/5 rounded-xl">
            <div className=" w-full flex justify-center m-2">
              <div className="flex flex-col">
                <div
                  className="md:relative bg-gray-100  md:rounded-lg
                        bg-gradient-to-b from-gray-100 via-gray-100 to-gray-400 m-4"
                  style={{ width: "940px", height: "348px" }}
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
              <h1 className="text-center font-bold text-3xl">Can Canbolat</h1>

              <hr className="full flex self-center w-2/3 mt-2  border-gray-300 " />
            </div>
            {/* // END INFOS */}
            {/* // TABS */}

            <ul className="flex px-5 py-1.5 justify-evenly">
              <li className="px-3 font-semibold text-2xl">
                <Link to="Posts">Posts</Link>
              </li>
              <li className="px-3 font-semibold text-black text-2xl">
                <a href="#">Skills</a>
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
      </div>
    </div>
  );
}

export default Profile;
