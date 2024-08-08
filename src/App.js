import { useState } from "react";
import Header from "./components/Layout/Header";
import Votes from "./components/Votes/Votes";
import VoteItemForm from "./components/Votes/VoteItemForm";
import VotingProvider from "./store/VotingProvider";

function App() {
  const [formIsShown, setFormIsShown] = useState(false);

  const formOpenhandler = () => {
    setFormIsShown(true);
  };
  const formCloseHandler = () => {
    setFormIsShown(false);
  };

  return (
    <VotingProvider>
      <Header onShowForm={formOpenhandler} />
      {formIsShown && <VoteItemForm onClose={formCloseHandler} />}
      <Votes />
    </VotingProvider>
  );
}

export default App;
