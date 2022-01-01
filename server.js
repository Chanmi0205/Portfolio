const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
    console.log('안녕하세요')
})

app.get('/apple', (req, res) => {
    res.send('apple 페이지 입니다.')
})



app.listen(8080, () => {
    console.log('8080포트에서 서버 실행')
})