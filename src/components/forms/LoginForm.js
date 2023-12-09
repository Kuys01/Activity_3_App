import React from "react";
import { View, StyleSheet, Image, ToastAndroid  } from "react-native";
import { Button, Text, TextInput, HelperText } from "react-native-paper";
import fetchServices from "../services/fetchServices";
import * as Yup from "yup";
import { Formik } from "formik";

export default function LoginForm({ navigation }) {
  const [showPass, setShowPass] = React.useState(false);
  const logouri =  require('../../media/logo.png')
  const showToast = (message = "Something wen't wrong") => {
    ToastAndroid.show(message, 3000);
  };

  const handleLogin = async (values) => {
    try { 
      console.debug('submit');
      const url = "http://192.168.68.140:8000/api/v1/login";
      const result = await fetchServices.postData(url, values);

      if (result.message != null) {
        showToast(result?.message);
      } else {
        navigation.navigate("Home");
      }
    } catch (e) {
      console.debug(e.toString());
    }
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid Email")
      .required("Please enter your email"),
    password: Yup.string().required("Please enter your password"),
  });

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={async (values) => {
        await handleLogin(values);
      }}
      validationSchema={validationSchema}
    >
      {({
        values,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        errors,
        touched,
        setTouched,
      }) => {
        console.debug(errors);
        return (    
    <View styles={{ flex: 1 }}>
       <View style={styles.hero}>
          <Image
            source={logouri}
            style={styles.heroImage}
            resizeMode="contain"
          />
        </View>
        <Text variant="displayMedium">Login</Text>
            <TextInput
              mode="outlined"
              placeholder="Email"
              label="Email"
              left={<TextInput.Icon icon="email" />}
              style={{ marginTop: 10 }}
              defaultValue={values.email}
              value={values.email}
              keyboardType="email-address"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              error={errors.email && touched.email}
              onFocus={() => setTouched({ email: true }, false)}
            />
            {errors.email && touched.email && (
              <HelperText type="error" visible={errors.email}>
                {errors.email}
              </HelperText>
            )}
         <TextInput
               mode="outlined"
               placeholder="Password"
               label="Password"
               left={<TextInput.Icon icon="lock" />}
               secureTextEntry={!showPass}
               right={
        <TextInput.Icon
               icon={showPass ? "eye" : "eye-off"}
               onPress={() => setShowPass(!showPass)}
            />
              }
               style={{ marginTop: 10 }}
               value={values.password}
               onChangeText={handleChange("password")}
               onBlur={handleBlur("password")}
               error={errors.password && touched.password}
               onFocus={() => setTouched({ password: true }, false)}
            />
               {errors.password && touched.password && (
              <HelperText type="error" visible={errors.password}>
              {errors.password}
             </HelperText>
                    )}
              <Button
               loading={isSubmitting}
               disabled={isSubmitting}
               onPress={handleSubmit}
               icon="login"
               mode="contained"
               style={{ marginTop: 10, backgroundColor:'#B11E1E' }}
              >
            Login
              </Button>
              <Button
                disabled={isSubmitting}
                onPress={() => navigation.navigate("Register")}
                icon="account-plus"
                mode="contained"
                style={{ marginTop: 10, backgroundColor:'#B11E1E' }}
              >
                      Register
                    </Button>
                  </View>
                );
              }}
            </Formik>
          );
        }
        

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  hero: {
    
    margin: 1,
    borderRadius: 16,
    padding: 10,
    height: "30%",
    bottom: 20,
  },
  heroImage: {
    width: '100%',
    borderRadius: 10,
    height: "100%"
  },
  text: {
    fontSize: 15,
    lineHeight: 24,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
  },
  buttonText: {
    fontSize: 15,
    color: '#000000',
    fontWeight: 'bold'

  },
  button: {
      flexDirection: 'row',
      backgroundColor: '#deb887',
      paddingVertical: 5,
      paddingHorizontal: 5,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 30,
      margin: 10,
    },
  fade:{
    opacity: '50%',
  },
  text1: {
    flexDirection: 'row',
    backgroundColor: '#deb887',
    paddingVertical: 5,
    paddingHorizontal: 115,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    margin: 10,
    
  },
  text2: {
    flexDirection: 'row',
    backgroundColor: '#deb887',
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    margin: 10,
  },
});