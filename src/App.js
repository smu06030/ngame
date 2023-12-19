import "./App.css";
import { useContext } from "react";
import styled from 'styled-components'
import MainContext from "./components/store/main-context";
import Header from "./components/Layout/Header";
import MainSimilarity from "./components/Layout/MainSimilarity/MainSimilarity";
import SuccessModal from "./components/Layout/SuccessModal";

function App() {
  const mainCtx = useContext(MainContext);

  // const allSimilarityDataLength = JSON.parse(localStorage.getItem('allSimilarityData'))

  return (
    <Container>
      {mainCtx.showModal && <SuccessModal/>}
      {/* <SuccessModal/> */}
      <Header/>
      <MainSimilarity/>
    </Container>
  );
}

const Container = styled.div`
  margin: 0 auto;
  max-width: 640px;
  padding : 0 1rem 1rem;
`;

export default App;
