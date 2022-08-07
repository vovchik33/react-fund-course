import React, {Component} from 'react';

class ClassCounter extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      count: 0
    }
    
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }
  
  increase() {
    this.setState({
      count: this.state.count + 1
    });
  }
  
  decrease() {
    this.setState({
      count: this.state.count - 1
    });
  }
  
  render() {
    return (
      <div>
        <button onClick={this.increase}>Increase</button>
        <p>{this.state.count}</p>
        <button onClick={this.decrease}>Decrease</button>
      </div>
    );
  }
}

export default ClassCounter;