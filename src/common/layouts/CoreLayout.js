import React, { useReducer } from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Player from "../components/Player";
import { AppContext, initialState, reducer } from "../../state";

function CoreLayout({ children, history }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="main">
      <AppContext.Provider value={[state, dispatch]}>
        <SideBar />
        <div className="main__content">
          <Header history={history} />
          <div className="main__content__child">{children}</div>
        </div>
        <Player />
      </AppContext.Provider>
    </div>
  );
}

export default CoreLayout;
