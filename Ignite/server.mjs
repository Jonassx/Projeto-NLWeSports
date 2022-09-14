
import express from 'express'

const app = express()

//www.minhaapi.com:3333/ads

app.get('/ads', () => {
    console.log ('Acessou Ads')
})

app.listen(3333)
