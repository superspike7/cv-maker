import React, {Component} from "react";
import Profile from "./components/Profile"

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      profile: {
        name: 'Spike Vinz Cruz',
        links: [
          'github/superspike7',
          'linkedIn/superspike7',
          'spikevinz@gmail.com'
        ]
      },
    }
  }


  render(){
    const { profile } = this.state
    return (
    <div>
      <Profile profile={profile}/>
    </div>
    );
  } 
}

export default App;
