import React,{Component} from 'react';
import {View,Text,TouchableOpacity,WebView} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import {firebaseApp} from './component/Firebaseconfig';
 const storage = firebaseApp.storage();
const Blob = RNFetchBlob.polyfill.Blob
const fs = RNFetchBlob.fs;
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
window.Blob = Blob

const ReadFilesr = () =>{
    return new Promise((resolve,reject) =>{
        const dirs = RNFetchBlob.fs.dirs;
        const pathToWrite = `${dirs.DocumentDir}/data.csv`;
        const sessinID = new Date().getTime();
        const nameref = storage.ref('file').child(`${sessinID}.csv`);
        let uploadBlob = null
        RNFetchBlob.fs.readFile(pathToWrite, 'utf8')
            .then((data) => {
              return Blob.build(data,{type:'text'})
            })
            .then((blob) =>{
                uploadBlob = blob
                return nameref.put(blob,{contentType:`text/csv`})
            })
            .then(() => {
                uploadBlob.close()
                return nameref.getDownloadURL()
            })
            .then((url) => {
                // URL of the image uploaded on Firebase storage
                console.log(url);

            })
            .catch((error) => {
                console.log(error);

            })
    })
}
export default class App extends Component{
    constructor(props){
        super(props);

    }
    Uploadfile(){
        const values = [
            ['1', 'Nguyen A','7','8','A@gmail.com','https://i.pinimg.com/originals/dc/6e/77/dc6e7749f37b315d6979f59df7a00b2c.jpg'],
            ['2', 'Nguyen B','3','4','B@gmail.com','https://i.pinimg.com/originals/dc/6e/77/dc6e7749f37b315d6979f59df7a00b2c.jpg'],
            ['3', 'Nguyen C','5','9','C@gmail.com','https://i.pinimg.com/originals/dc/6e/77/dc6e7749f37b315d6979f59df7a00b2c.jpg'],
            ['4', 'Nguyen D','3','5','D@gmail.com','https://i.pinimg.com/originals/dc/6e/77/dc6e7749f37b315d6979f59df7a00b2c.jpg'],
            ['1', 'Nguyen A','7','8','A@gmail.com','https://i.pinimg.com/originals/dc/6e/77/dc6e7749f37b315d6979f59df7a00b2c.jpg'],
            ['2', 'Nguyen B','3','4','B@gmail.com','https://i.pinimg.com/originals/dc/6e/77/dc6e7749f37b315d6979f59df7a00b2c.jpg'],
            ['3', 'Nguyen C','5','9','C@gmail.com','https://i.pinimg.com/originals/dc/6e/77/dc6e7749f37b315d6979f59df7a00b2c.jpg'],
            ['4', 'Nguyen D','3','5','D@gmail.com','https://i.pinimg.com/originals/dc/6e/77/dc6e7749f37b315d6979f59df7a00b2c.jpg'],
        ];
        const val =[
            {
                id:"1",
                name:"src",
                age:"19"
            },
            {
                id:"2",
                name:"nice",
                age:"20"
            },
            {
                id:"3",
                name:"thanh",
                age:"26"
            },
            {
                id:"4",
                name:"nhoc",
                age:"18"
            }
        ]
// construct csvString
//         var csvRow=[];
//         var A = [['id','name']];
//         for(var item=0;item<val.length;item++){
//             A.push([item,val[item].name])
//         }
//         for (var i=0;i<A.length;i++){
//             csvRow.push(A[i].join(","))
//         }
//        var csvString = csvRow.join("\n");
//         console.log(csvString);
        const headerString = 'id,name,count,countbegin,email,image\n';
        // const rowString = values.map(d => `${d[0]},${d[1]}\n`).join('');
        const rowString = values.map(d => `${d[0]},${d[1]},${d[2]},${d[3]},${d[4]},${d[5]}\n`).join('');
        // val.map(d =>console.log(d))
        // values.map(da =>console.log(da))
        const csvString = `${headerString}${rowString}`;
        //console.log(csvString);
        const dirs = RNFetchBlob.fs.dirs;
// write the current list of answers to a local csv file
        const pathToWrite = `${dirs.DocumentDir}/data.csv`;
        //alert(pathToWrite);
        console.log('pathToWrite', pathToWrite);
//pathToWrite /storage/emulated/0/Download/data.csv
        RNFetchBlob.fs
            .writeFile(pathToWrite, csvString, 'utf8')
            .then(() => {
                console.log(`wrote file ${pathToWrite}`);
                // wrote file /storage/emulated/0/Download/data.csv
                const sessinID = new Date().getTime();
                const nameref = storage.ref('file').child(`${sessinID}.csv`);
                RNFetchBlob.fs.readFile(pathToWrite, 'utf8')
                    .then((data) => {
                        return Blob.build(data,{type:'text'})
                    })
                    .then((blob) =>{
                        return nameref.put(blob,{contentType:`text/csv`})
                    })
            })
            .catch(error => console.error(error));
    }
    ReadFile(){
        ReadFilesr();
        // abc =[];
        // const dirs = RNFetchBlob.fs.dirs;
        // const pathToWrite = `${dirs.DocumentDir}/data.csv`;
        // RNFetchBlob.fs.readFile(pathToWrite, 'utf8')
        //     .then((data) => {
        //         var sessionId = new Date().getDate();
        //         var namef = storage.ref('file').child(`${sessionId}.csv`);
        //         namef.put(data,{contentType:'csv'})
        //             .then(data =>console.log(data))
        //             .catch(err =>console.log(err))
        //
        //         lines =data.split('\n');
        //         var result = []
        //         var headers = lines[0].split(",")
        //         lines.map(function (line, indexLine) {
        //             if(indexLine<1) return
        //             var obj = {}
        //             var currentline = line.split(",")
        //             headers.map(function (header,indexHeader) {
        //                 obj[header] = currentline[indexHeader]
        //             })
        //             result.push(obj)
        //         })
        //         result.pop();
        //         console.log(result)
        //         return result;
        //
        //     })
    }
    Dowload(){
        let dirs = RNFetchBlob.fs.dirs;
        RNFetchBlob
            .config({
                // response data will be saved to this path if it has access right.
                path : dirs.CacheDir + '/path-to-file.jpg'
            })
            .fetch('GET', 'https://images.kienthuc.net.vn/zoom/500/Uploaded/ctvgiaitri/2016_02_18/TRieu%20Le%20Dinh/trieu-1_UQIT.jpg', {
                //some headers ..
            })
            .then((res) => {
                // the path should be dirs.DocumentDir + 'path-to-file.anything'
                console.log('The file saved to ', res.path())
            })
    }
    extention(filename){
        return (/[.]/.exec(filename)) ? /[^.]+$/.exec(filename) : undefined;
    }
     openSampleDoc() {


    }
    render() {
        return (
           <View style={{marginTop: 200}}>
               <TouchableOpacity onPress={() =>{this.Uploadfile()}}>
                   <Text>Up</Text>
               </TouchableOpacity>
               <TouchableOpacity onPress={() =>{this.ReadFile()}}>
                   <Text>Read</Text>
               </TouchableOpacity>
               <TouchableOpacity onPress={() =>{this.Dowload()}}>
                   <Text>dowload</Text>
               </TouchableOpacity>
               <TouchableOpacity onPress={() =>{this.openSampleDoc()}}>
                   <Text>open</Text>
               </TouchableOpacity>

           </View>
        );
    }
}
