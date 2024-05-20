import { useState, useEffect } from "react";
import axios from "axios";

export default function Skills() {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    axios
      .get("/api/Skill/get-user-skills", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      })
      .then((res) => {
        setSkills(res.data);
        console.log(skills);
      });
  }, []);
  return (
    <div className="w-3/5  m-auto  bg-white rounded-xl shadow-md my-4 relative p-4">
      <ul className="  grid grid-cols-2 gap-4">
        {skills.map((skill) => {
          return (
            <li
              className="bg-slate-400 m-4 text-white rounded-lg p-4"
              key={skill.skillId}
            >
              <p className="text-center text-xl">{skill.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
