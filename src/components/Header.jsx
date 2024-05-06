import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { MdAccountCircle, MdOutlineWork } from "react-icons/md";
import { IoChatboxEllipses } from "react-icons/io5";
import { IoIosHome, IoIosNotifications } from "react-icons/io";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/profile">
          <MdAccountCircle className="size-8	" />
          <h1>Profile</h1>
        </Link>

        <Link to="/notification">
          <IoIosNotifications className="size-8	" />
          <h1>Notification</h1>
        </Link>

        <form className="bg-slate-100 p-3  rounded-lg flex items-center">
          <input
            type="text"
            placeholder="search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-600" />
        </form>

        <Link to="/">
          <IoIosHome className="size-8	" />
          <h1>Home</h1>
        </Link>
        <Link to="/chats">
          <IoChatboxEllipses className="size-8	" />
          <h1>Chats</h1>
        </Link>
        <Link to="/jobs">
          <MdOutlineWork className="size-8	" />
          <h1>Jobs</h1>
        </Link>
      </div>
    </header>
  );
}
