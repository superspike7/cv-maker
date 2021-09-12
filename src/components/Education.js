import { useState } from "react";
import EducationForm from "./EducationForm";

function Education(props) {
  const [educations, setEducations] = useState([]);

  const [toggleForm, setToggleForm] = useState(false)

  function handleSubmit(event, data) {
    event.preventDefault();
    console.log(data);
    setEducations([...educations, data]);
    handleToggleForm()
  }

  function handleRemove(event) {
    const index = event.target.value;
    setEducations(educations.filter(education => educations[index] !== education))
  }

  function handleToggleForm(){
    console.log(toggleForm)
    setToggleForm(prevToggleForm => !prevToggleForm)
  }

  const educationCards = educations.map((edu, index) => {
    return (
      <div key={index} className="border border-white relative p-3">
        <p>company: {edu.company}</p>
        <p>degree: {edu.degree}</p>
        <p>date_start: {edu.date_start}</p>
        <p>date_end: {edu.date_end}</p>
        <p>location: {edu.location}</p>
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
      <h1 className="text-2xl font-bold text-center">Education</h1>
      <div className="flex flex-col gap-4">
        {educationCards}
      {toggleForm ? <EducationForm handleSubmit={handleSubmit} /> : ""}
        <button className="bg-blue-400 border-2 border-black text-2xl" onClick={handleToggleForm}>
          +
        </button>
      </div>
      <button className="bg-green-500 text-white px-1 rounded-md" onClick={props.handleChange(educations)}>
        update
      </button>
    </div>
  );
}

export default Education;
