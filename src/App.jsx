import "./App.css";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import RatingDemo from "./RatingDemo";
import FormDemo from "./FormDemo";
import NewBar from "./NewBar";

function App() {
  return (
    <div>
      <Button variant="contained">Contained</Button>
      <Button color="success" variant="contained">
        Contained
      </Button>
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
      <RatingDemo />
      <FormDemo />
      <NewBar />
    </div>
  );
}

export default App;
