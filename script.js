const { exec } = require('child_process');

exec('git log', (err, stdout, stderr) => {
    if (err) {
      console.log('Error executing the command')
      return;
    }
    logArray = stdout.split("commit ")
    authorMessageArray = logArray.map( logEntry => {

      let author = logEntry.split("\n")[1]
      let message = logEntry.split("\n")[4]

      let test = 'string'
      test.sub
      // author.indexOf('<')

      if (author && message){
        if (author.startsWith('Author: ')){
          author = author.substr(8)
        }
      }
     
      //author.trim()
      //message.trim()
      return [author, message]
    })
    
    // output
    console.log(authorMessageArray[1]);
    //console.log(`stderr: ${stdout}`);
  });

//Adam Roben (2):
//     Add a test that shows that #309 is fixed
//     Make tests pass in phantomjs
//
//Albert Casademont (1):
//     Replace the bind() and unbind() aliases for the on() and off() functions. This is done in order to leverage jquery custom builds without the event-alias module
//