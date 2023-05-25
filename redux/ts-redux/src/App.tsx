import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store";
import { increment } from "./actions";
import { Button, Box } from "@mui/material";

function App() {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(increment());
    console.log(count);
  };

  return (
    <Box height="100vh" display="flex" alignItems="center" justifyContent="center">
      <Button variant="contained" onClick={handleClick}>
        Click me!
      </Button>
    </Box>
  );
}

export default App;
