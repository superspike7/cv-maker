import React, { Component } from "react";
import ProfileView from "./components/ProfileView";
import ProfileForm from "./components/ProfileForm";
import ExperienceView from "./components/ExperienceView";
import EducationView from "./components/EducationView";
import Experience from "./components/Experience";
import Education from "./components/Education";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: {
        name: "John Doe",
        title: "Web Developer",
        address: "San Fransico, CA",
      },
      experience: [],
      education: []
    };

    this.handleProfileChange = this.handleProfileChange.bind(this);
    this.handleExperienceChange = this.handleExperienceChange.bind(this);
    this.handleEducationChange = this.handleEducationChange.bind(this);
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

  handleExperienceChange(data) {
    return (event) => {
      event.preventDefault();
      console.log(data);
      this.setState({
        experience: data
      });
    };
  }

  handleEducationChange(data) {
    return (event) => {
      event.preventDefault();
      console.log(data);
      this.setState({
        education: data
      });
    };
  }

  render() {
    return (
      <div>
        <h1 className="py-8 text-center text-4xl font-bold">CV maker</h1>
          <ProfileForm handleSubmit={this.handleProfileChange}/>
          <Experience handleChange={this.handleExperienceChange}/>
          <Education handleChange={this.handleEducationChange}/>
        <div className="w-[80vw] mx-auto shadow-2xl mt-8 p-2">
          <ProfileView profile={this.state.profile} />
          <ExperienceView experience={this.state.experience} />
          <EducationView education={this.state.education} />
        </div>
      </div>
    );
  }
}

export default App;
