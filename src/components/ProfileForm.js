import { useState } from "react";

function ProfileForm(props) {

  const [profile, setProfile] = useState({})

  function handleInput(event){
    const {name, value} = event.target
    setProfile(prevState => ({
      ...prevState,
      [name]:value
    }))
  }

  return (
    <form
      className="p-4 w-1/2 mx-auto flex flex-col bg-blue-500 text-white gap-3"
      onSubmit={props.handleSubmit(profile)}
    >
      <input
        type="text"
        name="name"
        value={profile.name}
        onChange={handleInput}
        className="text-4xl bg-transparent border text-center border-green-400"
      ></input>
      <input
        type="text"
        name="title"
        value={profile.title}
        onChange={handleInput}
        className="text-xl bg-transparent border text-center border-green-400"
      ></input>
      <input
        type="text"
        name="address"
        value={profile.address}
        onChange={handleInput}
        className="text-xl bg-transparent border text-center border-green-400"
      ></input>
      <button className="px-1 bg-yellow-500 text-black rounded-md">
        save
      </button>
    </form>
  );
}

export default ProfileForm