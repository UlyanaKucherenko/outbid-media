import {Label, Placeholder, Input, ErrorText} from "./styled";

function RInput({name, labelName, type, validation, error}) {
  return (
    <Label>
      <Placeholder error={error}>{labelName}</Placeholder>
      <Input name={name} type={type} {...validation} error={error} />
      <ErrorText>{error?.message}</ErrorText>
    </Label>
  )
}

export default RInput