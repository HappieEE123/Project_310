// mark = "\033[92m✓\033[0m"
import fetch from "node-fetch";
import * as child from 'child_process';
try {
    fetch("https://api.weasoft.com/heartBeat", {
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
var l;
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
}).then((response) => response.json()).then((a) => {
    l = a.length
}).then(() => {

    try {
        child.exec("curl --silent -X 'POST' \
    'https://api.weasoft.com/post/' \
    -H 'accept: application/json' \
    -H 'Content-Type: multipart/form-data' \
    -F 'file=@imgs/20;type=image/jpeg' \
    -F 'description=HAHAHHAHAHAHAHAH THIS IS SO COOL COOL COOL THIS PERSON LOOKS COOL LOL'", (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                return;
            }
            console.log("✔️   Post Success:)")

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
                }).then((response) => response.json()).then((a) => {
                    console.log(a.length)
                    if (a.length = l + 1) {
                        console.log("✔️   Feed Checked!")
                    }
                    // if (a.body.includes("HAHAHHAHAHAHAHAH THIS IS SO COOL COOL COOL THIS PERSON LOOKS COOL LOL")) { console.log("✔️   The heart beating is working! :)") }
                    // else {
                    else console.log("🚨🚨🚨🚨")
                    // }
                }
                ).catch((error) => {
                    console.log("🚨🚨🚨🚨")
                    console.log(error)
                }).then(() => {
                    fetch("https://api.weasoft.com/likes", {
                        "headers": {
                            "accept": "application/json",
                            "accept-language": "en-US,en;q=0.9,zh;q=0.8,zh-CN;q=0.7,zh-TW;q=0.6",
                            "content-type": "application/json",
                            "sec-ch-ua": "\"Google Chrome\";v=\"107\", \"Chromium\";v=\"107\", \"Not=A?Brand\";v=\"24\"",
                            "sec-ch-ua-mobile": "?0",
                            "sec-ch-ua-platform": "\"Windows\"",
                            "sec-fetch-dest": "empty",
                            "sec-fetch-mode": "cors",
                            "sec-fetch-site": "same-origin",
                            "Referer": "https://api.weasoft.com/docs",
                            "Referrer-Policy": "strict-origin-when-cross-origin"
                        },
                        "body": "{\n  \"postid\": " + l + "\n}",
                        "method": "POST"
                    }).then((response) => response.json()).then((a) => {
                        console.log("✔️   Likes Send!")
                    }).then(() => {
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
                        }).then((response) => response.json()).then((a) => {
                            for (var i = 0; i < a.length; i++) {
                                if (a[i].id == l) {
                                    if (a[i].likesCount == 1) {
                                        console.log("✔️   Likes Checked!")

                                    }
                                    else {
                                        console.log("🚨🚨🚨🚨")
                                    }
                                }
                            }
                        })
                    });
                });
            }
            catch (err) {
                console.log("🚨🚨🚨🚨")
                console.log(err.message)
            }
        })
    }
    catch (err) {
        console.log("🚨🚨🚨🚨")
        console.log(err.message)
    }
})