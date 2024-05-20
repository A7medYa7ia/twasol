import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EditeProfile() {
  const [formData, setFormData] = useState(null);
  const [skill, setSkill] = useState("");
  const [profilePic, setProfilePic] = useState();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    axios
      .put("/api/User/update-info", formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const addSkill = (e) => {
    e.preventDefault();
    axios
      .post("/api/Skill/add", skill, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      })
      .then((res) => {
        console.log(res);
        navigate("/profile/skills");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleBackgroundImageChange = (e) => {
    const file = e.target.files[0];
    uploadProfilePic(file);
  };
  const uploadProfilePic = (file) => {
    const formData = new FormData();
    formData.append("file", file);

    console.log(formData);
    axios
      .put("/api/User/Update-picture", formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
        navigate("/profile/posts");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="  w-3/5 mx-auto ">
      <div className="w-full flex flex-col my-4 p-4 rounded-xl bg-white  items-center   ">
        <h1 className="  font-bold text-4xl">Add Skill</h1>

        <form onSubmit={addSkill} className="w-5/6 mt-2 flex flex-col">
          <div className="mb-2">
            <input
              className="w-full p-8 h-5 rounded-xl border-2"
              type="text"
              id="name"
              onChange={(e) => {
                setSkill({ [e.target.id]: e.target.value });
              }}
              required
            />
          </div>

          <div className="mb-2"></div>
          <button
            className="p-2 bg-blue-700 rounded-2xl text-zinc-100 w-1/4 m-auto font-semibold text-lg"
            type="submit"
          >
            add
          </button>
        </form>
      </div>

      <div className="w-full flex flex-col  rounded-xl bg-white  p-8  ">
        <h1 className="text-3xl text-center font-semibold my-7">update info</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 font-semibold"
        >
          <label className="flex flex-col gap-1" htmlFor="firstName">
            first name
            <input
              type="text"
              className="border-4 p-3 rounded-lg"
              id="firstName"
              onChange={handleChange}
            />
          </label>
          <label className="flex flex-col gap-1" htmlFor="lastName">
            last name
            <input
              type="text"
              className="border-4 p-3 rounded-lg"
              id="lastName"
              onChange={handleChange}
            />
          </label>
          <label className="flex flex-col gap-1" htmlFor="phoneNumber">
            phone nember
            <input
              type="text"
              className="border-4 p-3 rounded-lg"
              id="phoneNumber"
              onChange={handleChange}
            />
          </label>
          <label className="flex flex-col gap-1" htmlFor="jobTitle">
            job title
            <input
              type="text"
              className="border-4 p-3 rounded-lg"
              id="jopTitle"
              onChange={handleChange}
            />
          </label>
          <div className="mb-2">
            <label className="block " htmlFor="jobDescription">
              Description
            </label>
            <textarea
              className="w-full p-2 rounded-xl border-4 "
              id="description"
              name="jobDescription"
              rows="4"
              required
              onChange={handleChange}
            ></textarea>
          </div>

          <button
            type="submit"
            // disabled={loading}
            className="bg-blue-700 text-white w-28 p-3 place-content-center rounded-3xl self-center  hover:opacity-95 disabled:opacity-80"
          >
            update
            {/* {loading ? "Loading..." : "Sign Up"} */}
          </button>
        </form>

        {/* {error && <p className="text-red-500 mt-5">{error}</p>} */}
      </div>

      <div className="w-full flex flex-col my-4 p-4 rounded-xl bg-white  items-center">
        <h1 className="  font-bold text-4xl">profile picture</h1>

        <form
          onSubmit={uploadProfilePic}
          className="w-5/6 mt-2 flex flex-col  "
        >
          <div className="mx-auto max-w-xs">
            <label
              htmlFor="profilePicture"
              className="mb-1 block text-sm font-medium text-gray-700"
            ></label>
            <input
              id="profilePicture"
              onChange={handleBackgroundImageChange}
              type="file"
              className="mt-2 block w-full text-sm file:mr-4 file:rounded-md file:border-0 file:bg-blue-700 file:py-2 file:px-4 file:text-sm file:font-semibold file:text-white hover:file:bg-teal-700 focus:outline-none disabled:pointer-events-none disabled:opacity-60"
            />
          </div>
          <button
            type="submit"
            // disabled={loading}
            className="bg-blue-700 text-white w-28 p-3 place-content-center rounded-3xl self-center  hover:opacity-95 disabled:opacity-80 m-4"
          >
            update
            {/* {loading ? "Loading..." : "Sign Up"} */}
          </button>
        </form>
      </div>

      <div className="w-full flex flex-col my-4 p-4 rounded-xl bg-white  items-center">
        <h1 className="  font-bold text-4xl">background picture</h1>

        <form className="w-5/6 mt-2 flex flex-col  ">
          <div className="mx-auto max-w-xs">
            <label
              htmlFor="example1"
              className="mb-1 block text-sm font-medium text-gray-700"
            ></label>
            <input
              id="backImage"
              type="file"
              className="mt-2 block w-full text-sm file:mr-4 file:rounded-md file:border-0 file:bg-blue-700 file:py-2 file:px-4 file:text-sm file:font-semibold file:text-white hover:file:bg-teal-700 focus:outline-none disabled:pointer-events-none disabled:opacity-60"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
