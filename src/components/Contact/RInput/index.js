import {Label, Placeholder, Input} from "./styled";

function RInput({name, labelName, type, validation}) {
  return(
    <Label>
      <Placeholder>{labelName}</Placeholder>
      <Input name={name} type={type} {...validation} />
    </Label>
  )
}
export default RInput