import { Link } from "react-router-dom";

export default function NoMatch() {
  return (
    <div className="m-auto my-12">
      <div className="text-center ">
        <b className="text-7xl ">Error 404</b>
        <b className="text-center block text-7xl m-6">page not found</b>
        <Link to="/">
          <button className="bg-blue-800 w-36  h-16 rounded-lg text-white m-20 text-3xl">
            home
          </button>
        </Link>
      </div>
    </div>
  );
}
