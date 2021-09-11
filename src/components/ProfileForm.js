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
      className="p-4 w-1/2 mx-auto flex flex-col bg-blue-500 gap-3"
      onSubmit={props.handleSubmit(profile)}
    >
      <h1 className="text-center">Profile</h1>
      <div className="flex flex-col">
        <label htmlFor="name">name</label>
        <input
          type="text"
          name="name"
          value={profile.name}
          onChange={handleInput}
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
          className="text-xl border border-green-400"
        ></input>
      </div>
      <button className="px-1 bg-yellow-500 text-black rounded-md">
        save
      </button>
    </form>
  );
}

export default ProfileForm