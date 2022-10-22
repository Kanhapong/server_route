const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Yo!')
})

app.get('/getname', (req, res) => {
    res.send('Kanhapong kanhakul')
  })

  app.get('/getprofile', (req, res) => {
    let data = {
        name: 'Kanhapong Kanhakul',
        age: '19',
         
    }
    res.send(data)
  })

  app.get('/getabout', (req, res) => {
    let data = {
        name: 'Kanhapong Kanhakul',
        age: '19',
        email: 'kanhapong.kanh@bumail.net',
        address: 'Nonthaburi 11110',
         
    }
    res.send(data)
  })
  
  app.get('/getproject', (req, res) => {
    let data = {
        project_name: 'Kanhapong Kanhakul',
        project_description: 'Tom and Jerry',
        project_link: 'https://www.youtube.com/watch?v=t0Q2otsqC4I',
         
    }
    res.send(data)
  })

  app.get('/getcontact', (req, res) => {
    let data = {
        address: 'Nonthaburi 11110',
        email: 'kanhapong.kanh@bumail.net',
        phone_number: '0830832715',
         
    }
    res.send(data)
  })

app.listen(4444, () => {
  console.log(`Example app listening on port ${4444}`)
})