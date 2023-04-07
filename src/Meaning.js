import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);

  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      <p>
        {props.meaning.definition}
        <br />
        <em> {props.meaning.example}</em>
      </p>
    </div>
  );
}
