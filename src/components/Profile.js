function Profile(props) {
  const { profile } = props;
  const links = profile.links;
  return (
    <div className="h-32 bg-blue-800 text-white flex flex-col items-center justify-center">
      <h1 className="font-extrabold text-4xl py-2">{profile.name}</h1>
      <ul className="font-light flex justify-center gap-x-4">
        {links.map((link, index) => {
          return <li key={index}>{link}</li>
        })}
      </ul>
    </div>
  );
}
export default Profile;
