import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import "./styles.css";

const Flex = styled.div`
  display: flex;
  margin: auto;
`;

const Grid = styled.div`
  position: relative;
  width: 30cm;
  min-width: 1000px;
  display: grid;
  padding: 0px;
  margin: auto;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  justify-items: center;
  align-items: start;
  justify-content: start;
  align-content: center;
  grid-auto-flow: row dense;
  transition: all .5s ease;
  box-sizing: border-box;
`;

const GridItem = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: yellow;
  box-sizing: border-box;
  transition: transform .4s ease, opacity .5s ease;
  box-shadow: 10px 10px 22px 0px rgba(0,0,0,0.75);
  &:active {
    transform: scale(1.5);
    opacity: .2;
  }
`;

const ContentBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: lightcyan;
  margin: 0;
  padding: 0;
  * {
    padding: 0;
    margin: 0;
  }
`;

const HiddenItem = styled.div`
  position: absolute;
  grid-column: 2 / span 1;
  grid-row: 2 / span 1;
  z-index: -1;
  top: 0;
  left: 0;
  border: 1px solid green;
  background-color: blue;
  box-sizing: border-box;
`;

const Img = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;

function App() {
  const items = new Array(10).fill(0).map((item, i) => (
    <GridItem key={i}>
      <Img src={`https://picsum.photos/600/400/?image=${i + 20}`} />
    </GridItem>
  ));

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Flex>
        <Grid>
          {items}
          <HiddenItem>
            <Img src={`https://picsum.photos/600/400/?random`} />
          </HiddenItem>
          <GridItem>
            <ContentBox>
              <h1>Hi there!</h1>
              <div>
                <label>What is your name?</label>
                <input />
              </div>
              <div>
                <label>Do you want to play a game?</label>
              </div>
              <div>
                <button>Yes</button>
                <button>no</button>
              </div>
            </ContentBox>
          </GridItem>
        </Grid>
      </Flex>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
