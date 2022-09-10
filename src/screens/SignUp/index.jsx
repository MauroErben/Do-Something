import SignUpForm from "../../components/Forms/SignUpForm";
import Container from "../../components/AppContainer";

export default function SignUp({ navigation }) {
  return (
    <Container>
      <SignUpForm navigation={navigation} />
    </Container>
  )
}