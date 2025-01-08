import { useState } from "react";
import InformationSection from "./InformationSection";

function EducationBlock({ schoolName, studyTitle, studyDate, isSubmitted}) {
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

export default function EducationInformation() {
  const [educationArray, setEducationArray] = useState([])

  return <InformationSection content={educationArray}></InformationSection>
}
