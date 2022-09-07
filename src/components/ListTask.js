import React from "react";
import Task from "./Task";
import { useSelector } from "react-redux";

const ListTask = () => {
  const todo = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.search);
console.log(filter)
  return (
    <div>
      {filter =="All"?todo.map(({id, description, isDone }, i) => (
        <Task todo={todo} key={id} id={id} description={description} isDone={isDone}/>
      )):filter =="done" ?todo.filter(el=>el.isDone==true).map(({id, description, isDone }, i) => (
        <Task todo={todo} key={id} id={id} description={description} isDone={isDone}/>
      )):todo.filter(el=>el.isDone==false).map(({id, description, isDone }, i) => (
        <Task todo={todo} key={id} id={id} description={description} isDone={isDone}/>
      ))
      }
    </div>
  );
};

export default ListTask;
