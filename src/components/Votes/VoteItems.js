import React, { useContext } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import VotingContext from "../../store/voting-context";

const style = {
  p: '1rem',
  mt: '1rem'
}
const VoteItems = (props) => {
  const votingContext = useContext(VotingContext);
  const candidateData = votingContext.candidates[props.candidateName];
  return (
    <Paper elevation={3} sx={style}>
      <h3>{props.candidateName}</h3>
      <p>Total: {candidateData.votes}</p>
      <TableContainer sx={{ maxHeight: 200, maxWidth: 650 }} component={Paper}>
        <Table stickyHeader size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell style={{ backgroundColor: "#1565C0", color: "white" }}>
                Voters
              </TableCell>
              <TableCell
                style={{ backgroundColor: "#1565C0", color: "white" }}
                align="right"
              >
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {candidateData.voters.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">
                  <Button
                    variant="outlined"
                    sx={{ p: "0.1rem" }}
                    onClick={votingContext.deleteVote.bind(
                      null,
                      row.id,
                      props.candidateName
                    )}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default VoteItems;
