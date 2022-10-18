import classes from "./input.module.css";

const Input = (props) => {

    let inputElement = null;

    switch(props.inputtype) {
        case("input") :
            inputElement = <input className={classes.inputElement} {...props}/>
            break;
        
        case("textarea") :
            inputElement = <textarea className={classes.inputElement} {...props}/>
            break;
        default:
            inputElement = <input className={classes.inputElement} {...props}/>
        
    }
  return (
    <div className={classes.input}>
      <label className={classes.label}>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default Input;
