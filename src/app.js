class IndecisionApp extends React.Component {
  render() {
    return(
      <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Indecision</h1>
        <h2>Put your life in the hands of a computer</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <p>Single Option Component here...</p>
    )
  }
}

class Options extends React.Component {
  render() {
    return <div>
    Options Components Here
    <Option />
    </div>;
  }
}

class AddOption extends React.Component {
  render() {
    return <div>Add Option component here</div>;
  }
}



// const jsx = (
//   <div>
//     <IndecisionApp />
//   </div>
// );

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
