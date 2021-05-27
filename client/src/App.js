import "./App.css";
import React, { useState } from "react";
import { Button, Input } from "@material-ui/core";

function App() {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("title1");
  const fetchAuthor = async () => {
    const url = new URL("http://localhost:3000/book?");
    url.searchParams.append("title", title);
    const resp = await fetch(url);
    const js = await resp.json();
    setAuthor(js.author);
  };
  const handleInputChange = (e) => {
    setTitle(e.target.value);
    setAuthor("");
  };
  return (
    <div className="App">
      <h1>Author Search</h1>
      <h3>
        <em>React App with Express API</em>
      </h3>
      <br></br>
      <br></br>
      <Input
        color="primary"
        onChange={handleInputChange}
        placeholder="Enter title (e.g. title1)"
        required="true"
        type="text"
      ></Input>
      <br></br>
      <br></br>
      <Button
        variant="contained"
        color="primary"
        size="small"
        onClick={fetchAuthor}
      >
        Search!
      </Button>
      <br></br>
      <br></br>
      <br></br>
      {author !== "" ? (
        <p>
          <h3>Results:</h3>
          {title} <br></br>
          {author}
        </p>
      ) : null}
      <em className="footer">Developed by Yaseen Bhuiyan</em>
    </div>
  );
}

export default App;
