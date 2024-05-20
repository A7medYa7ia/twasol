import axios from "axios";
import { useState, useEffect } from "react";
import JobCard from "./JobCard";

export default function Posts(probs) {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios
      .get(`${probs.url}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      })
      .then((res) => {
        setJobs(res.data);
        console.log(jobs);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="w-3/5  m-auto">
      <ul>
        {jobs.map((job) => {
          return (
            <li key={job.id}>
              <JobCard
                title={job.title}
                description={job.description}
                dateCreated={job.dateCreated}
                commentsCount={job.commentsCount}
                likesCount={job.likesCount}
                id={job.id}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
