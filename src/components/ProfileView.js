function ProfileView(props){
  const {profile} = props
  return (
    <div className="py-4 bg-blue-800 text-white flex flex-col items-center justify-center relative gap-2 relative">
      <div className="w-full text-center">
          <h1 className="font-extrabold text-4xl">{profile.name}</h1>
          <h3 className="font-normal text-xl">{profile.title}</h3>
          <p className="font-light text-xl">{profile.address}</p>
      </div>
    </div>
  )
}

export default ProfileView