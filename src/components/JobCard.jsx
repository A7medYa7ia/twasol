import { MdAccountCircle } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { FaCommentDots } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import axios from "axios";
import { useEffect, useState } from "react";

export default function JobCard(probs) {
  const [user, setuser] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5292/api/User/get-Current-user", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      })
      .then((res) => {
        setuser(res.data);
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onLike = () => {
    axios
      .post(
        `http://localhost:5292/api/Post/add-like?Postid=${probs.id}`,
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

  const jobRequest = () => {
    console.log(user.id);

    axios
      .post(
        `/api/JobReques/add-jobRequest?userId=${user.id}&postId=${probs.id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      )
      .then(console.log("successful"))
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="w-full bg-white rounded-xl shadow-md my-4 relative">
      <div className=" flex   ">
        <MdAccountCircle className="size-28	" />

        <div className="pl-4">
          <div className="mb-6 flex">
            <div>
              <p className="text-5xl font-bold  my-2">ahmed</p>
              <p className="text-blue-400 text-sm font-bold">
                {probs.dateCreated}
              </p>
            </div>
          </div>
          <div className="mb-6">
            <b className=" font-bold text-5xl text-blue-700">{probs.title}</b>
          </div>

          <div className="mb-5">
            <b>{probs.description}</b>
          </div>
        </div>
      </div>
      <div className="flex p-2 justify-between ">
        <button
          onClick={onLike}
          className="flex m-2 border-black rounded-2xl border-2  justify-center p-2 w-1/3"
        >
          <p className="text-2xl pr-2">{probs.likesCount}</p>
          <AiOutlineLike className="size-8" />
        </button>
        <button className="flex m-2  border-black rounded-2xl border-2  justify-center p-2 w-1/3">
          <p className="text-2xl pr-2">{probs.commentsCount}</p>
          <FaCommentDots className="size-8" />
        </button>
        <button
          onClick={jobRequest}
          className="flex  border-black rounded-2xl border-2 justify-center m-2 p-2 w-1/3"
        >
          <p className="text-2xl pr-2 ">request</p>
          <IoIosSend className="size-8" />
        </button>
      </div>
    </div>
  );
}
