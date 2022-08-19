import styled from "styled-components";

const Label = styled.label`
  display: flex;
  flex-direction: column;
`
const Placeholder = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 38px;
  color: ${({ error }) => error && 'red'};
`
const Input = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  border-bottom: 1px solid var(--white);
  color: var(--white);
  border-bottom: ${({ error }) => error && '1px solid red;'};
`
const ErrorText = styled.span`
  color: red;
  font-size: 13px;
  text-align: right;
  font-weight: 400;
  height: 28px;
`


export {Label, Placeholder, Input, ErrorText}