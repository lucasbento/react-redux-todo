import React, { Component } from 'react';
import { List } from 'material-ui/List';

import TodoRow from './TodoRow';
import Footer from '../components/Footer';

class TodoList extends Component {
  state = {
    currentFilter: 'all',
  };

  handleCompleteTodo = id => {
    return () => this.props.actions.completeTodo(id);
  };

  handleRemoveTodo = id => {
    return () => this.props.actions.removeTodo(id);
  };

  handleFilter = filter => {
    this.setState({
      currentFilter: filter,
    });
  };

  handleRemoveCompleted = () => {
    this.props.actions.removeCompleted();
  };

  handleCompleteAll = () => {
    this.props.actions.completeAll();
  };

  render() {
    const { todos } = this.props;
    const { currentFilter } = this.state;

    const filteredTodos = todos.filter(({ completed }) => {
      switch (currentFilter) {
        case 'completed':
          return completed;
        case 'active':
          return !completed;
        default:
          return true;
      }
    });

    return (
      <div>
        <List>
          {filteredTodos.map(todo =>
            <TodoRow
              key={todo.id}
              todo={todo}
              handleCompleteTodo={this.handleCompleteTodo}
              handleRemoveTodo={this.handleRemoveTodo}
            />
          )}
        </List>
        <Footer
          todos={todos}
          handleFilter={this.handleFilter}
          currentFilter={currentFilter}
          handleRemoveCompleted={this.handleRemoveCompleted}
          handleCompleteAll={this.handleCompleteAll}
        />
      </div>
    );
  }
}

export default TodoList;