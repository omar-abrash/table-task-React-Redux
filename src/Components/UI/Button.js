// import React from 'react'

const Button = (props) => {
  return (
    <>
      {!props.sort ? (
        <div>
          <button
            type={props.type || "button"}
            onClick={props.onClick}
            className={props.className}
          >
            {props.children}
          </button>
        </div>
      ) : (
        <button
          type={props.type || "button"}
          onClick={props.onClick}
          className={props.className}
        >
          {props.children}
        </button>
      )}
    </>
  );
};

export default Button;
