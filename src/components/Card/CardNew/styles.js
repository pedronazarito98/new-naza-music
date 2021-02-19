import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  width: 114em;
  grid-gap: 6rem;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  align-items: start;
`;
