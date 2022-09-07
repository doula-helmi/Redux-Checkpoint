import './app.css'
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import {Typography} from "@mui/material";
import AddTask from "./components/AddTask";
import TaskFilter from "./components/TaskFilter";
import ListTask from "./components/ListTask";
import { useSelector } from "react-redux";


function App() {
 
  return (
    <React.Fragment>
      <CssBaseline />
      <Container sx={{width: "600px"}} fixed>
        <Box sx={{bgcolor: "#fff", height: "100vh"}}>
          <Typography
            variant="h1"
            component="h1"
            align="center"
            fontSize="30px"
            fontWeight="600"
            padding="2rem"
            color="#6c6c6c"
          >
            ToDo Application
          </Typography>
          <AddTask />
          <ListTask />
          <TaskFilter/>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default App;
