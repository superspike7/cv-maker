import { useState } from "react";

function ExperienceForm(props) {

  const [experience, setExperience] = useState(
    {
      company: "AirBnB",
      role: "Backend Engineer",
      date_start: "August 19, 2015",
      date_end: "Current",
      location: "San Fransico, CA",
      responsibility: "I write the backedn",
      tech_stack: "Ruby on Rails, React, Vue, TailwindCSS",
    }
  )

  function handleInput(event){
    const {name, value} = event.target
    setExperience(prevState => ({
      ...prevState,
      [name]:value
    }))
  }


  return (
    <form
      className="p-4 w-full flex flex-col bg-blue-500 gap-1"
      onSubmit={(e) => props.handleSubmit(e, experience)}
    >
      <h1 className="text-center">Experience</h1>

      <div className="flex flex-col">
        <label htmlFor="name">company</label>
        <input
          type="text"
          name="company"
          value={experience.company}
          onChange={handleInput}
          placeholder="AirBnB"
          className="text-xl border border-green-400"
        ></input>
      </div>

      <div className="flex flex-col">
        <label htmlFor="title">role</label>
        <input
          type="text"
          name="role"
          value={experience.role}
          onChange={handleInput}
          placeholder="Backend Engineer"
          className="text-xl border border-green-400"
        ></input>
      </div>

      <div className="flex flex-col">
        <label htmlFor="address">date start</label>
        <input
          type="text"
          name="date_start"
          value={experience.date_start}
          onChange={handleInput}
          placeholder="08-19-2015"
          className="text-xl border border-green-400"
        ></input>
      </div>

      <div className="flex flex-col">
        <label htmlFor="address">date end</label>
        <input
          type="text"
          name="date_end"
          value={experience.date_end}
          onChange={handleInput}
          placeholder="current"
          className="text-xl border border-green-400"
        ></input>
      </div>

      <div className="flex flex-col">
        <label htmlFor="address">location</label>
        <input
          type="text"
          name="location"
          value={experience.location}
          onChange={handleInput}
          placeholder="San Fransico, CA"
          className="text-xl border border-green-400"
        ></input>
      </div>

      <div className="flex flex-col">
        <label htmlFor="address">responsibility</label>
        <input
          type="text"
          name="responsibility"
          value={experience.responsibility}
          onChange={handleInput}
          placeholder="I work with the backend"
          className="text-xl border border-green-400"
        ></input>
      </div>

      <div className="flex flex-col">
        <label htmlFor="address">tech stack</label>
        <input
          type="text"
          name="tech_stack"
          value={experience.tech_stack}
          onChange={handleInput}
          placeholder="Ruby on Rails, React, Tailwind, etc..."
          className="text-xl border border-green-400"
        ></input>
      </div>

      <button className="px-1 bg-yellow-500 text-black rounded-md mt-4">
       add 
      </button>
    </form>
  );
}

export default ExperienceForm 