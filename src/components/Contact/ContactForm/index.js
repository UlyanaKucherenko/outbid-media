import {useForm} from "react-hook-form";
import {Title, Wrapper, Form} from "./styled";
import RInput from "../RInput";

function ContactForm() {

  const { register,errors, handleSubmit } = useForm({});
  const onSubmit = data => console.log(data);
  return(
    <Wrapper>
      <Title>Let’s get in touch!</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <RInput
          name="firstName"
          labelName="Your name*"
          type="text"
          validation={{...register("firstName", { required: true, maxLength: 3 })} }
        />

        <RInput labelName="Your phone*" type="phone"/>
        <RInput labelName="Your email*" type="email"/>
        <RInput labelName="Message*" type="text"/>
        <label>
          <input type="checkbox" />
          <span>Subscribe to Outbid Media newsletter</span>
        </label>
        <button type="submit">button</button>
      </Form>
    </Wrapper>
  )
}
export default ContactForm