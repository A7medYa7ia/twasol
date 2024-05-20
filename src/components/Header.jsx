import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { MdAccountCircle, MdOutlineWork } from "react-icons/md";
import { IoIosHome, IoIosNotifications } from "react-icons/io";

export default function Header() {
  const activeLink = "bg-slate-400 font-bold rounded-lg  ";
  return (
    <header className="bg-white shadow-md ">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-1">
        <NavLink
          className={({ isActive }) => (isActive ? activeLink : "  w-28")}
          to="/profile"
        >
          <button className="w-28 ">
            <MdAccountCircle className="size-8 m-auto" />
            <h1>Profile</h1>
          </button>
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? activeLink : "  w-28")}
          to="/notification"
        >
          <button className="w-28 ">
            <IoIosNotifications className="size-8	m-auto" />
            <h1>Notification</h1>
          </button>
        </NavLink>

        <form className="bg-slate-100 p-3  rounded-lg flex items-center">
          <input
            type="text"
            placeholder="search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-600" />
        </form>

        <NavLink
          className={({ isActive }) => (isActive ? activeLink : "  w-28")}
          to="/"
        >
          <button className="w-28 ">
            <IoIosHome className="size-8	m-auto" />
            <h1>Home</h1>
          </button>
        </NavLink>
        {/* <NavLink
          className={({ isActive }) => (isActive ? activeLink : "  w-28")}
          to="/chats"
        >
          <button className="w-28 ">
            <IoChatboxEllipses className="size-8	m-auto" />
            <h1>Chats</h1>
          </button>
        </NavLink> */}
        <NavLink
          className={({ isActive }) => (isActive ? activeLink : "  w-28")}
          to="/add-job"
        >
          <button className="w-28 ">
            <MdOutlineWork className="size-8 m-auto" />
            <h1>add job</h1>
          </button>
        </NavLink>
      </div>
    </header>
  );
}
