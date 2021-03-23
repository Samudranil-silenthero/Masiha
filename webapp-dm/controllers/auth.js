const dotenv = require('dotenv');
dotenv.config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

exports.phone_signup = async (req, res) => {
    try {
        console.log(req.body);
        const data = await client.verify.services(process.env.TWILIO_SERVICE_ID).verifications.create({
            to: `+91${req.body.phone}`,
            channel: 'sms'
        });

        if (data.status === 'pending') {
            res.json({ success: 'Please check your inbox for OTP!' });
        } else {
            return res.json({ error: 'Sorry! Please input a valid phone number!' });
        }
    } catch (err) {
        console.log(err);
        return res.json({ error: 'Some error occured!!!', err });
    }
};