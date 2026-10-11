import styled from "styled-components";

export const StyledCategoriesContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const StyledCategoriesContent = styled.ul`
  width: 100vw;
  height: 100%;
  display: grid;
  grid-template-areas:
    "a b"
    "c c"
    "d e";
  grid-gap: 15px;
  padding: 30px;

  & > li:nth-child(1) {
    grid-area: a;
  }

  & > li:nth-child(2) {
    grid-area: b;
  }

  & > li:nth-child(3) {
    grid-area: c;
  }

  & > li:nth-child(4) {
    grid-area: d;
  }

  & > li:nth-child(5) {
    grid-area: e;
  }
`;
