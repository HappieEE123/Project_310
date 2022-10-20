import axios from 'axios';
import { exec } from 'child_process';
const path = "~/Project_310/Back_End/run.sh";

setInterval(async function () {
  await axios.get('https://api.weasoft.com/heartBeat')
    .then(function (response) {
      console.log("The server is up and running :D | timestamp: " + Date.now());
      return response.status;
    })
    .catch(function (error) {
      console.log("The server is down D: | timestamp: " + Date.now());
      exec("nohup bash " + path + " &", (error, stdout, stderr) => {
        if (error) {
          console.log(`error: ${error.message}`);
          return;
        }
        if (stderr) {
          console.log(`stderr: ${stderr}`);
          return;
        }
        console.log(`stdout: ${stdout}`);
      });
    });
}, 120 * 1000);
