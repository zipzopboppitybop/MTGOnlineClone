import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import Feed from "./components/Decks/Feed";
import UserDecks from "./components/Decks/UsersDecks";
import UserPage from "./components/UsersPage";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <Feed />
          </Route>
          <Route exact path="/users/:id">
            <UserPage />
          </Route>
          <Route exact path="/users/:id/decks">
            <UserDecks />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
