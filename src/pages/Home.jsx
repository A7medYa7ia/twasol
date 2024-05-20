import Header from "../components/Header";
import Posts from "../components/Posts";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="inline-flex w-full justify-center">
        {/* <div className="w-1/5 bg-white rounded-xl shadow-lg m-4  p-4  h-fit">
          <p className="text-4xl font-semibold text-blue-600">requests</p>
        </div> */}
        <Posts url="http://localhost:5292/api/Post/get-all-posts" />
        {/* <div className="w-1/5 bg-white rounded-xl shadow-lg m-4   p-4 h-fit">
          <div>
            <p className="text-4xl font-semibold text-blue-600">User</p>
            <p>Jobs Done</p>
          </div>
        </div> */}
      </div>
    </div>
  );
}
