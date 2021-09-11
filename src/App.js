import React, { Component } from "react";
import ProfileView from "./components/ProfileView";
import ProfileForm from "./components/ProfileForm";
import ExperienceView from "./components/ExperienceView";
import Experience from "./components/Experience";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: {
        name: "Spike Vinz Cruz",
        title: "Web Developer",
        address: "Liloy, Zamboanga del Norte, Philippines",
      },
      experience: [
        {
          company: "AirBnB",
          role: "Backend Engineer",
          date_start: "08-08-18",
          date_end: "current",
          location: "Manila, PH",
          tasks: "I built the entire thing",
          tech_stack: "Ruby on Rails"
        },
      ],
    };

    this.handleProfileChange = this.handleProfileChange.bind(this);
    this.handleExperienceChange = this.handleExperience.bind(this);
  }

  handleProfileChange(data) {
    return (event) => {
      event.preventDefault();
      console.log(data);
      this.setState({
        profile: data,
      });
    };
  }

  handleExperience(data) {
    return (event) => {
      event.preventDefault();
      console.log(data);
      this.setState({
        experience: data,
      });
    };
  }

  render() {
    return (
      <div>
        <h1 className="py-8 text-center text-4xl font-bold">CV maker</h1>
        <div className="w-[80vw] mx-auto shadow-2xl">
          {/* <ProfileForm handleSubmit={this.handleProfileChange} /> */}
          <Experience handleChange={this.handleExperienceChange}/>
          <br></br>
          <ProfileView profile={this.state.profile} />
          <ExperienceView experience={this.state.experience} />
        </div>
      </div>
    );
  }
}

export default App;
