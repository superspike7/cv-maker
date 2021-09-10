import React, {Component} from "react";
import ProfileView from "./components/ProfileView";
import ProfileForm from "./components/ProfileForm" 

const PROFILE = {
    name: "Spike Vinz Cruz",
    title: "Web Developer",
    address: "Liloy, Zamboanga del Norte, Philippines",
}

class App extends Component {
  render(){
    return (
    <div>
      <h1 className="py-8 text-center text-4xl font-bold">CV maker</h1>
      <div className="w-[80vw] mx-auto shadow-2xl">
        <ProfileForm/>
        <br></br>
        <ProfileView profile={PROFILE}/>
      </div>
    </div>
    );
  } 
}


export default App;
