import React from "react";
const Input = ({ change, value }) => {
  return (
    <textarea className='description'
      type="text"
      placeholder="توضیحات"
      onChange={(e) => change(e.target.value)}
      value={value}
    />
  );
};
export default Input;
