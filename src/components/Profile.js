import { useState } from "react";

function Profile(props) {
  const { profile } = props;
  const links = profile.links;
  const [isEditable, toggleIsEditable] = useState()
  if (!isEditable){
    return (
      <div className="h-32 bg-blue-800 text-white flex flex-col items-center justify-center relative">
        <button onClick={() => toggleIsEditable(!isEditable)} className="absolute top-1 left-1 rounded-md px-1 bg-green-400">edit</button>
        <h1 className="font-extrabold text-4xl py-2">{profile.name}</h1>
        <ul className="font-light flex justify-center gap-x-4">
          {links.map((link, index) => {
            return <li key={index}>{link}</li>
          })}
        </ul>
      </div>
    );
  } else if (isEditable) {
    return (
      <div className="h-32 bg-blue-800 text-white flex flex-col items-center justify-center relative">
        <button onClick={() => toggleIsEditable(!isEditable)} className="absolute top-1 left-1 rounded-md px-1 bg-green-400">edit</button>
        <form>
          <input type="text" value={profile.name}></input>
        </form>
        <ul className="font-light flex justify-center gap-x-4">
          {links.map((link, index) => {
            return <li key={index}>{link}</li>
          })}
        </ul>
      </div>

    );
  }
}
export default Profile;
