import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
export default function SignUp() {
  const [formData, setFormData] = useState({});

  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      axios.post("/api/Authorization/register", formData).then((res) => {
        console.log(res);
        navigate("/sign-in");
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
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
        <label className="flex flex-col gap-1" htmlFor="email">
          email
          <input
            type="email"
            className="border-4 p-3 rounded-lg"
            id="email"
            onChange={handleChange}
          />
        </label>
        <label className="flex flex-col gap-1" htmlFor="password">
          password
          <input
            type="password"
            className="border-4 p-3 rounded-lg"
            id="password"
            onChange={handleChange}
          />
        </label>
        <label className="flex flex-col gap-1" htmlFor="confirmPassword">
          confirm password
          <input
            type="password"
            className="border-4 p-3 rounded-lg"
            id="confirmPassword"
            onChange={handleChange}
          />
        </label>
        <button
          type="submit"
          // disabled={loading}
          className="bg-blue-700 text-white w-28 p-3 place-content-center rounded-3xl self-center uppercase hover:opacity-95 disabled:opacity-80"
        >
          sign up
          {/* {loading ? "Loading..." : "Sign Up"} */}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to={"/sign-in"}>
          <span className="text-blue-700">Sign in</span>
        </Link>
      </div>
      {/* {error && <p className="text-red-500 mt-5">{error}</p>} */}
    </div>
  );
}
