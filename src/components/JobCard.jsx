import { MdAccountCircle } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { FaCommentDots } from "react-icons/fa";
import { useState } from "react";
import { IoIosSend } from "react-icons/io";
export default function JobCard() {
  const [showFullDescription, setShowFullDescription] = useState(false);

  let description =
    "lorem lkjdlfj sdjflasdjkf aldkjf djsf akdfj aslkdfja fkldakal;skdjflasjdlf;ajsflsja;lfasldkjfja;sfjdlsajfl;sajf;a";

  if (!showFullDescription) {
    description = description.substring(0, 90) + "...";
  }

  return (
    <div className="w-3/4 bg-white rounded-xl shadow-md m-4 p-4 relative">
      <div className=" flex   ">
        <MdAccountCircle className="size-28	" />

        <div className="pl-4">
          <div className="mb-6 flex">
            <dev>
              <p className="text-5xl font-bold  my-2">ahmed</p>
              <p className="text-blue-400 text-sm font-bold">just now</p>
            </dev>
            <p className="text-blue-700 text-3xl font-semibold  m-6 absolute  right-0">
              30-50
            </p>
          </div>
          <div className="mb-6">
            <b className=" font-bold text-5xl text-blue-600">software dev</b>
          </div>

          <div className="mb-5">
            {description}{" "}
            <button
              onClick={() => setShowFullDescription((prevState) => !prevState)}
              className="text-indigo-500 mb-5 hover:text-indigo-600"
            >
              {showFullDescription ? "Less" : "More"}
            </button>
          </div>

          <div className="border border-gray-100 mb-5"></div>

          <div className="flex flex-col lg:flex-row justify-between mb-4">
            <div className="text-orange-700 mb-3">Egypt</div>
          </div>
        </div>
      </div>
      <div className="flex p-2 justify-between ">
        <button className="flex  border-black rounded-2xl border-2  justify-center p-2">
          <p className="text-2xl pr-2">like</p>
          <AiOutlineLike className="size-8" />
        </button>
        <button className="flex  border-black rounded-2xl border-2  justify-center p-2">
          <p className="text-2xl pr-2">Message</p>{" "}
          <FaCommentDots className="size-8" />
        </button>
        <button className="flex  border-black rounded-2xl border-2 justify-center p-2">
          <p className="text-2xl pr-2">request</p>
          <IoIosSend className="size-8" />
        </button>
      </div>
    </div>
  );
}
