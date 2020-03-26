import React,{ Component } from "react";
import ListItem from "./ListItem";
import NewItem from "./NewItem";
class TodoList extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            todoList: [
                {content:'React practice' , done: true},
                {content:'game time' ,done: false}
              ]
        }
    }

    addNewItem = (newItemContent) =>{
        const newList = [...this.state.todoList,{content:newItemContent, done: false}];
        this.setState({
            todoList: newList
        })
    }

changeItemParmas = (item) => {
       item.done = true;
       this.setState({
        todoList: this.state.todoList
    })
}
    render() {
        return (
            <div>
                {
                    this.state.todoList.map(item => <ListItem item={item} changeItemParmas={this.changeItemParmas}/>)
                }
                <NewItem addItem = {this.addNewItem}/>
            </div>
        );
    }
}
export default TodoList