const title = "Visability Toggle";
const copy = "What I want to appear and disappear";
let isVisible = false;

const makeGone = () => {
  isVisible = !isVisible;
  renderApp();
};

const appRoot = document.getElementById("app");

const renderApp = () => {
  const template = (
    <div>
      <h1>{title}</h1>
      <button onClick={makeGone}>
        {isVisible ? "Hide Details" : "Show Details"}
      </button>
      <p>{isVisible ? copy : undefined}</p>
      {!isVisible && <p>No details</p>}
      {isVisible && (
        <div>
          <p>{copy}</p>
        </div>
      )}
    </div>
  );

  ReactDOM.render(template, appRoot);
};

renderApp();
