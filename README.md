This is an app in which you can store, and retrieve information about elements.
Development of the app depends on eslint, mocha, and chai, and is developed in node.js

Collaborators: Mugsy Carter and Tim Combs

[License](./LICENSE.md)

This app is to be used in the terminal.
 
Storing

store.saveFile(obj, newFolderName, cb);
    //this function call will create a directory, take in an object or array, and save each    object as json within the directory as a file.

        example call (creates elements dir containing elements files):
            store.saveFile(elements, 'elements', function(){});




Retrieving

get.findFiles(nameArray, callback);
    //this function will find multiple files in the elements folder and log their contents to the console.

        example call (logs the Hydrogen and Lithium info to the server):
            get.findFiles(['Hydrogen', 'Lithium', function(){});

        example call (logs the Helium info to the server):
            get.findFiles(['Helium'], function(){});


get.findAllFiles = function(directoryName){
    //this function finds all the files in a directory and logs their info to the console.

        example call (finds all the files in the elements folder and logs their info to the console)
            get.findAllFiles(elements);
