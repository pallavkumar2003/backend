// require('dotenv').config()
//const express = require('express')
import dotenv from 'dotenv'
import express from 'express'
dotenv.config()
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
app.get('/api/jokes', (req, res) => {
  const jokes = [
  {
    "id": 1,
    "title": "Why did the scarecrow win an award?",
    "content": "Because he was outstanding in his field!"
  },
  {
    "id": 2,
    "title": "Parallel lines",
    "content": "Parallel lines have so much in common… It’s a shame they’ll never meet."
  },
  {
    "id": 3,
    "title": "The restaurant on the moon",
    "content": "Great food, no atmosphere."
  },
  {
    "id": 4,
    "title": "The elevator joke",
    "content": "I used to hate elevators, but I’ve started taking steps to avoid them."
  },
  {
    "id": 5,
    "title": "Time flies",
    "content": "Time flies like an arrow. Fruit flies like a banana."
  },
  {
    "id": 6,
    "title": "Toilet paper dilemma",
    "content": "Why don’t toilet paper rolls ever win at poker? They always fold!"
  },
  {
    "id": 7,
    "title": "The skeleton at the party",
    "content": "Why didn’t the skeleton go to the party? He had no body to go with."
  },
  {
    "id": 8,
    "title": "Math book's problem",
    "content": "Why was the math book sad? It had too many problems."
  },
  {
    "id": 9,
    "title": "The broken pencil",
    "content": "I tried writing a joke about a broken pencil, but it was pointless."
  },
  {
    "id": 10,
    "title": "The computer’s snack",
    "content": "What does a computer eat for a snack? Microchips!"
  }
]
  res.json(jokes)
})
app.get('/github', (req, res) =>{
    res.json(githubData)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
