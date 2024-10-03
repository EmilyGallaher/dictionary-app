import React from "react";
import Meaning from "./Meaning";
import Phoenetic from "./Phoenetic";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>
        {props.results.phoenetics.map(function (phoenetic, index) {
             return (
            <div key={index}>
              <Phoenetic phoenetic={phoenetic} />
            </div>
             );
        })}
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
    