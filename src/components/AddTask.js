import React from "react";
import Input from "@mui/material/Input";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import {useDispatch} from "react-redux";
import { addTodo } from '../redux/actions';
const AddTask = () => {
  const [todovalue, setTodovalue] = React.useState("");
  const [button,seButton] = React.useState(true)
  const handelsubmit = (e) => {
    e.preventDefault();
    seButton(true)
  };
  let dispatch = useDispatch();

  return (
    <Box
      onSubmit={handelsubmit}
      component="form"
      sx={{
        "& > :not(style)": {m: 1},
      }}
      noValidate
      autoComplete="off"
      display="flex"
      justifyContent="center"
    >
      <Input value={todovalue}
        fullWidth
        placeholder="New Task"
        type="text"
        onChange={(e) => {
          setTodovalue(e.target.value);
          seButton(false);
        }}
      />
      <Stack spacing={5} direction="row">
        <Button
          type="submit"
          sx={{width: "110px"}}
          variant="contained"
          onClick={() => {
            dispatch(
              addTodo({
                id: Math.random(),
                description: todovalue,
                isDone:false
              })
            );
            setTodovalue('');
          }}
          disabled={button}
        >
          Add Task
        </Button>
      </Stack>
    </Box>
  );
};

export default AddTask;
