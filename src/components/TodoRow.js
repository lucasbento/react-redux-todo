import React, { Component } from 'react';
import { ListItem } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';

class TodoRow extends Component {
  render() {
    const { todo, handleRemoveTodo, handleCompleteTodo } = this.props;

    return (
      <ListItem
        primaryText={todo.text}
        leftCheckbox={
          <Checkbox
            onCheck={handleCompleteTodo(todo.id)}
            checked={todo.completed}
          />
        }
        rightIconButton={
          <IconButton onTouchTap={handleRemoveTodo(todo.id)}>
            <FontIcon
              className="material-icons"
              color="red"
            >
              clear
            </FontIcon>
          </IconButton>
        }
        style={todo.completed ? styles.completed : {}}
      />
    );
  }
}

const styles = {
  completed: {
    color: 'gray',
    textDecoration: 'line-through',
  },
};

export default TodoRow;