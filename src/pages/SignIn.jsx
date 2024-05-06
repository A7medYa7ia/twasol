import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";
export default function SignIn() {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch("/api/Authorization/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
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

        <button
          disabled={loading}
          className="bg-blue-700 text-white w-28 p-3 place-content-center rounded-3xl self-center uppercase hover:opacity-95 disabled:opacity-80"
        >
          {error ? "Loading..." : "Sign in"}
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
      {error && <p className="text-red-500 mt-5">{error}</p>}
    </div>
  );
}
