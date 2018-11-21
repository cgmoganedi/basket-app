import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';
import './App.css';

class App extends Component {
  state = {
    counters:[
        {id:1, value:10},
        {id:2, value:11},
        {id:3, value:12},
        {id:4, value:13}
    ]
};
constructor(){
  //app cnstructor
  super();
  console.log("App - constructor")
};
componentDidMount(){
  // Ajax calls
  console.log("App - Mounted")
};
handleIncrement = counter =>
{
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counter[index] = {...counter};
    counters[index].value++;
    //console.log(this.state.counters[index]);
    this.setState({counters});
};

handleReset = () =>
{
    const counters = this.state.counters.map(c => {
        c.value = 0;
        return c;
    });

    this.setState({counters});
};

handleDelete = (counterId) =>
{
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({counters: counters});
}
  render() {
    console.log("App - Rendered")
    return (
      <React.Fragment>
        <NavBar 
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className='continer'>
          <Counters 
          counters={this.state.counters}
          onReset={this.handleReset}
          onIncrement={this.handleIncrement}
          onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
