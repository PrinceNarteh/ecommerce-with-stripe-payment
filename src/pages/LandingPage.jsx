import styled from "styled-components";
import "../App.css";
import Hero from "../components/Hero";
import MainSection from "../components/MainSection";

function App() {
  return (
    <StyledApp>
      <Hero />
      <MainSection />
    </StyledApp>
  );
}

const StyledApp = styled.div`
  position: relative;
  min-height: calc(100vh - 70px);
`;

export default App;
