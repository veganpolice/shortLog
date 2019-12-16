const { exec } = require('child_process');

exec('git log', (err, stdout, stderr) => {
    if (err) {
      console.log('Error executing the command')
      return;
    }

    // splits log into array of commits
    const logArray = stdout.split("commit ")

    const authorMessageArray = logArray.map( logEntry => {

      let author = ''
      let message = ''

      const logEntryArray = logEntry.split("\n")

      if(logEntryArray[1]){
        if(logEntryArray[1].startsWith("Author: ")){
          author = logEntryArray[1].substr(8).split(" <")[0]
          message = logEntryArray[4]
        } else if (logEntryArray[2].startsWith("Author: ")){
          author = logEntryArray[2].substr(8).split(" <")[0]
          message = logEntryArray[5]
        }
      }
      return [author, message]
    })
    
    console.log(authorMessageArray)

  });

//Adam Roben (2):
//     Add a test that shows that #309 is fixed
//     Make tests pass in phantomjs
//
//Albert Casademont (1):
//     Replace the bind() and unbind() aliases for the on() and off() functions. This is done in order to leverage jquery custom builds without the event-alias module
//