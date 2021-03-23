
const mongoose = require('mongoose');
const User = mongoose.model('User');

const client = require('twilio')(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);

exports.getCode = async (req, res) => {


    const phone = req.query.phonenumber;

    const userExists = await User.findOne({
        phone,
    });
    if(userExists) {
        res.send({
            valid: true,
            message: "A user with the same phone number already exists."
        });
    } else {
        client
            .verify
            .services(process.env.VERIFY_SERVICE_SID)
            .verifications
            .create({
                to: `+${req.query.phonenumber}`,
                channel: req.query.channel
            })
            .then(data => {
                res.status(200).send({
                    valid: data.valid,
                    message: `OTP sent to phone number + ${phone}.`
                });
            })
    }

};

exports.verifyCode = async (req, res) => {
    client
        .verify
        .services(process.env.VERIFY_SERVICE_SID)
        .verificationChecks
        .create({
            to: `+${req.query.phonenumber}`,
            code: req.query.code
        })
        .then(data => {
            res.status(200).send({
                valid: data.valid
            });
        });
};