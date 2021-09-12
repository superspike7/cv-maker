import { useState } from "react";

function EducationForm(props) {

  const [education, setEducation] = useState(
    {
      school: "MIT",
      degree: "Computer Science",
      date_start: "08-08-18",
      date_end: "current",
      location: "Manila, PH",
      gpa: "3.9/4",
    }
  )

  function handleInput(event){
    const {name, value} = event.target
    setEducation(prevState => ({
      ...prevState,
      [name]:value
    }))
  }


  return (
    <form
      className="p-4 w-full flex flex-col bg-blue-500 gap-1"
      onSubmit={(e) => props.handleSubmit(e, education)}
    >
      <h1 className="text-center">Education</h1>

      <div className="flex flex-col">
        <label htmlFor="name">School</label>
        <input
          type="text"
          name="company"
          value={education.school}
          onChange={handleInput}
          className="text-xl border border-green-400"
        ></input>
      </div>

      <div className="flex flex-col">
        <label htmlFor="title">degree</label>
        <input
          type="text"
          name="role"
          value={education.degree}
          onChange={handleInput}
          className="text-xl border border-green-400"
        ></input>
      </div>

      <div className="flex flex-col">
        <label htmlFor="address">date start</label>
        <input
          type="text"
          name="date_start"
          value={education.date_start}
          onChange={handleInput}
          className="text-xl border border-green-400"
        ></input>
      </div>

      <div className="flex flex-col">
        <label htmlFor="address">date end</label>
        <input
          type="text"
          name="date_end"
          value={education.date_end}
          onChange={handleInput}
          className="text-xl border border-green-400"
        ></input>
      </div>

      <div className="flex flex-col">
        <label htmlFor="address">location</label>
        <input
          type="text"
          name="location"
          value={education.location}
          onChange={handleInput}
          className="text-xl border border-green-400"
        ></input>
      </div>

      <div className="flex flex-col">
        <label htmlFor="address">GPA</label>
        <input
          type="text"
          name="responsibility"
          value={education.gpa}
          onChange={handleInput}
          className="text-xl border border-green-400"
        ></input>
      </div>

      <button className="px-1 bg-yellow-500 text-black rounded-md mt-4">
       add 
      </button>
    </form>
  );
}

export default EducationForm 