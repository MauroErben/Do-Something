import { useState } from "react"
import { Button, View, Text, ScrollView, StyleSheet } from "react-native"
import FormLabel from "./FormLabel"
import FormInput from "./FormInput"
import { useUser } from "../../hooks/useUser"
import { Formik } from "formik"
import * as Yup from "yup"
import FormError from "./FormError"

const registerScheme = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  lastName: Yup.string().required('LastName is required'),
  age: Yup.string().required('Age is required'),
  email: Yup.string().email("Invalid email").required('Email is required'),
  password: Yup.string().required('Password is required')
})

export default function SignUpForm({ navigation }) {
  const { signUp } = useUser();

  return (
    <Formik
      initialValues={{ name: '', lastName: '', age: '', email: '', password: '' }}
      validationSchema={registerScheme}
      onSubmit={(values) => {
        signUp(values)
      }}
    >
      {({ handleSubmit, handleChange, errors, touched }) => ( // agrego un scrollview por si el formulario se nos pasa de alto
        <ScrollView>
          <View style={styles.formContainer}>
            <FormLabel>Name</FormLabel>
            <FormInput placeHolder='Name' onChangeText={handleChange("name")} />
            {touched.name && errors.name && <FormError>{errors.name}</FormError>}

            <FormLabel>Lastname</FormLabel>
            <FormInput placeHolder='Lastname' onChangeText={handleChange("lastName")} />
            {touched.lastName && errors.lastName && <FormError>{errors.lastName}</FormError>}

            <FormLabel>Age</FormLabel>
            <FormInput type="numeric" placeHolder="Age" onChangeText={handleChange("age")} />
            {touched.age && errors.age && <FormError>{errors.age}</FormError>}

            <FormLabel>Email</FormLabel>
            <FormInput type="email-address" placeHolder="Email" onChangeText={handleChange("email")} />
            {touched.email && errors.email && <FormError>{errors.email}</FormError>}

            <FormLabel>Password</FormLabel>
            <FormInput secureTextEntry autoCorrect={false} placeHolder="Password" onChangeText={handleChange("password")} />
            {touched.password && errors.password && <FormError>{errors.password}</FormError>}

            <Button title="Signup" onPress={handleSubmit} />

            <Text style={styles.text}>
              ¿You have an account? <Text style={styles.signin} onPress={() => navigation.navigate('Login')}>SignIn</Text>
            </Text>
          </View>
        </ScrollView>
      )}
    </Formik>

  )
}

const styles = StyleSheet.create({
  formContainer: {
    width: '100%',
  },

  scrollView: {
    flex: 1,
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