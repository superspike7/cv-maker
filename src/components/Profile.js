import React from "react";

class Profile extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      name: "Spike Vinz Cruz",
      title: "Web Developer",
      address: "Liloy, Zamboanga del Norte, Philippines",
      links: [
        {name: "Github", url: "https://github.com/superspike7"},
        {name: "Twitter", url: "https://github.com/superspike7"},
      ]
    }
  }

  render(){
    const links = this.state.links.map((link, index) => {
      return <li key={index}>
        <a href={link.url}>{link.name}</a>
      </li>
    })
    return (
      <div className="py-4 bg-blue-800 text-white flex flex-col items-center justify-center relative gap-2">
        <h1 className="font-extrabold text-4xl">{this.state.name}</h1>
        <h3 className="font-normal text-xl">{this.state.title}</h3>
        <p className="font-light text-xl">{this.state.address}</p>
        <ul className="flex gap-4">
          {links}
        </ul>
      </div>
    );
   }
}
export default Profile;
