import React, { useContext } from "react";
import VotingContext from "../../store/voting-context";
import { Button, Paper } from "@mui/material";

const style = {
  display: "flex",
  flexDirection: "column",
  justifyContext: "center",
  alignItems: "center",
  p: "0.5rem",
  mb: "0.5rem",
};
const Header = (props) => {
  const votingContext = useContext(VotingContext);
  let totalVotes =
    votingContext.candidates["suresh"].votes +
    votingContext.candidates["abhik"].votes +
    votingContext.candidates["deepank"].votes;

  return (
    <Paper elevation={3} sx={style}>
      <h2>Class Monitor Vote</h2>
      <p>Total Votes: {totalVotes}</p>
      <Button variant="contained" onClick={props.onShowForm}>
        Add New Vote
      </Button>
    </Paper>
  );
};

export default Header;
