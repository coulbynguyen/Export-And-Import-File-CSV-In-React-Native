import React,{Component} from 'react';
import {View,Text,TouchableOpacity,WebView} from 'react-native';

export default class App extends Component{

    render() {
        return (
            <View style={styles.container}>
                {!this.state.imageLoaded && (
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.getSampleImage.bind(this)}>
                        {this.state.imageLoading && (
                            <ProgressIndicator />
                        )}
                        <Text>get image file </Text>
                    </TouchableOpacity>
                )}
                {this.state.imageLoaded && (
                    <TouchableOpacity
                        style={[styles.button, styles.buttonOrangeBorder]}
                        onPress={this.openSampleImage.bind(this)}>
                        <Text style={styles.textColor}>open image file</Text>
                    </TouchableOpacity>
                )}
                {!this.state.docLoaded && (
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.getSampleDoc.bind(this)}>
                        {this.state.docLoading && (
                            <ProgressIndicator />
                        )}
                        <Text>get doc file {this.state.docLoadedPercentage}</Text>
                    </TouchableOpacity>
                )}
                {this.state.docLoaded && (
                    <TouchableOpacity
                        style={[styles.button, styles.buttonOrangeBorder]}
                        onPress={this.openSampleDoc.bind(this)}>
                        <Text style={styles.textColor}>open doc file</Text>
                    </TouchableOpacity>
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    button: {
        padding: 10,
        borderRadius: 5,
        margin: 10,
        borderWidth: 1,
        borderColor: '#333333',
    },
    buttonOrangeBorder: {
        borderColor: '#ff6600'
    },
    textColor: {
        color: '#ff6600'
    }
});