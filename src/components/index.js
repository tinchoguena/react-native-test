import React, { Component } from 'react';
import {StyleSheet,View,Text,Button, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const Stack = createStackNavigator();

function AppStack() {
    const  options={
            headerStyle: {
            backgroundColor: '#1485FE',
        },
        headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold',
        },
        headerRight: ()=> {
            return ( <Image
                style={styles.tinyLogo}
                source={require('../../assets/icon-white.png')}
            />)
        }
    };
    return (
        <Stack.Navigator>
            <Stack.Screen  name="Feed"  options={options}  component={FeedScreen} />
            <Stack.Screen name="Photos" options={options} component={PhotoScreen} />
        </Stack.Navigator>
    );
}

function PhotoScreen({ navigation }) {
    // const { heroes } = this.props;
    return (
        <View style={styles.container}>
            <Text>Super Hero Photos!</Text>
        </View>
    );
}
function FeedScreen({ navigation }) {

    return (
        <View style={styles.container}>
            <Text>Welcome!</Text>
            <Button
                title="View Super Hero photos"
                onPress={() => navigation.navigate('Photos')}
            />
        </View>
    );
}

class PhotoApp extends Component {
    render() {
        return (
            <NavigationContainer>
                <AppStack/>
            </NavigationContainer>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    tinyLogo: {
        width: 40,
        height: 40,
        right:15
    }
});

const mapStateToProps = state => ({
    heroes: state.heroes,
});

const ActionCreators = Object.assign(
    {},

);
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoApp)
