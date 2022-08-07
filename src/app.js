class IndecisionApp extends React.Component {
  render() {
    const title = "Indecision";
    const subtitle = "Put your life in the hands of a computer";
    const options = ["Thing One", "Thing Two", "Thing Four"];
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
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
    return <p>{this.props.option}</p>;
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        Options Components Here
        {/* Code to iterate over the array here */}
        {this.props.options.map((option) => (
          <Option key={option} option={option}/>
        ))}
      </div>
    );
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
