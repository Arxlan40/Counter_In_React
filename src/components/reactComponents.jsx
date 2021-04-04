import React, { Component } from "react";

class Counter extends Component {

  styles = {
    fontSize: 30,
    fontWeight: "bold",
  };

 
  render() {
    return (
      <React.Fragment >


        <span style={this.styles} className={this.warningClasses()}>
          {this.formatCount()}
        </span>

        <button
          className="btn btn-secondary m-2"
          onClick={() =>this.props.onIcrement(this.props.counter)}
        >
          hello button
        </button>
        <button onClick={() =>this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
      </React.Fragment>
    );
  }

  warningClasses() {
    let classes = "badge-primary m-2 badge-";

    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "zero" : value;
  }
}

export default Counter;
