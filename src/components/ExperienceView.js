function ExperienceView(props){
  const experiences = props.experience.map((experience, index) => {
    return (
      <div className="w-full grid grid-cols-[auto,1fr] p-2 gap-8" key={index}>
        <div className="w-1/8">
          <p className="font-light text-xl">{experience.date_start} -- {experience.date_end}</p>
          <p className="font-light text-xl">{experience.location}</p>
        </div>
        <div>
          <h1 className="font-extrabold text-xl">{experience.company}</h1>
          <h3 className="font-normal text-xl">{experience.role}</h3>
          <ul className="list-disc">
            <li><p className="font-light text-xl">{experience.tasks}</p></li>
            <li><p className="font-light text-xl">stack used: {experience.tech_stack}</p></li>
          </ul>
        </div>
      </div>
    )
  })
  return (
    <div className="mt-5">
      <h1 className="text-center text-4xl font-bold bg-gray-400 mb-5">Experience</h1>
      {experiences}
    </div>
  )
}

export default ExperienceView 