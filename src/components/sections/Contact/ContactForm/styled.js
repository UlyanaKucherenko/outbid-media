import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const Title = styled.div`
  margin-bottom: 24px;
  font-weight: 600;
  font-size: 40px;
  line-height: 57px;
`
const Form = styled.form`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  gap: 33px;
  
  @media screen and (max-width: 1200px) {
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
  }
`
const WrapBtn = styled.div`
 margin-left: auto;
  @media screen and (max-width: 1200px) {
    margin-left: auto;
    margin-right: auto;
  }
`
export {Wrapper, Title, Form, WrapBtn}