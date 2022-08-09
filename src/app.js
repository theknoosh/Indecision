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
        <AddOption options={options} />
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
  handlePick() {
    alert("handlePick");
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
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
  constructor(props) {
    super(props);
    this.removeAllAction = this.removeAllAction.bind(this);
  }
  removeAllAction() {
    console.log(this.props.options);
  }

  render() {
    return (
      <div>
        <button onClick={this.removeAllAction.bind(this)}>Remove all</button>
        <p>Options Components Here</p>
        {/* Code to iterate over the array here */}
        {this.props.options.map((option) => (
          <Option key={option} option={option} />
        ))}
      </div>
    );
  }
}

class AddOption extends React.Component {
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    if (option) {
      // app.options.push(option);
      // this.props.options.push(option);
      e.target.elements.option.value = "";
      alert(option);
    }
  }
  render() {
    return (
      <form onSubmit={this.handleAddOption}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    );
  }
}

// const jsx = (
//   <div>
//     <IndecisionApp />
//   </div>
// );

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
