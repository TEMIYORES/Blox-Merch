import { Container } from "@mui/material";
import FormWrap from "../components/FormWrap";
import RegisterForm from "./RegisterForm";

const Register = () => {
  return (
    <Container>
      <FormWrap>
        <RegisterForm />
      </FormWrap>
    </Container>
  );
};
export default Register;
