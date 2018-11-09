import React,{Component} from 'react';
import {View,Text,TouchableOpacity,StyleSheet,Platform} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
// import {DocumentPicker,DocumentPickerUtil} from './Ha';
//import { DocumentPicker, DocumentPickerUtil } from 'react-native-document-picker';
//import { DocumentPicker, DocumentPickerUtil } from 'react-native-document-picker';
// //const SavePath = Platform.OS === 'ios' ? RNFS.DocumentDirectoryPath : RNFS.ExternalDirectoryPath;
// //const sampleDocFilePath = SavePath + '/sample.doc';

export default class App extends Component{
  openFile(){
      //     DocumentPicker.show({
      //   filetype: [DocumentPickerUtil.allFiles()],
      // },(error,res) => {
      //   // Android
      //   console.log(
      //      res.uri,
      //      res.type, // mime type
      //      res.fileName,
      //      res.fileSize
      //   );
      // });
  }
    render() {
        return (
            <View style={{marginTop: 50}}>
                <TouchableOpacity onPress={() =>{this.openFile()}}>
                    <Text>OpenFile</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
