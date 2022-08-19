import {useForm} from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {Title, Wrapper, Form, WrapBtn} from "./styled";
import RInput from "../RInput";
import {Btn} from "../../Hero/styled";
import RCheckbox from "../RCheckbox";

const schema = yup.object({
  name: yup.string().required(),
  phone: yup.string().required(),
  email: yup.string().required(),
  message: yup.string().required(),
}).required();

function ContactForm() {

  const { register, formState:{ errors } , handleSubmit } = useForm({ resolver: yupResolver(schema)});
  const onSubmit = data => console.log('form data=>', data);

  return(
    <Wrapper>
      <Title>Let’s get in touch!</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <RInput
          name="name"
          labelName="Your name*"
          type="text"
          validation={{...register("name")} }
          error={errors.name}
        />

        <RInput
          name="phone"
          labelName="Your phone*"
          type="phone"
          validation={{...register("phone")} }
          error={errors.phone}
        />
        <RInput
          name="email"
          labelName="Your email*"
          type="email"
          validation={{...register("email")} }
          error={errors.email}
        />
        <RInput
          name="message"
          labelName="Message*"
          type="text"
          validation={{...register("message")} }
          error={errors.message}
        />
        <RCheckbox labelName="Subscribe to Outbid Media newsletter" />
        <WrapBtn>
          <Btn type="submit">send message</Btn>
        </WrapBtn>
      </Form>
    </Wrapper>
  )
}
export default ContactForm