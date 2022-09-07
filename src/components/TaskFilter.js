import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { filterDONE } from "../redux/actions";
import {useDispatch} from "react-redux"
import { useSelector } from "react-redux";

const TaskFilter = () => {
  const [alignment, setAlignment] = React.useState("ALL");
  
  let dispatch = useDispatch();

  
  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      aria-label="Platform"
      sx={{display:"flex",  justifyContent: "center"}}
    >
      <ToggleButton onClick={(e) => {dispatch(filterDONE("All")); setAlignment(e.target.value)}} value="ALL">ALL</ToggleButton>
      <ToggleButton onClick={(e) => {dispatch(filterDONE("done")); setAlignment(e.target.value)}} value="Done">Done</ToggleButton>
      <ToggleButton onClick={(e) => {dispatch(filterDONE("notdone")); setAlignment(e.target.value)}} value="!Done">!Done</ToggleButton>
    </ToggleButtonGroup>
  );
};

export default TaskFilter;
