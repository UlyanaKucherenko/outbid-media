import {Label, Text, Input} from "./styled";

function RCheckbox({name, labelName}) {
  return (
    <Label>
      <Input name={name} type="checkbox" />
      <Text>{labelName}</Text>
    </Label>
  )
}

export default RCheckbox