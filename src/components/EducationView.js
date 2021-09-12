function EducationView(props){
  const educations = props.education.map((edu, index) => {
    return (
      <div className="w-full grid grid-cols-[auto,1fr] p-2 gap-8" key={index}>
        <div className="w-1/8">
          <p className="font-light text-xl">{edu.date_start} -- {edu.date_end}</p>
        </div>
        <div>
          <h1 className="font-extrabold text-xl">{edu.school}</h1>
          <h3 className="font-normal text-xl">{edu.degree}</h3>
          <p className="font-light text-xl">{edu.location}</p>
          <p className="font-bold text-xl">GPA: {edu.gpa}</p>
        </div>
      </div>
    )
  })
  return (
    <div className="mt-5">
      <h1 className="text-center text-4xl font-bold bg-gray-400 mb-5">Education</h1>
      {educations}
    </div>
  )
}

export default EducationView 