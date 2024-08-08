import React, { useState, useEffect } from "react";
import VotingContext from "./voting-context";

const VotingProvider = (props) => {
  const [candidates, setCandidates] = useState({
    suresh: { votes: 0, voters: [] },
    abhik: { votes: 0, voters: [] },
    deepank: { votes: 0, voters: [] },
  });

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("votingData"));
    if (savedData) {
      setCandidates(savedData);
    }
  }, []);

  const addVote = (votersInfo, candidateName) => {
    setCandidates((prevCandidates) => {
      let updatedCandidates = {
        ...prevCandidates,
        [candidateName]: {
          votes: prevCandidates[candidateName].votes + 1,
          voters: [...prevCandidates[candidateName].voters, votersInfo],
        },
      };
      localStorage.setItem("votingData", JSON.stringify(updatedCandidates));
      return updatedCandidates;
    });
  };

  const deleteVote = (id, candidateName) => {
    setCandidates((prevCandidates) => {
      let upadatedVoters = prevCandidates[candidateName].voters.filter(
        (candidate) => candidate.id !== id
      );

      let updatedCandidates = {
        ...prevCandidates,
        [candidateName]: {
          votes: prevCandidates[candidateName].votes - 1,
          voters: upadatedVoters,
        },
      };
      localStorage.setItem("votingData", JSON.stringify(updatedCandidates));
      return updatedCandidates;
    });
  };

  const votingContext = {
    candidates: candidates,
    addVote: addVote,
    deleteVote: deleteVote,
  };
  return (
    <VotingContext.Provider value={votingContext}>
      {props.children}
    </VotingContext.Provider>
  );
};

export default VotingProvider;
