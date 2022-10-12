### getMyFeed   GET
- userID, auth, pageID, emotion
`[ {postID, user, UNIXtime, useravator(url), image(url), Happiness, liesCount, Comments count, description} ]`

### Post POST
- userID, auth, Pic, description
`success: boolean`

### Like POST
- userID, auth, postID
`success: boolean`

### getComments GET
- postID, 
```
[
  userName, useravatar, text, likes
]
```

### Comment POST
- userId, auth, commentContent, postID
`success: boolean`


### getHappiness POST
- Pic
`float`

### deletePost POST
- userId, auth, postID (check the posi is belong to the user)
`success: boolean`

### getLikesHistory
- userId, auth
```
[
type: "comment" | "likes",
usserID, useravatar, text(id type==comment)
]
```

### Login POST
- userID, password
`success: boolean; setCookie JWT`

### signUp  POST
- userID, email, password
`success: boolean`

### verf POST
- token
`success: boolean`

### commentlikes POST
- userId, auth, postID
`success: boolean`
