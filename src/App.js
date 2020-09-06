import React, {Component} from 'react'; 
import './App.css';
import TodoItmes from './Component/TodoItems/TodoItems'
import AddItems from './Component/AddItem/AddItems'


class App extends React.Component {
  state = {
    items : [
      {id:1,name:'Logan',age:22},
      {id:2,name:'Kenzie',age:23},
      {id:3,name:'Elon',age:24}, 
    ]
  }

  deleteItmes = (id) => {
    let items = this.state.items.filter(item => {
      return item.id !== id
    })
    this.setState({items})
  }

  addItem = (item) => { 
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({items})
  }

  render() {
    return (
        <div className="App container">
            <h1 className="text-center">TodoList App / not responsive   </h1> 
            <TodoItmes items={this.state.items} deleteItem={this.deleteItmes}/>
            <AddItems addItem={this.addItem}/>
        </div>
    );
  }

}

export default App;
