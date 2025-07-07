require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const githubData = {
  "login": "pallavkumar2003",
  "id": 127095157,
  "node_id": "U_kgDOB5NRdQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/127095157?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/pallavkumar2003",
  "html_url": "https://github.com/pallavkumar2003",
  "followers_url": "https://api.github.com/users/pallavkumar2003/followers",
  "following_url": "https://api.github.com/users/pallavkumar2003/following{/other_user}",
  "gists_url": "https://api.github.com/users/pallavkumar2003/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/pallavkumar2003/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/pallavkumar2003/subscriptions",
  "organizations_url": "https://api.github.com/users/pallavkumar2003/orgs",
  "repos_url": "https://api.github.com/users/pallavkumar2003/repos",
  "events_url": "https://api.github.com/users/pallavkumar2003/events{/privacy}",
  "received_events_url": "https://api.github.com/users/pallavkumar2003/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 13,
  "public_gists": 0,
  "followers": 0,
  "following": 3,
  "created_at": "2023-03-06T09:32:37Z",
  "updated_at": "2025-06-21T19:17:22Z"
}
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/pallav', (req, res) =>{
    res.send('Hello Pallav!')
})
app.get('/palla', (req, res) =>{
    res.send('Hello Pallav!')
})
app.get('/sher', (req, res) =>{
    res.send('<h1>Hello Sher!</h1>')
})
app.get('/github', (req, res) =>{
    res.json(githubData)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
