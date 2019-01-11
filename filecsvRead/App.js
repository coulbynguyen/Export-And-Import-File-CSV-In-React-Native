import React,{Component} from 'react';
import {View,Text,TouchableOpacity,StyleSheet,Platform} from 'react-native';
const RNFS = require('react-native-fs');
const FileOpener = require('react-native-file-opener');
const SavePath = Platform.OS === 'ios' ? RNFS.DocumentDirectoryPath : RNFS.ExternalDirectoryPath;
const sampleDocFileURL = 'https://github.com/huangzuizui/react-native-file-opener/blob/master/sample/sample.doc?raw=true';
const sampleDocFilePath = SavePath + '/sample.doc';
export default class App extends Component{

    render() {
        return (
            <View style={{marginTop: 50}}>
                <TouchableOpacity>
                    <Text>OpenFile</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
