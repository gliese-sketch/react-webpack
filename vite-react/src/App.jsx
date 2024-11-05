import React from "react";
import Card from "./Card";

function App() {
  const styles = {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
  };

  return (
    <div style={styles}>
      <Card
        imgLink="https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png"
        name="Next.js"
        description="This is a react framework"
      />
      <Card
        imgLink="https://swc.rs/logo.png"
        name="SWC"
        description="Babel ka bhai"
      />
    </div>
  );
}

export default App;
// <img src="" alt="" />
// <Card chintu="" /> {}
// properties props object
