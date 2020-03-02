import React from 'react';
import ToDoAddForm from './ToDoAddForm/ToDoAddForm';
import ToDoList from './ToDoList/ToDoList';
import Filters from './Filters/Filters';
import { TodoItem } from '../types/types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {
  addTodo,
  deleteTodo,
  changeStatus,
  showActiveItems,
  showCompletedItems,
  showAllItems
} from '../redux/actions';
import { State } from '../types/redux/reducerTypes';

interface Props {
  tasks: TodoItem[];
  deleteTodo: (id: number) => void;
  changeStatus: (id: number) => void;
  addTodo: (text: string) => void;
  showAllItems: () => void;
  showCompletedItems: () => void;
  showActiveItems: () => void;
  showedItems: string;
}

const StyledTodo = styled.div`
  position: relative;
  top: -140px;
`;

const TodoApp: React.FC<Props> = props => {
  return (
    <StyledTodo>
      <ToDoAddForm addTodo={props.addTodo} />
      <ToDoList
        tasks={props.tasks}
        deleteTodo={props.deleteTodo}
        changeStatus={props.changeStatus}
        showedItems={props.showedItems}
      />
      {props.tasks.length ? (
        <Filters
          showAllItems={props.showAllItems}
          showCompletedItems={props.showCompletedItems}
          showActiveItems={props.showActiveItems}
        />
      ) : (
        ''
      )}
    </StyledTodo>
  );
};

const mapStateToProps = (state: State) => {
  const { tasks, showedItems } = state;
  return { tasks, showedItems };
};

const mapDispatchToProps = (dispatch: any) => ({
  addTodo: (text: string) => dispatch(addTodo(text)),
  deleteTodo: (id: number) => dispatch(deleteTodo(id)),
  changeStatus: (id: number) => dispatch(changeStatus(id)),
  showAllItems: () => dispatch(showAllItems()),
  showCompletedItems: () => dispatch(showCompletedItems()),
  showActiveItems: () => dispatch(showActiveItems())
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);