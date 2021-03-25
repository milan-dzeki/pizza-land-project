import React from 'react';
import './input.scss';

const input = props => {
  let input = null;

  let inputClasses = ["form-input"];

  if(props.validationRequired && props.touched && !props.valid) {
    inputClasses.push("input-invalid");
  }
  if(props.valid) {
    inputClasses.push("input-valid");
  }
  switch(props.elementType) {
    case("input"):
      input = <input
        className={inputClasses.join(" ")}
        {...props.elementConfig}
        value={props.value}
        onChange={props.inputChanged} />;
      break;
    case("select"):
      input = (
        <select
          value={props.value}
          className={inputClasses.join(" ")}
          name={props.elementConfig.name}
          onChange={props.inputChanged}>
            {props.elementConfig.options.map(option => (
              <option
                key={option.value}
                value={option.value}>
                {option.displayedValue}
              </option>
            ))}
        </select>
      );
      break;
    case("textarea"):
      input = (
        <textarea
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.inputChanged}>

        </textarea>
      );
      break;
    default:
      input = <input />;
  }
  return (
    <div className="input-container">
      {props.label ? <label className="input-label">{props.label}</label> : null}
      {input}
    </div>
  );
}

export default input;
