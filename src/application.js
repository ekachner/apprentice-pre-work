export default class Application {

    constructor() {
        this.headers = {};
        this.token = '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';
        this.to = 'dev@arrayschool.com';
        this.subject = 'An Apprentice has submitted their test';
        this.content = {};
        this.tags = [
            'input',
            'select',
            'textarea'
        ];
    }

    get from() {
        return document.getElementById('fromEmail').value;
    }

    listen() {
        document.getElementsByTagName('form')[0].addEventListener('input', this.handleChange.bind(this));
        document.getElementById('submit').addEventListener('click', this.handleSend.bind(this));
        document.getElementById('testSubmit').addEventListener('click', this.handleTestSend.bind(this));
        document.querySelector('#modal .close').addEventListener('click', this.handleModalClose);
    }

    handleChange(e) {
        if (this.tags.indexOf(e.target.tagName.toLowerCase()) != -1) {
            this.content = Object.assign(this.content, {[e.target.name]: e.target.value});
        }
    }

    handleModalClose() {
        document.getElementById('modal').classList.add('hidden');
    }

    handleSend() {
        const content = Object.entries(this.content)
            .map(([key, value]) => `<div>${key}: ${value}</div>`)
            .join('');
        
        fetch('http://localhost:3000/submitTest', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'to': this.to,
                'subject': this.subject,
                'from': this.from,
                'content': content
            })
        })
        .then(res => {
            console.log(res.status)
            if (res.status === 200) {
                Array.from(document.getElementById('submissionForm').elements).forEach((elem) => elem.value = '');
                this.handleSendResponse(true);
            } else {
                this.handleSendResponse(false);
            }
        })
        .catch(e => console.log(e))
    }

    handleTestSend() {
        const content = Object.entries(this.content)
            .map(([key, value]) => `<div>${key}: ${value}</div>`)
            .join(''),
            modal = document.getElementById('modal'),
            message = document.querySelector('#modal .message');
        message.innerHTML = '<h2>The data in your message will be</h2>' + content;
        message.classList.add('success');
        modal.classList.remove('hidden');
    }

    handleSendResponse(success) {
        const s = success === true ? true : false;
        const modal = document.getElementById('modal');
        const message = document.querySelector('#modal .message');

        message.innerText = s ? 
            'You did it! You are one step closer to becoming an Array Apprentice' :
            'Whoops! Something went wrong. Take a look at the README.MD file in the root of this project to make sure you have followed all of the instructions';
        if (s) {
            message.classList.remove('error');
            message.classList.add('success');
        } else {
            message.classList.remove('success');
            message.classList.add('error');
        }
        modal.classList.remove('hidden');
    }
}