import styles from"./style.module.css";

function Input({
    customClass, type, placeholder, value, name}){
    return (
      <input
        className={styles[customClass]}
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        required
      />
    );
  }
  
  export default Input;
  