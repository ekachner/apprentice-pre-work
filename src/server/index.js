const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');
const app = express();

sgMail.setApiKey('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');

app.use(cors({origin: 'http://localhost:9000'}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('dist'));
app.post('/submitTest', (req, res) => {
    const msg = {
        to: req.body.to,
        from: req.body.from,
        subject: req.body.subject,
        html: req.body.content
    }
    sgMail.send(msg, false, (err, cres) => {
        console.log(err);
        if (err == null) {
            res.status = 200;
            res.send();
        } else {
            res.status = 400;
            res.send();
        }
    });
});

app.listen(3033, ()=> console.log('Listening on port 3033'));