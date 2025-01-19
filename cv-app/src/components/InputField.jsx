import { useState } from "react";

export default function InputField({
  field,
  isSubmitted = false,
  placeholder = field,
  type = "text",
}) {
  const style = {
    display: "grid",
    "grid-template-rows": "30px 25px",
  };

  const submittedValueStyle = {
    "font-weight": "bold",
  };

  const [value, setValue] = useState("");

  function onChange(e) {
    setValue(e.target.value);
  }

  return (
    <span id={field} style={style}>
      <label htmlFor={field}>{field}</label>

      {isSubmitted ? (
        <p id={field} style={submittedValueStyle}>
          {String(value)}
        </p>
      ) : (
        <input
          type={type}
          id={field}
          name={field}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}
    </span>
  );
}
