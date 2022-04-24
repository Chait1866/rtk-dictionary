import {
  TextField,
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Stack,
  AppBar,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import "./App.css";
import { Definitions } from "./components/Definitions";

function App() {
  const [word, setWord] = useState("");

  const getWord = (e) => {
    setWord(e.target.value);
  };

  return (
    <Box>
      <Box
        display="flex"
        justifyContent="center"
        marginTop={3}
        marginBottom={5}
      >
        <TextField
          onChange={getWord}
          label="Search"
          sx={{
            width: "800px",
            borderRadius: "theme.shape.borderRadius",
          }}
        />
      </Box>

      {word && <Definitions word={word} />}
    </Box>
  );
}

export default App;
