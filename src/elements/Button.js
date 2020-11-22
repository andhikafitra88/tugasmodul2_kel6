import styled, { css } from 'styled-components';

export default styled.button`
  
  display: inline-block;
  color: White;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid White;
  border-radius: 3px;
  display: block;
  text-decoration: none;
  ${(props) =>
    props.background &&
    css`
background:${(props) => props.background};
`}
color:white;
&:hover{
  background-color: White;
  color: Black;
}

`;
