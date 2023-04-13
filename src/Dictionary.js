import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyWord, setKeyWord] = useState(props.defaultKeyWord);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function search() {
    let apiKey = "4a0a9aa45ad0959e9357bf0of17t2779";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyWord}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    let imagesApiKey = "4a0a9aa45ad0959e9357bf0of17t2779";
    let imagesApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyWord}&key=${imagesApiKey}`;
    axios.get(imagesApiUrl).then(processImages);
  }
  function handleResponse(response) {
    setResults(response.data);
  }

  function processImages(response) {
    setPhotos(response.data.photos);
  }

  function updateKeyWord(event) {
    setKeyWord(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h3>What word would you like to look up?</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={updateKeyWord}
              defaultValue={keyWord}
            />
          </form>
          <div className="hint">
            Might we suggest starting with <span>serendipity</span>?
          </div>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
