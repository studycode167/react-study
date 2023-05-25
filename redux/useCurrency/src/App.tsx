import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store";
import { setText } from "./reducer";
import { Button, Box, TextField, createTheme, ThemeProvider } from "@mui/material";

// css 이용
// theme 이용 뒷배경 색깔 검정색으로 
//환율이랑 합치기 
const theme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& fieldset": {
            border: "2px solid red",
          },
        },
      },
    },
  },
});

function App() {
  const text = useSelector((state: RootState) => state.app.text);
  const dispatch = useDispatch();

  const handleTextFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newText = event.target.value;
    dispatch(setText(newText));
  };

  const handleClick = () => {
    console.log(text);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Box height="100vh" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
          <TextField value={text} onChange={handleTextFieldChange} />
          <Button variant="contained" onClick={handleClick}>
            보내기
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
