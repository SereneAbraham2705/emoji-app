import React, { useState } from "react";
import "./styles.css";

const emojidictionary = {
  "🌮": "Taco",
  "🥨": "Pretzel",
  "🍍": "Pineapple",
  "🍔": "Hamburger",
  "🍕": "Pizza",
  "🍟": "French Fries",
  "🎂":"Cake",
  "🍥":"Fish Cake",
  "🧇":"Waffle",
  "🫔":"Tamale",
  "🍝":"Spaghetti",
  "🍩":"Donut"
};
var emojiWeKnow = Object.keys(emojidictionary);
var input_text=document.querySelector("#input_box");

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiChangeHandler(event) {
    var emoji = event.target.value;
    var meaning = emojidictionary[emoji];
    
     if (!emoji && !input_text || (input_text && input_text.value === "")) {
      meaning = "Input field empty";
    }
    if (emoji && meaning === undefined) {
      meaning = "Sorry! not in db";
    }
    
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emojis) {
    var meaning = emojidictionary[emojis];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>inside outt</h1>
      <input id="input_box" onChange={emojiChangeHandler} />
      <h2> {meaning}</h2>
      <h3>Emojis we know</h3>
      {emojiWeKnow.map(function (emojis) {
        return (
          <span
            onClick={() => emojiClickHandler(emojis)}
            style={{ padding: "0.5rem", fontSize: "2rem", cursor: "pointer" }}
            key={emojis}
          >
            {emojis}
          </span>
        );
      })}
    </div>
  );
}
