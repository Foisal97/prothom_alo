import React from "react";
import Header from "./Header";

export default function Footer() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 40,
        flexDirection:'column'
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "skyblue",
          width: "50%",
          height: 100,
        }}
      >
        <text>Display Ads here</text>
      </div>
      <text>Copyright @2022 প্রথম আলো</text>
    </div>
  );
}
