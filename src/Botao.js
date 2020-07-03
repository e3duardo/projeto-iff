import styled from "styled-components";
import { lighten } from "polished";

export default styled.button`
  background: #2121bd;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 4px 10px;
  margin-left: 10px;
  cursor: pointer;
  :hover {
    background: ${lighten(0.2, "#2121bd")};
  }
`;
