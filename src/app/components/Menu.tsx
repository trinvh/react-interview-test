import styled from "styled-components";

export const Menu = styled.ul`
  list-style: none;
  text-align: center;
`

export const MenuItem = styled.li`
  display: inline-block;
  padding: 10px 20px;
  cursor: pointer;
  &.active {
    border-bottom: #555 1px solid;
  }
`