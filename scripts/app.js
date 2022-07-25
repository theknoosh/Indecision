"use strict";

// jsx -  Javascript XML

var app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
  options: ["One", "Two"]
};

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    "p",
    null,
    app.subtitle
  ),
  React.createElement(
    "p",
    null,
    app.options.length > 0 ? "Here are your options" : "No options"
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "Option one"
    ),
    React.createElement(
      "li",
      null,
      "Option Two"
    )
  ),
  React.createElement("form", null)
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
