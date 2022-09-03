import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Checkbox from "@mui/material/Checkbox";
import Input from "@mui/material/Input";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import {useDispatch} from "react-redux";
import {deleteTodo, updateTodoStatus, updateTodoDes} from "../redux/actions";

const Task = ({todo, id, description, isDone}) => {
  const [todoNewValue,settodoNewValue]=React.useState("");
  console.log (todoNewValue);
  const [todoInput,setTodoInput]=React.useState(false);
  let dispatch = useDispatch();
  return (
    <ListItem
      secondaryAction={
        <Checkbox
          edge="end"
          onChange={() => {
            dispatch(updateTodoStatus(id));
          }}
          checked={isDone}
        />
      }
    >
      <ListItemButton style={{cursor: "auto"}}>
        <ListItemAvatar>
          <DeleteForeverIcon
            sx={{cursor: "pointer"}}
            edge="end"
            onClick={() => dispatch(deleteTodo(id))}
          />
        </ListItemAvatar>
        <div className={isDone ? "Done" : "notDone"} style={{width: "150%"}}>
       {todoInput && <Input value={todoNewValue} onChange={(e)=>{settodoNewValue(e.target.value); dispatch(updateTodoDes(id,e.target.value))}}/>}
          {description}
        </div>
        <EditIcon sx={{cursor: "pointer"}}  onClick={(e)=>setTodoInput(!todoInput)}/>
      </ListItemButton>
    </ListItem>
  );
};

export default Task;
