import React from "react";
import {
  SettingsContainer,
  StatusContainer,
  BoardContainer,
} from "./containers";
import { Wrapper } from "./AppStyle";

const App = () => {
  return (
    <>
      <h1 class="text-3xl font-bold underline">Neo-x Minesweeper</h1>
      <Wrapper>
        
        <div>
          <SettingsContainer />
          <StatusContainer />
          <BoardContainer />
        </div>
      </Wrapper>
    </>
  );
};

export default App;
