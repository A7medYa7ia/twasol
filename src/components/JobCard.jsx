import { MdAccountCircle } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { FaCommentDots } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
export default function JobCard(probs) {
  return (
    <div className="w-full bg-white rounded-xl shadow-md m-4 p-4 relative">
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
            <b className=" font-bold text-5xl text-blue-600">{probs.title}</b>
          </div>

          <div className="mb-5">{probs.description}</div>
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
