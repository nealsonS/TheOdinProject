import { useState } from "react";
import InformationSection from "./InformationSection";
import InputField from "./InputField";

export default function GeneralInformation() {
  const informationArray = [
    <InputField field="name" placeholder="John Doe..."></InputField>,
    <InputField
      field="email"
      placeholder="example@gmail.com"
      type="email"
    ></InputField>,
    <InputField
      field="phone number"
      placeholder="123456789"
      type="number"
    ></InputField>,
  ];

  return <InformationSection content={informationArray}></InformationSection>;
}
