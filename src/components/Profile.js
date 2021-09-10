import React from "react";
import ProfileView from "./ProfileView";
import ProfileEdit from "./ProfileEdit";

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Spike Vinz Cruz",
      title: "Web Developer",
      address: "Liloy, Zamboanga del Norte, Philippines",
    };

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value,
    });
  }


  render() {
    const { name, title, address } = this.state;
    const mode = this.props.mode;
    return (
      <div className="py-4 bg-blue-800 text-white flex flex-col items-center justify-center relative gap-2 relative">
        {mode === "edit" ? (
          <ProfileEdit
            name={name}
            title={title}
            address={address}
            handleInput={this.handleInput}
          />
        ) : (
          <ProfileView name={name} title={title} address={address} />
        )}
      </div>
    );
  }
}
export default Profile;
