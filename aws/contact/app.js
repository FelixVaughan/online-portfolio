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
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "OPTIONS,POST",
  };

  if (event.requestContext.http.method === "OPTIONS") {
    return {
      statusCode: 200,
      headers: headers,
      body: JSON.stringify({}),
    };
  }

  try {
    const formData = JSON.parse(event.body);
    let emailBody = "No message specified.";

    if (formData.message && formData.message.length > 0) {
      emailBody = formData.message;
    }

    const emailContent =
      "New mail from " +
      formData.firstName +
      " " +
      formData.lastName +
      ",\n" +
      "Company: " +
      formData.company +
      "\n" +
      "phone: " +
      formData.phone +
      "\n" +
      "email: " +
      formData.email +
      "\n\n" +
      emailBody;

    const msg = {
      to: process.env.EMAIL,
      from: process.env.EMAIL,
      subject: "Portfolio Contact Message",
      text: emailContent,
    };

    await sgMail.send(msg);
    return {
      statusCode: 200,
      headers: headers,
      body: JSON.stringify({ message: "Email sent successfully" }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      headers: headers,
      body: JSON.stringify({ message: "An error occurred", event }),
    };
  }
};
