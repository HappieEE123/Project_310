# User Auth Testing
This is an extenal library made by myself (github.com/weathon/JWT)
![https://api.weasoft.com/imgs/45](https://api.weasoft.com/imgs/45)
## Test for Issuing JWT token
For each test case, a random username was generated and used to issue the token. Then we use the get username function to get the username. If the two usernames are matched, the test case is passed.
## Testing for expired issuing
For each test case, we generated a token with expiring date before the current date. If the get username function reject this token, the test case is passed.
## Test for forged JWT 1
For this test case, the signature part of the token was changed. This should results in ForgeJWT error. If the get username function throw this error, the case is passed.
## Test for forged JWT 2
For this case, we replace the sig from Token A to Token B. If the get username function reject this token, the case is passed
## Test for forged JWT 3/4
For this case, we generated another sig with a different key/secrect. If the get username function reject this token, the case is passed
## Test for forged JWT 5
For this case, we generated a token, then we modified the time in the tokwn. This should invaild the token as the sig won't match. If the get username function reject this token, the case is passed

## Regular login Testing
For each case, a random username and password was generated and are used to sign up an account. Then these accounts are used to login. If login successes, the case is passed.
## Nonexistent Login Testing
For each case, a random nonexistent username was used to login. If login failedm the case is passed.
## Wrong password login 
For each case, we tested to login with wrong password. If login failedm the case is passed.
# Main App API Testing
![https://api.weasoft.com/imgs/46](https://api.weasoft.com/imgs/46)
This image was hosted on our own app.
## Test for heart beat
This test will send a request to the heartbeat api, if the server is running, it should return 200. If the return code is 200, the case is passed.
## Test for post
This test will send a post with an image to the api, if the server return OK without error the case is passed.
## Test for Feed
This test will send request to feed, if the server return OK without error AND the the feed increased one compared with the feed before last case, this case is passed.
## Test for like send
This test will send a post to the likes api, this should increase the like counts by 1 to the post id. If the server return OK without error the case is passed.
## Likes count checking
This test will send request to feed, if the server return OK without error AND the post id sent in the last case has one more likes, this case is passed.
