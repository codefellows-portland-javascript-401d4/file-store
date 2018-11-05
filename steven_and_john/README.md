## File storing
- Pass a Main Character object to the mainCharacter storeMC function. 
The main character would be from a science fiction or fantasy novel (or series of novels). The data should 
contain a name (which will be used to identify the file), character type, their location, profession and
number of books in which they are found.

- An identifier for the file is returned from the storeMC call. That should be kept and used for 
retrieving the file again.

- Use the character's identifier with the mainCharacter getMC function to retrieve that specific file from 
storage and receive the original data object in return. 

- Also, all stored objects can be obtained by calling the mainCharacter getAllSortedMC function. This will 
return all the stored objects sorted into ascending alphabetical order.

# NOTE: Files will be stored to a directory called "data" in your current file location.

# Run time dependencies:
- node.js
- mkdirp package from npm
