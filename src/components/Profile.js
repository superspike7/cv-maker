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
      edit: false,
    };

    this.handleInput = this.handleInput.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this)
  }

  handleInput(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value,
    });
  }

  toggleEdit(){
    this.setState(preveState => ({
      edit: !preveState.edit
    }));
  }

  render() {
    const { name, title, address } = this.state;
    const editMode = this.state.edit;
    return (
      <div className="py-4 bg-blue-800 text-white flex flex-col items-center justify-center relative gap-2 relative">
        <button className="absolute px-1 bg-yellow-400 -top-2 -left-2" onClick={this.toggleEdit}>{this.state.edit ? "Done" : "Edit"}</button>
        {editMode ? (
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
