const AWS = require("aws-sdk");
const sgMail = require("@sendgrid/mail");

AWS.config.update({ region: "us-east-1" });
require("dotenv").config();
sgMail.setApiKey(process.env.SENDGRID_KEY);
/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */
exports.handler = async (event, context) => {
  try {
    // Parse data from the contact form (replace this with your form data parsing logic)
    const formData = JSON.parse(event.body);

    // SendGrid email details
    const msg = {
      to: process.env.EMAIL,
      from: process.env.EMAIL,
      subject: "Portfolio Contact Message",
      text: JSON.stringify(formData),
    };

    // Send email using SendGrid
    await sgMail.send(msg);
    console.log("success");
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: "Email sent successfully" }),
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: "An error occured" }),
    };
  }
};
