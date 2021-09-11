import { useState } from "react";
import ExperienceForm from "./ExperienceForm";

function Experience(props) {
  const [experiences, setExperiences] = useState([
    {
      company: "AirBnB",
      role: "Backend Engineer",
      date_start: "08-08-18",
      date_end: "current",
      location: "Manila, PH",
      responsibility: "I built the entire thing",
      tech_stack: "Ruby on Rails",
    },
  ]);

  function handleSubmit(event, data) {
    event.preventDefault();
    console.log(data);
    setExperiences([...experiences, data]);
  }

  function handleRemove(event) {
    const index = event.target.value;
    setExperiences(experiences.filter(experience => experiences[index] !== experience))
  }

  const experienceCards = experiences.map((exp, index) => {
    return (
      <div key={index} className="border border-white relative p-3">
        <p>company: {exp.company}</p>
        <p>role: {exp.role}</p>
        <p>date_start: {exp.date_start}</p>
        <p>date_end: {exp.date_end}</p>
        <p>location: {exp.location}</p>
        <p>responsibility: {exp.responsibility}</p>
        <p>tech stack: {exp.tech_stack}</p>
        <button
          className="mx-auto block bg-red-500 text-white px-2 absolute -top-2 -right-2 font-black rounded-full"
          onClick={handleRemove} value={index}
        >
          X
        </button>
      </div>
    );
  });

  return (
    <div className="p-4 w-1/2 mx-auto flex flex-col bg-blue-300 gap-3">
      <h1 className="text-2xl font-bold text-center">Experience</h1>
      <ExperienceForm handleSubmit={handleSubmit} />
      <div className="flex flex-col gap-4">
        {experienceCards}
        <button className="bg-blue-400 border-2 border-black text-2xl ">
          +
        </button>
      </div>
      <button className="bg-green-500 text-white px-1 rounded-md">
        update
      </button>
    </div>
  );
}

export default Experience;
