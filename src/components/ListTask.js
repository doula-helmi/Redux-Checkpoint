import React from "react";
import Task from "./Task";

const ListTask = ({todo}) => {
  return (
    <div>
      {todo.map(({id, description, isDone }, i) => (
        <Task todo={todo} key={id} id={id} description={description} isDone={isDone}/>
      ))}
    </div>
  );
};

export default ListTask;
