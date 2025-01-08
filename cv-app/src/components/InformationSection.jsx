import { useState } from "react";
import React from "react";

export default function InformationSection({ content }) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleEdit(e) {
    setIsSubmitted(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitted(true);
  }

  return (
    <form action="post" className="container" onSubmit={handleSubmit}>
      <div className="input">
        {content.map((element) =>
          React.cloneElement(element, { isSubmitted: isSubmitted }),
        )}
      </div>
      <div className="formButtons">
        <button type="button" onClick={handleEdit}>
          Edit
        </button>
        <button
          type="submit"
          onClick={() => {
            console.log(isSubmitted);
          }}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
