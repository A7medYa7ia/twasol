import Header from "../components/Header";

import { useEffect, useState } from "react";
import axios from "axios";
import JobCard from "../components/JobCard";

export default function Home() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios
      .get("/api/Post/get-all-posts", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      })
      .then((res) => {
        setJobs(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Header />
      <div className="inline-flex w-full">
        <div className="w-1/5 bg-white rounded-xl shadow-lg m-4  p-4  h-fit">
          <p className="text-4xl font-semibold text-blue-600">requests</p>
        </div>
        <div className="w-2/4 pr-4">
          <ul>
            {jobs.map((job) => {
              <li key={job.id}>
                <JobCard
                  title={job.title}
                  describtion={job.description}
                  dateCreated={job.dateCreated}
                />
              </li>;
            })}
          </ul>
        </div>
        <div className="w-1/5 bg-white rounded-xl shadow-lg m-4   p-4 h-fit">
          <div>
            <p className="text-4xl font-semibold text-blue-600">User</p>
            <p>Jobs Done</p>
          </div>
        </div>
      </div>
    </div>
  );
}
