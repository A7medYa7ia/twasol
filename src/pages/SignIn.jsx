import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
export default function SignIn() {
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

    axios
      .post("/api/Authorization/login", formData)
      .then((res) => {
        console.log(res);
        if (res.data.success === true) {
          const token = res.data.token;
          localStorage.setItem("authToken", token);
          console.log(res);
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 font-semibold"
      >
        <label className="flex flex-col gap-1" htmlFor="email">
          email
          <input
            type="email"
            className="border-4  p-3 rounded-lg"
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

        <button className="bg-blue-700 text-white w-28 p-3 place-content-center rounded-3xl self-center uppercase hover:opacity-95 disabled:opacity-80">
          sign in
        </button>
      </form>

      <div className="flex items-center p-3">
        <hr className="flex-grow border-t border-black border-2" />
        <span className="px-3 text text-xl">Or</span>
        <hr className="flex-grow border-t border-black border-2" />
      </div>

      <p className="flex justify-center items-center">Dont have an account?</p>
      <Link className="flex justify-center items-center" to={"/sign-up"}>
        <span className="text-blue-700">Sign Up</span>
      </Link>
    </div>
  );
}
