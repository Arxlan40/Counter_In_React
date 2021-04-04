import React, { Component } from "react";
import Counter from "./reactComponents";

class Counters extends Component {
  state = {
    counters: [
      {
        id: 1,
        value: 0,
      },
      {
        id: 2,
        value: 2,
      },
      {
        id: 3,
        value: 3,
      },
      {
        id: 4,
        value: 4,
      },
    ],
  };

  handleIcrement = (counter) => {
    const counters = [...this.state.counters];
    const index=counters.indexOf(counter);
    counters[index]={...counter};
    counters[index].value++;
    this.setState({counters});
  };

  handleDelete = (id) => {
    console.log("delete");
    const counters = this.state.counters.filter((c) => c.id !== id);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });

    this.setState({ counters });
  };


  render() {
    return (
      <div >
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={this.handleReset}>
       
          Reset
        </button>
        {this.state.counters.map((count) => (
          <Counter
            key={count.id}
            counter={count}
            onIcrement={this.handleIcrement}
            onDelete={this.handleDelete}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
