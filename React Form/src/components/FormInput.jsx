import "./formInput.css";

const FormInput = (props) => {
  return (
    <div className="formInput">
      {/*<label>{props.placeholder}</label>*/}
      <input 
        ref={props.refer}
        placeholder={props.placeholder} 
      />
    </div>
  );
}

export default FormInput;