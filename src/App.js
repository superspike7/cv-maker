import React, {Component} from "react";
import Profile from "./components/Profile"

class App extends Component {
  render(){
    return (
    <div>
      <h1 className="py-8 text-center text-4xl font-bold">CV maker</h1>
      <div className="w-[80vw] mx-auto shadow-2xl">
        <Profile/>
      </div>
    </div>
    );
  } 
}

export default App;
