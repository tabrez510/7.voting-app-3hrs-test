import React, { useState, useContext } from "react";
import VotingContext from "../../store/voting-context";
import Modal from "../UI/Modal";
import CancelIcon from "@mui/icons-material/Cancel";
import { v4 as uuidv4 } from "uuid";
import {
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Button,
  FormControl,
} from "@mui/material";

const VoteItemForm = (props) => {
  const votingContext = useContext(VotingContext);
  const [enteredName, setEnteredName] = useState("");
  const [selectedCandidate, setSelelectedCandidate] = useState("");

  const nameInputHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const voteInputHandler = (event) => {
    setSelelectedCandidate(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    votingContext.addVote(
      { id: uuidv4(), name: enteredName },
      selectedCandidate
    );
    setEnteredName("");
    setSelelectedCandidate("");
  };

  return (
    <Modal onClose={props.onClose}>
      <form
        onSubmit={formSubmitHandler}
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: 'wrap'
        }}
      >
        <TextField
          onChange={nameInputHandler}
          id="voter-name"
          label="Enter your name"
          variant="outlined"
          value={enteredName}
        />
        <FormControl sx={{ minWidth: "10rem" }}>
          <InputLabel id="candidate-list">Candidate List</InputLabel>
          <Select
            value={selectedCandidate}
            label={"Candidate List"}
            onChange={voteInputHandler}
          >
            <MenuItem value={"suresh"}>Suresh</MenuItem>
            <MenuItem value={"abhik"}>Abhik</MenuItem>
            <MenuItem value={"deepank"}>Deepank</MenuItem>
          </Select>
        </FormControl>
        <Button type="submit" variant="contained">
          Add Vote
        </Button>
        <CancelIcon sx={{ cursor: "pointer" }} onClick={props.onClose} />
      </form>
    </Modal>
  );
};

export default VoteItemForm;
