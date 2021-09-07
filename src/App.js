import React, {Component} from "react";
import Preview from "./components/Preview"

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
      <Preview profile={profile}/>
    </div>
    );
  } 
}

export default App;
