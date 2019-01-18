import React, { Component } from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';





class FrontEnd extends Component {


  render() {
    const click = () => this.props.navigation && this.props.navigation.navigate('New');
    
    return (

      <ImageBackground source={require('../assets/backimage.jpg')}
        style={styles.ImageBackground}>
        <ScrollView style={styles.container}>
        
          <Text style={styles.TextStyle}>Hello!</Text>
          <Text style={{ margin: 30, fontSize: 18, fontWeight: 'normal', color: 'white' }}>What brings you here?</Text>


          <View
            style={styles.container1}>
            <TouchableOpacity onPress={click}
              style={styles.ButtonStyle}>
              <Image source={require('../assets/ic_button_interview.png')} style={styles.Image} />


              <Text style={{ fontWeight: "bold", fontSize: 18 }}>Interview </Text>
              <Text style={{ fontWeight: "normal", fontSize: 10 }}>Wish you the best of luck </Text>
            </TouchableOpacity>


            <TouchableOpacity onPress={click}
              style={styles.ButtonStyle}>
              <Image source={require('../assets/ic_button_delivery.png')} style={styles.Image} />


              <Text style={{ fontWeight: "bold", fontSize: 18 }}>Delivery </Text>
              <Text style={{ fontWeight: "normal", fontSize: 10 }}>Ah! Finally, you’re here </Text>

            </TouchableOpacity>

          </View>

          <View
            style={styles.container1}>
            <TouchableOpacity onPress={click}
              style={styles.ButtonStyle}>
              <Image source={require('../assets/ic_button_business.png')} style={styles.Image} />


              <Text style={{ fontWeight: "bold", fontSize: 18 }}> Business </Text>
              <Text style={{ fontWeight: "normal", fontSize: 10 }}>Ah! Finally, you’re here </Text>
            </TouchableOpacity>



            <TouchableOpacity onPress={click}
              style={styles.ButtonStyle}>
              <Image source={require('../assets/noun.png')} style={styles.Image} />



              <Text style={{ fontWeight: "bold", fontSize: 18 }}> Personal </Text>
              <Text style={{ fontWeight: "normal", fontSize: 10 }}>Wish you the best of luck </Text>
            </TouchableOpacity>
          </View>


        </ScrollView>
      </ImageBackground>

    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20
  },

  container1: {
    flexDirection: 'row',

  },


  ImageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: 'transparent'


  },
  TextStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 60,
    margin: 30,
    top: 50,

  },
  ButtonStyle: {

    // height: 120,
    // width: 160,
    flex: 0.5,
    margin: 10,
    padding:20,
    backgroundColor: 'white',
    borderRadius: 10,
    fontWeight: 'normal',
    


  },

  Image: {
    height: 50,
    width: 50,


  }



});

export default FrontEnd;
