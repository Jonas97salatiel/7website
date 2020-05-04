const express = require('express')
const cors = require('cors')
const nodemailer = require('nodemailer')

const app = express()

app.use(cors())
app.use(express.json())

app.post('/', async (req, res) => {
    const { name, phone, email, description } = req.body

    let now = new Date

    let localDate = '0' + now.getDate() + '/' + (now.getMonth() + 1) + '/' + now.getFullYear() + ' ' + now.getHours() +
    ':' + now.getMinutes() + ':' + now.getSeconds()

    const transporter = nodemailer.createTransport({
        host: 'smtp.umbler.com',
        port: 587,
        secure: false,
        auth: {
            user: 'exemplo@vitorrocha.com',
            pass: 'exemplo123'
        }
    })

    const mailOptions = {
        from: 'exemplo@vitorrocha.com',
        to: '7sightjr@gmail.com',
        subject: 'Teste do formulario',
        text: 'UM CLIENTE ENTROU EM CONTATO COM VOCÊ' + '\n' + 
        'Nome: ' + name + '\n' +
        'Telefone: ' + phone + '\n' +
        'Email: ' + email + '\n' +
        'Descrição: ' + description,
        date: localDate
    }

    transporter.sendMail(mailOptions, (err, info) => {
        if(err) {
            return console.log(err)
        }
        console.log('Envio feito com sucesso.', info)
    })
    return res.json({ name, phone, email, description });
})

app.listen(3333)