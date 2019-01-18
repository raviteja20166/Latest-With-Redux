import React from 'react';
import { connect } from 'react-redux';

import { Text, View, StyleSheet, Image } from 'react-native';


class ViewDetails extends React.Component {
    render() {
        const data = this.props.data
        console.log(data)

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                <Image source={{ uri: data.user.path }} style={{width: 250, height: 250}} />
                <Text style={Styles.textStyle}>Name: {data.user.name}</Text>
                <Text style={Styles.textStyle}>Email Address: {data.user.email}</Text>
                <Text style={Styles.textStyle}>Mobile Number:{data.user.phone} </Text>

            </View>
        );
    }
}
const mapStateToProps = (state) => ({
    data: state.loginReducer
});

export default connect(mapStateToProps)(ViewDetails);

const Styles = StyleSheet.create({
    textStyle: {
        marginTop: 5,
        marginLeft: 5,
        marginRight: 5,
        height: 20,
    },
}); 
