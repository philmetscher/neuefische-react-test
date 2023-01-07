import styled from "styled-components";

import logo from "./assets/img/logo.svg";

function App() {
  return (
    <div className="App">
      <Header>
        <HeaderInner className="container">
          <img src={logo} alt="Logo" />
        </HeaderInner>
      </Header>
      <main></main>
    </div>
  );
}

const Header = styled.header`
  background: #fff;
`;
const HeaderInner = styled.div`
  padding: 25px 20px;
`;
const FilterBtn = styled.button`
  display: inline-flex;
  align-items: center;
  font-size: 0.75rem;
  text-align: left;
`;

export default App;
