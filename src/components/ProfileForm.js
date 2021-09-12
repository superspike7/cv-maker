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
      className="p-4 w-1/2 mx-auto flex flex-col bg-blue-300 gap-3"
      onSubmit={props.handleSubmit(profile)}
    >
      <h1 className="text-center font-bold text-2xl">Profile</h1>
      <div className="flex flex-col">
        <label htmlFor="name">name</label>
        <input
          type="text"
          name="name"
          value={profile.name}
          onChange={handleInput}
          placeholder="John Doe"
          className="text-xl border border-green-400"
        ></input>
      </div>
      <div className="flex flex-col">
        <label htmlFor="title">title</label>
        <input
          type="text"
          name="title"
          value={profile.title}
          onChange={handleInput}
          placeholder="Web Developer"
          className="text-xl border border-green-400"
        ></input>
      </div>
      <div className="flex flex-col">
        <label htmlFor="address">address</label>
        <input
          type="text"
          name="address"
          value={profile.address}
          onChange={handleInput}
          placeholder="San Fransico, CA"
          className="text-xl border border-green-400"
        ></input>
      </div>
      <button className="px-1 bg-green-500 text-white rounded-md">
        save
      </button>
    </form>
  );
}

export default ProfileForm