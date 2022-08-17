import styled from "styled-components";

const Label = styled.label`
  display: flex;
  flex-direction: column;
`
const Placeholder = styled.span`

`
const Input = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  border-bottom: 1px solid var(--white);
  color: var(--white);
  
`


export {Label, Placeholder, Input}