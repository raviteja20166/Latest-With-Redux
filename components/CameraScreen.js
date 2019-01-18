import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Camera from 'react-native-camera';
import { connect } from 'react-redux';
import * as Actions from '../Actions/ActionTypes';


class CameraScreen extends Component {

  takePicture = () => {
    console.log('capturing photo...')

    const options = {}
    
    this.camera.capture({ metadata: options })
    .then((photoData) => {
      console.log('photo', photoData, photoData.path)
      this.props.login({ path: photoData.path })
      this.props.navigation.navigate('View')

      }).catch((error) => {
        console.log(error)
      })
  }



  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam
          }}
          style={styles.view}
          aspect={Camera.constants.Aspect.fill}>
          <Text
            style={styles.capture}
            onPress={this.takePicture}>
            CAPTURE IMAGE
            </Text>
        </Camera>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  view: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: 'steelblue',
    borderRadius: 10,
    color: 'red',
    padding: 15,
    margin: 45
  }
});

const mapStateToProps = (state) => ({
  // data: state.loginReducer
  // data is user-defined property, 
});

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(
    {
      type: Actions.LOGIN,
      type:Actions.SavePhoto,
      path: user.path,
    }
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(CameraScreen);