/**
 * Created by dev on 17-10-12.
 */
import React from 'react';
import {
    Text,
    View,
    TextInput
} from 'react-native';

import {FormLabel,FormInput} from 'react-native-elements';

export default class TakeInScreen extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text>take in forms</Text>
                <View>
                    <FormInput/>
                </View>
                <View>
                    <FormInput/>
                </View>
                <View>
                    <FormInput/>
                    <FormInput/>
                    <FormInput/>
                </View>
            </View>
        );
    }
}