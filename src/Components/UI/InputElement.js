// import React from 'react'

const InputElement = (props) => {
  return (
    <>
      {!props.isSelect ? (
        <div>
          <label htmlFor={props.id}>{props.name}</label>
          <input
            id={props.id}
            type={props.type}
            value={props.value}
            onChange={props.onChange}
            placeholder={props.placeholder}
          />
        </div>
      ) : (
        <div>
          <label htmlFor={props.id}>{props.name}</label>
          <select
            id={props.id}
            onChange={props.onChange}
            value={props.value}
            className={props.className}
          >
            {props.optionArray.map((option) => (
              <option value={option} key={option + Math.random()}>
                {option}
              </option>
            ))}
          </select>
        </div>
      )}
    </>
  );
};

export default InputElement;
