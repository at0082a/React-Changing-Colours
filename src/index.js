import React from "react";
import ReactDOM from "react-dom";

const root = document.getElementById("root");

class ChangeColors extends React.Component {
  constructor() {
    super();
    this.state = { color: "black" };
  }

  render() {
    const style = { color: this.state.color };

    const changeColor = event => {
      var colorChange = event.target.innerHTML;
      this.setState({ color: colorChange });
    };

    return (
      <div>
        <h1 style={style}>Change My Colour!</h1>
        <p>
          <button
            type="button"
            style={{ color: this.state.changeColor }}
            onClick={changeColor}
          >
            Red
          </button>
          <button
            type="button"
            style={{ color: this.state.changeColor }}
            onClick={changeColor}
          >
            Blue
          </button>
          <button
            type="button"
            style={{ color: this.state.changeColor }}
            onClick={changeColor}
          >
            Green
          </button>
        </p>
      </div>
    );
  }
}

ReactDOM.render(<ChangeColors />, root);
