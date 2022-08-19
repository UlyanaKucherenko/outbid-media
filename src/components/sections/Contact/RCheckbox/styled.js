import styled from "styled-components";

const Label = styled.label`
  display: flex;
  align-items: center;
`
const Text = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
`
const Input = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  color: var(--main-green-color);
  margin-right: 16px;
`


export {Label, Text, Input}