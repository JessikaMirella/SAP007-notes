import style from"./style.module.css"

function Button({
    customClass, type, onClick,children
}){
    return(
        <button 
        className= {style[customClass]}
        type={type}
        onClick={onClick}
        > {children}
        </button>
    )
}
export default Button