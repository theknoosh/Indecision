class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);

    this.state = {
      visibility: false,
    };
  }

  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility,
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? "Hide Details" : "Show Details"}
        </button>
        <p>
          {this.state.visibility && (
            <div>
              <p>What should appear and disappear</p>
            </div>
          )}
        </p>
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));

// const title = "Visability Toggle";
// const copy = "What I want to appear and disappear";
// let isVisible = false;

// const makeGone = () => {
//   isVisible = !isVisible;
//   renderApp();
// };

// const appRoot = document.getElementById("app");

// const renderApp = () => {
//   const template = (
//     <div>
// <h1>{title}</h1>
// <button onClick={makeGone}>
//   {isVisible ? "Hide Details" : "Show Details"}
// </button>
// <p>{isVisible ? copy : undefined}</p>
// {!isVisible && <p>No details</p>}
// {isVisible && (
//   <div>
//     <p>{copy}</p>
//         </div>
//       )}
//     </div>
//   );

//   ReactDOM.render(template, appRoot);
// };

// renderApp();
