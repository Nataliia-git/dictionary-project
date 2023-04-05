import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyWord, setKeyWord] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching for ${keyWord}`);

    let apiKey = "4a0a9aa45ad0959e9357bf0of17t2779";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyWord}&key=${apiKey}`;
    console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);
  }
  function handleResponse(response) {
    console.log(response.data.meanings[0].definition);
  }
  function updateKeyWord(event) {
    setKeyWord(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={handleSubmit}>
        <input type="search" onChange={updateKeyWord} />
      </form>
    </div>
  );
}
