import { useState } from "react";
import Header from "../components/Header";
import axios from "axios";

export default function AddJob() {
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(localStorage.getItem("authToken"));
    axios
      .post(
        `/api/Post/add-post?Title=${formData.Title}&Description=${formData.Description}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <Header />
      <div className="flex justify-center">
        <div className="w-4/6 flex flex-col p-4 m-4 rounded-xl bg-white  items-center   ">
          <h1 className=" text-center font-bold text-4xl">Add Job</h1>

          <form onSubmit={handleSubmit} className="w-5/6 mt-2 flex flex-col">
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
                onChange={handleChange}
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
              <label className="block font-bold" htmlFor="jobDescription">
                Job Description
              </label>
              <textarea
                className="w-full p-2 rounded-xl border-2"
                id="Description"
                name="jobDescription"
                rows="4"
                required
                onChange={handleChange}
              ></textarea>
            </div>
            <button
              className="p-2 bg-blue-700 rounded-2xl text-zinc-100 w-1/4 m-auto"
              type="submit"
            >
              Publish
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
