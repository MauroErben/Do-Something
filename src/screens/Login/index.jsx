import LoginForm from "../../components/Forms/LoginForm";
import Container from "../../components/AppContainer";

export default function Login({ navigation }) {
  return (
    <Container>
      <LoginForm navigation={navigation} />
    </Container>
  )
}