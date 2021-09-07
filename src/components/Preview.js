import Profile from "./Profile.js"

function Preview(props) {
  const { profile } = props;

  return (
    <div>
      <Profile profile={profile} />
    </div>
  );
}

export default Preview;
