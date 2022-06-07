import "./styles.modules.css";

function Input({
    className, type, placeholder, value, name}){
    return (
      <input
        className={className}
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        required
      />
    );
  }
  
  export default Input;
  