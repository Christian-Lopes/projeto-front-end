function Button(props) {
  return (
    <div>
      <button onClick={props.evento}>{props.text}</button>
    </div>
  );
}

export default Button;
