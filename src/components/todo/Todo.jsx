import React from 'react';
import styled from 'styled-components';

const Todo = ({todo, DeleteHandler, EditHandler}) => {
  return (
    <TodoCard>
      <TodoContent>
        <h3 className='todo-title'>{todo.title}</h3>
        <div>{todo.text}</div>

        <ButtonSet>
          <TodoDeleteButton onClick={() => DeleteHandler(todo.id)}>
            삭제
          </TodoDeleteButton>
          <TodoCompleteButton onClick={() => EditHandler(todo.id)}>
          {
            todo.isDone === false
            ? <l>완료</l>
            : <l>취소</l>
            }
          </TodoCompleteButton>
          <TodoDetailButton>
            자세히
          </TodoDetailButton>
        </ButtonSet>

      </TodoContent>
    </TodoCard>
  );
};

export {Todo};

const TodoCard = styled.div`
  mmin-width: 200px;
  padding: 12px 24px 24px 24px;
  margin-bottom: 10px;
  box-sizing: border-box;
  border: 4px solid cornflowerblue;
  border-radius: 12px;
  :hover {border: 5px solid #0047AB}
`;
const TodoContent = styled.div`
  margin: auto;
`;

const ButtonSet = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 24px;
`;

const Button = styled.button`
  border: none;
  width: 35%;
  height: 40px;
  border-radius: 8px;
  cursor: pointer;
`;

const TodoDeleteButton = styled(Button)`
  border: 2px solid tomato;
  background-color: #fff;
  :hover {border: 3px solid red}
`;

const TodoCompleteButton = styled(Button)`
  border: 2px solid #75A64A;
  background-color: #fff;
  :hover {border: 3px solid green}
`;
const TodoDetailButton = styled(Button)`
  border: none;
  width: 30%;
  height: 40px;
  border: 2px solid cornflowerblue;
  background-color: #fff;
  :hover {border: 2px solid #0047AB}
`;