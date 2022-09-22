import './Button.css';

function Button(props) {
  const { label, callback } = props;

  const handleClick = () => {
    callback()
  }

  return (
    <button onClick={handleClick}>
      {label}
    </button>
  );
}

export default Button;
