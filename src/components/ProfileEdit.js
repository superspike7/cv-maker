function ProfileEdit(props) {
  return(
    <form className="p-4 w-1/2 mx-auto flex flex-col text-white gap-3">
      <input type="text" name="name" value={props.name}
        onChange={props.handleInput}
        className="text-4xl bg-transparent border text-center border-green-400"></input>
      <input type="text" name="title" value={props.title}
        onChange={props.handleInput}
        className="text-xl bg-transparent border text-center border-green-400"></input>
      <input type="text" name="address" value={props.address}
        onChange={props.handleInput}
        className="text-xl bg-transparent border text-center border-green-400"></input>
    </form>
  );
}

export default ProfileEdit