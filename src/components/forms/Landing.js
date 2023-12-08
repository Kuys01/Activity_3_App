import { View, StyleSheet, SafeAreaView, Image, Text, TouchableOpacity, ImageBackground } from "react-native";
import React from "react";
  
  export default function Landing({ navigation }) {
    const bg =  require('../../media/me.png')
    const loginIcon = require('../../media/loginicon.png');
    const signupIcon = require('../../media/signupicon.png');

    return (

      <SafeAreaView style={styles.container}>
        <ImageBackground
        source={bg}
        style={styles.image}
        resizeMode="cover"
      >
        <View style={styles.content}>
          <View style={styles.contentHeader}>
            <Text style={styles.title2}>
              Wonderland
            </Text>
          </View>
  
          <TouchableOpacity
            onPress={() => {navigation.navigate("Login")
            }}>
            <View style={styles.button}>
                <Image source={loginIcon} style={styles.icon} />
                <Text style={styles.buttonText}>Login</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {navigation.navigate("Register")
            }}>
            <View style={styles.button}>
                <Image source={signupIcon} style={styles.icon} />
                <Text style={styles.buttonText}>Register</Text>
            </View>
          </TouchableOpacity>
        </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      justifyContent: 'center',
      width: '100%',
      height: '100%',
    },
    content: {
      flex: 1,
      justifyContent: 'space-between',
      paddingVertical: 24,
      paddingHorizontal: 24,
    },
    contentHeader: {
      paddingHorizontal: 24,
    },
    title: {
      fontSize: 28,
      fontWeight: '500',
      color: '#fff0f5',
      textAlign: 'center',
      marginBottom: 12,
      lineHeight: 80,
    },
    title2: {
      fontStyle: 'italic',
      fontSize: 20,
      fontWeight: '500',
      color: '#8b4513',
      textAlign: 'center',
      marginTop: 0,
      lineHeight: 450,
    },
    text: {
      fontSize: 15,
      lineHeight: 24,
      fontWeight: '400',
      color: '#9992a7',
      textAlign: 'center',
    },
    buttonText: {
      fontSize: 20,
      fontWeight: '500',
      color: '#fff',
    },
    button: {
        flexDirection: 'row',
        backgroundColor: '#deb887',
        paddingVertical: 15,
        paddingHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        marginBottom: 30,
      },
      icon: {
        width: 10,
        height: 15, 
        marginRight: 10, 
      },
  });
  
  
