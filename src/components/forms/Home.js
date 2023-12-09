import { View, StyleSheet, SafeAreaView, Image, Text, ImageBackground } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
  
  export default function Home({ navigation }) {
    const logouri =  require('../../media/logo.png')
    

    const GifComponent = () => {
        return (
          <View style={styles.container}>
          </View>
        );
      };

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.hero}>
          <ImageBackground
            source={logouri}
            style={styles.heroImage}
            resizeMode="cover"
          />
        </View>
        <View style={styles.content}>
        <GifComponent />
        </View>
        <Button style={styles.button}  onPress={() => navigation.navigate("Login")}>Logout</Button>
      </SafeAreaView>
    );
  }
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    hero: {
      backgroundColor: '#d8dffe',
      margin: 0,
      borderRadius: 16,
      padding: 16,
      height: "80%",
      width: "100%",
      justifyContent: "center"
    },
    heroImage: {
      width: '100%',
      borderRadius: 10,
      height: "100%"
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
      color: '#281b52',
      textAlign: 'center',
      marginBottom: 12,
      lineHeight: 40,
    },
    appName: {
      backgroundColor: '#C495F0',
      borderRadius: 50,
      transform: [
        {
          rotate: '-20deg',
        },
      ],
      paddingHorizontal: 6,
    },
    appNameText: {
      fontSize: 32,
      fontWeight: '700',
      color: 'black',
      textAlign : "justify"
    },
    button: {
        flexDirection: 'row',
        backgroundColor: '#deb887',
        paddingVertical: 15,
        paddingHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        marginBottom: 20,
      },
      icon: {
        width: 10,
        height: 15, 
        marginRight: 10, 
      },
      gif: {
        width: "100%",
        height:"90%",
        alignItems: "center"
      }
    });