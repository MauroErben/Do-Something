import { Button, View, Text, StyleSheet } from "react-native";
import { useUser } from "../../hooks/useUser";
import FormInput from "./FormInput";
import FormLabel from "./FormLabel";
import { Formik } from "formik"
import * as Yup from "yup"
import FormError from "./FormError";

const loginSchema = Yup.object().shape({
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required")
})

export default function LoginForm({ navigation }) {
  const { logIn } = useUser()

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={loginSchema}
      onSubmit={(values) => {
        logIn(values)
      }}
    >
      {({ handleSubmit, handleChange, errors, touched }) => (
        <View style={styles.formContainer}>
          <FormLabel>Email</FormLabel>
          <FormInput type="email-address" placeHolder="Email" onChangeText={handleChange("email")} />
          {touched.email && errors.email && <FormError>{errors.email}</FormError>}

          <FormLabel>Password</FormLabel>
          <FormInput secureTextEntry autoCorrect={false} placeHolder="Password" onChangeText={handleChange("password")} />
          {touched.password && errors.password && <FormError>{errors.password}</FormError>}

          <Button title="Login" onPress={handleSubmit} />

          <Text style={styles.text}>
            ¿You do not have an account? <Text style={styles.signin} onPress={() => navigation.navigate('SignUp')}>SignUp</Text>
          </Text>
        </View>
      )}
    </Formik>
  )
}

const styles = StyleSheet.create({
  formContainer: {
    width: '100%',
  },

  text: {
    textAlign: 'center',
    marginTop: 12,
    fontSize: 16,
  },
  signin: {
    color: 'blue',
  }
})