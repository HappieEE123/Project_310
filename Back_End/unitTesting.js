// mark = "\033[92m✓\033[0m"
const { fetch } = require("node-fetch");
const { exec } = require('node:child_process');
try {
    fetch("https://api.weasoft.com/feed", {
        "headers": {
            "accept": "application/json, text/plain, */*",
            "accept-language": "en-US,en;q=0.9,zh;q=0.8,zh-CN;q=0.7,zh-TW;q=0.6",
            "sec-ch-ua": "\"Google Chrome\";v=\"107\", \"Chromium\";v=\"107\", \"Not=A?Brand\";v=\"24\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-site",
            "Referer": "https://happieee.weasoft.com/",
            "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": null,
        "method": "GET"
    }).then(() => {
        console.log("✔️   The heart beating is working! :)")
    }
    ).catch((error) => {
        console.log("🚨🚨🚨🚨")
        console.log(error)
    });
}
catch (err) {
    console.log("🚨🚨🚨🚨")
    console.log(err.message)
}


try {


    exec("curl -X 'POST' \
    'https://api.weasoft.com/post/' \
    -H 'accept: application/json' \
    -H 'Content-Type: multipart/form-data' \
    -F 'file=@1643395308348.jfif;type=image/jpeg' \
    -F 'description=test2'", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }


    })}
catch (err) {
    console.log("🚨🚨🚨🚨")
    console.log(err.message)
}   