import React from 'react';
import {
  Container,
  FormContent,
  Icon,
  Form,
  FormH1,
  FormInput,
  FormLabel,
  FormWrapper,
  FormButton,
  Text,
} from './SigninElements';

const SignIn = () => {
  return (
    <>
      <Container>
        <FormWrapper>
          <Icon to="/">Dolla</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" required />
              <FormButton type="submit">Continue</FormButton>
              <Text>Forgot password</Text>
            </Form>
          </FormContent>
        </FormWrapper>
      </Container>
    </>
  );
};

export default SignIn;
