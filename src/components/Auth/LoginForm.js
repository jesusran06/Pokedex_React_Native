import React, { useState } from 'react'
import { Text, View, StyleSheet, TextInput, Button, Keyboard } from 'react-native'
import { useFormik } from 'formik';
import * as yup from "yup";
import { user, userDetails } from "../../utils/userDB"
import useAuth from '../../hooks/useAuth';

export default function LoginForm() {
  const [error, setError] = useState("");
  const {login} = useAuth();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: (formValue) =>{
      setError("");
      const { username, password } = formValue;
      if (username !== user.username ||  password !== user.password) {
        setError("El usuario o la contraseña no son correcto");
      } else {
        login(userDetails);
      }
    }
  })
  
    return (
      <View>
        <Text style={styles.title}> Login... </Text>
        <TextInput placeholder='Nombre de usuario'
          autoCapitalize='none' 
          style={styles.input} 
          value={formik.values.username}
          onChangeText={(text)=> formik.setFieldValue('username', text)}
          ></TextInput>
        <TextInput placeholder='Password' 
          autoCapitalize='none' 
          style={styles.input} 
          secureTextEntry={true}
          value={formik.values.password}
          onChangeText={(text)=> formik.setFieldValue('password', text)}></TextInput>
        <Button title='Entrar' onPress={formik.handleSubmit}></Button>
        <Text style={styles.error}>{formik.errors.username}</Text>
        <Text style={styles.error}>{formik.errors.password}</Text>
        <Text style={styles.error}>{error}</Text>
      </View>
    )
}
//tambie se puede directo al useFormik con {}
function initialValues() {
  return {
    username :"",
    password: ""
  }
}

function validationSchema() {
  return {
    username : yup.string().required("El usuario es requerido"),
    password : yup.string().required("El password es requerido"),
  }
}

const styles = StyleSheet.create({
  title :{
    textAlign:'center',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom:15,
  },
  input :{
    height:40,
    margin:12,
    borderWidth: 1,
    padding:10,
    borderRadius: 10,
  },
  error: {
    textAlign: "center",
    color: "#f00",
    marginTop: 20,
  },

}) 