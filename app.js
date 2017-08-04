/*
    //baffuer
    var baf = new Buffer('hello', 'utf8') //convert string to utf8
    console.log(baf)
    console.log(baf.toString())
    console.log(baf.toJSON())
    console.log(baf[2]) //use baffer as a string
    console.log(baf[2].toString())
    baf.write('aa') //overide info inside buffer start from index 0
    console.log(baf.toString())

    //******************************************************************************************
    //typed arrays

    //callback
    function greet(callback){
        console.log('hello there')
        var person = {name: 'xia', age: 23}
        callback(person)  //pass data to the callback
    }
    //the function and callback are invoked
    greet(function(person){
        console.log('first callback: ')
        console.log(person.name + ' has '+person.age+' years old')
    })
*/

//******************************************************************************************
//file system: chunk->stream->readable/writable->pipe
var fs = require('fs')
var zlib = require('zlib') 

var readable = fs.createReadStream(__dirname+'/greet.txt')
var writable = fs.createWriteStream(__dirname+'/greetCopy.txt')
var compressed = fs.createWriteStream(__dirname+'/greet.txt.gz')
var gzip = zlib.createGzip() //creat transform stream

// //the way how pipe works: read chunk of data and write it
// readable.on('data', function(chunk){
//     console.log(chunk)
//     writable.write(chunk)
// })

// //source to dest
readable.pipe(writable)

//method chanining: a method returns an obj so we can keep calling more methods
//readable-writable-readable
readable.pipe(gzip).pipe(compressed)
