import React from "react";
import styled from "styled-components";

function Viewer() {
  return (
    <Container>
      <Wrap>
        <img src="/images/viewers-disney.png" alt="" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-marvel.png" alt="" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-national.png" alt="" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-pixar.png" alt="" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-disney.png" alt="" />
      </Wrap>
    </Container>
  );
}

export default Viewer;

const Container = styled.div`
  margin-top: 30px;
  display: grid;
  padding: 30px 0px 26px;
  grid-gap: 25px;
  // 1fr mean strecht out max as possible
  grid-template-columns: repeat(5, minmax(0, 1fr));
`;

const Wrap = styled.div`
  cursor: pointer;
  border-radius: 10px;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -29px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 100%;
    height: 100%;
    // fit to the div
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    box-shadow: rgb(0 0 0 / 69%) 0px 40px 60px -10px,
      rgb(0 0 0 / 73%) 0px 30px 20px -29px;
  }
`;
