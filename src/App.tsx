import React from "react";
import Button from "./components/Button";

function App() {
  return (
    <>
      <Button
        onClick={(e) => console.log(e.target)}
        size="l"
        type="submit">
        button
      </Button>

      <Button color="success" outlined block>
        button
      </Button>
      <Button disabled>button</Button>
      <Button color="error" shape="round">
        button
      </Button>
      <Button shape="circle" size="s">
        +
      </Button>
    </>
  );
}

export default App;
