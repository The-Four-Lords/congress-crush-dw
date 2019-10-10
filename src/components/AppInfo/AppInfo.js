import React from "react";
import androidPlayLogo from "../../asseets/img/Android-app-on-google-play.png";
import styled from "styled-components";

const Wrapper = styled.div`
  h1 {
    font-family: "Permanent Marker";
    font-size: 50px;
  }

  img {
    max-width: 200px;
  }
`;

const AppInfo = () => {
  return (
    <Wrapper>
      <h1>Congress Crush</h1>
      <h3>
        Juego de estilo puzzle en el que deberás combinar fichas para conseguir
        350 escaños.
      </h3>
      <div>
        <img src={androidPlayLogo} />
      </div>
    </Wrapper>
  );
};

export default AppInfo;
