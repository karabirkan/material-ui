import { TextField } from "@mui/material";
import { useState } from "react";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";

export default function FormDemo() {
  const [name, setName] = useState("");
  const [volume, setVolumne] = useState(50);
  const updateValue = (e, newVal) => {
    setVolumne(newVal);
  };
  const updateName = (e) => {
    setName(e.target.value);
  };
  return (
    <Box sx={{ backgroundColor: "red", width: 200 }}>
      <h1>Name is : {name}</h1>
      <TextField
        id="standard-basic"
        label="Standard"
        variant="standard"
        value={name}
        onChange={updateName}
      />
      <h2>Volume: {volume}</h2>
      <Slider aria-label="Volume" value={volume} onChange={updateValue} />
    </Box>
  );
}
