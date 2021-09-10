import React, {Component} from "react";
import ProfileView from "./components/ProfileView";
import ProfileForm from "./components/ProfileForm" 

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      profile: {
        name: "Spike Vinz Cruz",
        title: "Web Developer",
        address: "Liloy, Zamboanga del Norte, Philippines",
      }
    }

    this.handleProfileChange = this.handleProfileChange.bind(this)
  }

  handleProfileChange(data){
    return event => {
      event.preventDefault()
      console.log(data)
      this.setState({
        profile: data
      })
    }
  }


  render(){
    return (
    <div>
      <h1 className="py-8 text-center text-4xl font-bold">CV maker</h1>
      <div className="w-[80vw] mx-auto shadow-2xl">
        <ProfileForm handleSubmit={this.handleProfileChange}/>
        <br></br>
        <ProfileView profile={this.state.profile}/>
      </div>
    </div>
    );
  } 
}


export default App;
