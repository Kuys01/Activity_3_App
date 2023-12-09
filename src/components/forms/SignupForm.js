import { View, StyleSheet, Image, ToastAndroid} from "react-native";
import React from "react";
import { Button, Text, TextInput } from "react-native-paper";
import fetchServices from "../services/fetchServices";

export default function LoginForm({ navigation }) {

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [repassword, setRepassword] = React.useState("");
  const [showPass, setShowPass] = React.useState(false);
  const [showRePass, setShowRePass] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const logouri =  require('../../media/logo.png')

  const showToast = (message = "Something wen't wrong") => {
    ToastAndroid.show(message, 3000);
  };
  const handleRegistration = async () => {
    try {
      setLoading(true);

      if (name === "" || email === "" || password === "" || repassword === "") {
        showToast("Please input required data");
        setIsError(true);
        return false;
      }

      if(password === '' != repassword === ''){
        showToast("Please match password");
        setIsError(true);
        return false;
      }

      const url = "http://192.168.68.140:8000/api/v1/register";
      const data = {
        name,
        email,
        password,
        password_confirmation: repassword,
      };
 

      const result = await fetchServices.postData(url, data);
      console.debug(result);
      if (result?.message != null) {
        showToast(result?.message);
      } else {
        navigation.navigate("Login");
      }
    } catch (e) {  
      showToast(e.toString());
    } 
  };

  return (
    <View styles={{ flex: 1 }}>
       <View style={styles.hero}>
          <Image
            source={logouri}
            style={styles.heroImage}
            resizeMode="contain"
          />
        </View>
        
      <Text style={{fontSize: 50}} variant="displayMedium">Register</Text>

      <TextInput
        mode="outlined"
        placeholder="Name"
        label="Name"
        style={{ marginTop: 10 }}
        value={name}
        onChangeText={setName}
        error={isError}
      />
      <TextInput
        mode="outlined"
        placeholder="Email"
        label="Email"
        style={{ marginTop: 10 }}
        value={email}
        onChangeText={setEmail}
        error={isError}
      />
      <TextInput
        mode="outlined"
        placeholder="Password"
        label="Password"
        secureTextEntry={!showPass}
        right={
      <TextInput.Icon
            icon={showPass ? "eye" : "eye-off"}
            onPress={() => setShowPass(!showPass)}
          />
        }
        style={{ marginTop: 10 }}
        value={password}
        onChangeText={setPassword}
        error={isError}
      />
      <TextInput
        mode="outlined"
        placeholder="Re-type Password"
        label="Re-type Password"
        secureTextEntry={!showRePass}
        right={
          <TextInput.Icon
            icon={showPass ? "eye" : "eye-off"}
            onPress={() => setShowRePass(!showRePass)}
          />
        }
        style={{ marginTop: 10 }}
        value={repassword}
        onChangeText={setRepassword}
        error={isError}
      />
      <Button
        // disabled={loading}
        // loading={loading}
        icon="account-plus"
        mode="contained"
        style={{ marginTop: 10, backgroundColor:'#B11E1E' }}
        onPress={handleRegistration}
      >
        
        Register
      </Button>
      <Button
        disabled={loading}
        onPress={() => navigation.pop()}
        icon="arrow-left"
        mode="contained"
        style={{ marginTop: 10, backgroundColor:'#B11E1E' }}
      >
         Back
      </Button>
    </View>
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
    fontWeight: '400',
    color: '#9992a7',
    textAlign: 'center',
  },
  buttonText: {
    fontSize: 15,
    color: 'black',
  },
  button: {
      flexDirection: 'row',
      backgroundColor: '#deb887',
      paddingVertical: 5,
      paddingHorizontal: 5,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 12,
      margin: 10,
    },
  fade:{
    opacity: '50%',
  },
  green: {
    textDecorationColor: "green",
    color: "green",
  },
  red: {
    textDecorationColor: "red",
    color: "red"
  },
});
