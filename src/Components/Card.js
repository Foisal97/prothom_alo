import React from "react";
import data from "../data.json";

export default function Card() {
  const loadedData = JSON.stringify(data);
  const json = JSON.parse(loadedData);

  console.log(json);
  return (
    <div style={{ padding: 20, display: "flex", flex: 1 }}>
      <div className="detailsContainer">
        <div>
          <img
            id="image"
            alt="containe img"
            style={{
              maxWidth: "100%",
              height: "auto",
              width: 200,
              float: "left",
            }}
            src="https://www.freecodecamp.org/news/content/images/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png"
          />
          <text style={{ fontSize: 16, display: "inline" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </text>
        </div>
      </div>
    </div>
  );
}
