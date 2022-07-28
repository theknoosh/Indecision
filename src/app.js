// jsx -  Javascript XML

const app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer or something",
  options: [],
};

const numbers = [55, 101, 1000];

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    renderIndecisionApp();
  }
};

const clearOptions = () => {
  app.options = [];
  renderIndecisionApp();
};

const appRoot = document.getElementById("app");

const renderIndecisionApp = () => {
  const templateTwo = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
      <button onClick={clearOptions}>Clear all options</button>
      <p>{app.options.length}</p>
      <ol>
        {app.options.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(templateTwo, appRoot);
};

renderIndecisionApp();
