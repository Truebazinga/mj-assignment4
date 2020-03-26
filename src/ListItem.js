import React ,{Component} from 'react';
import './ListItem.css';
class ListItem extends Component {
   item;

constructor (props) {
    super (props);
    this.item = props.item;
}

finishClick = () => {
    this.props.changeItemParmas(this.props.item)
}

    render() {
        return (
        <div>
        <p className = {this.props.item.done ? "done-item" : "item"}  > {this.props.item.content}</p>
        <button onClick={this.finishClick}>Finish</button>
        </div>
        )
    }
}
export default ListItem;