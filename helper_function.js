var User = require("./models/user");
var nodemailer = require('nodemailer');
module.exports.isExpired = async function(id){
    var user = User.findById(id);
    var currentDate = new Date();
    var expiryDate = user.expiryDate;
    if(expiryDate && currentDate < expiryDate){
        return false;
    }else{
        return true;
    }
}


module.exports.sendemail = async function(user, content) {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: 'bikashghll@gmail.com',
            pass: ''
        }
    });

            pass: ''
    async function main() {
        const info = await transporter.sendMail({
            from: '"Fred Foo 👻" bikshghll@gmail.com',
            to: user.email,
            subject: "Hello ✔",
            html: content,
        });

        console.log("Message sent: %s", info.messageId);
    }

    main().catch(console.error);
}