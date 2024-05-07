import Header from "../components/Header";
import JobCard from "../components/JobCard";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="inline-flex w-full">
        <div className="w-1/4 bg-white rounded-xl shadow-lg m-4  p-4  h-fit">
          <p className="text-4xl font-semibold text-blue-600">requests</p>
        </div>

        <JobCard className="w-2/4" />

        <div className="w-1/4 bg-white rounded-xl shadow-lg m-4   p-4 h-fit">
          <div>
            <p className="text-4xl font-semibold text-blue-600">User</p>
            <p>Jobs Done</p>
          </div>
        </div>
      </div>
    </div>
  );
}
