import React, {Component} from 'react'; 
import './AddItems.css';


class AddItems extends React.Component { 
    state = {
        name : '',
        age : ''
    } 

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if(e.target.name.value === '') {
            return false
        } else {
            this.props.addItem(this.state)
            this.setState({
                name: '',
                age: ''
            })
        }
    }
    render() {
        return (
            <div> 
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Enter name ...." id="name" onChange={this.handleChange} value={this.state.name}/>
                    <input type="number" placeholder="Enter number ...." id="age" onChange={this.handleChange} value={this.state.age}/>
                    <input type="submit" value="add"/>
                </form>
            </div>
        ) 
    } 
}

export default AddItems;