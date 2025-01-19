import { useState } from "react";
import InformationSection from "./InformationSection";

function EducationBlock({ schoolName, studyTitle, studyDate, isSubmitted }) {
  const blockStyle = {
    display: "grid",
    "grid-template-rows": "30px 25px",
  };

  return (
    <div id={schoolName} className="educationBlock" style={blockStyle}>
      <h1>{schoolName}</h1>
      <h2>{`\tTitle: ${studyTitle}\n\tDate: ${studyDate}`}</h2>
    </div>
  );
}

function AdditionBlock({ setIsAddition, setEducationArray }) {
  function handleSubmit(e) {
    setEducationArray((prevArray) => [...prevArray]);
    console.log("event: ", e.target.value);
    setIsAddition(false);
  }

  const infoToAdd = [
    ["schoolName", "School Name"],
    ["studyTitle", "Study Title"],
    ["studyDate", "Study Date"],
  ];

  return (
    <form action="post" onSubmit={handleSubmit}>
      {infoToAdd.map((element) => {
        return (
          <span key={element[0]}>
            <label htmlFor={element[0]}>{element[1]}</label>
            <input type="text" id={element[0]} name={element[0]} required />
          </span>
        );
      })}

      <div className="formButtons">
        <button
          type="button"
          onClick={(e) => {
            setIsAddition(false);
          }}
        >
          Close
        </button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default function EducationInformation() {
  const [educationArray, setEducationArray] = useState([]);
  const [isAddition, setIsAddition] = useState(false);

  function handleAddition(e) {
    setIsAddition(true);
  }

  return (
    <span>
      <h1>Education Experience</h1>
      <InformationSection content={educationArray}></InformationSection>
      {!isAddition ? (
        <button type="button" onClick={handleAddition}>
          +
        </button>
      ) : (
        <AdditionBlock
          setIsAddition={setIsAddition}
          setEducationArray={setEducationArray}
        ></AdditionBlock>
      )}
    </span>
  );
}
