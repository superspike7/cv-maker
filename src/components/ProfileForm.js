import React from "react";

class ProfileForm extends React.Component{
  render(){
  return (
    <form
      className="p-4 w-1/2 mx-auto flex flex-col bg-blue-500 text-white gap-3"
    >
      <input
        type="text"
        name="name"
        defaultValue="John Doe"
        className="text-4xl bg-transparent border text-center border-green-400"
      ></input>
      <input
        type="text"
        name="title"
        defaultValue="Web Developer"
        className="text-xl bg-transparent border text-center border-green-400"
      ></input>
      <input
        type="text"
        name="address"
        defaultValue="XYZ, Country"
        className="text-xl bg-transparent border text-center border-green-400"
      ></input>
      <button className="px-1 bg-yellow-500 text-black rounded-md">
        Save 
      </button>
    </form>
    );
  }
}

export default ProfileForm;
