import React from "react";
import "./TextInput.scss";

interface IProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  value: string;
}

const TextInput: React.FC<IProps> = ({ onChange, placeholder, value }) => {
  return (
    <input
      type="text"
      onChange={onChange}
      placeholder={placeholder}
      value={value}
    />
  );
};

export default TextInput;
