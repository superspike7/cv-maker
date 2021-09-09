function ProfileView(props){
  return (
    <div className="w-full text-center">
        <h1 className="font-extrabold text-4xl">{props.name}</h1>
        <h3 className="font-normal text-xl">{props.title}</h3>
        <p className="font-light text-xl">{props.address}</p>
    </div>
  )
}

export default ProfileView