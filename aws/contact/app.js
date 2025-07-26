const { SESClient, SendEmailCommand } = require("@aws-sdk/client-ses");
require("dotenv").config();

const sesClient = new SESClient({ region: "us-east-1" });

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

  console.log("Event:", JSON.stringify(event, null, 2));

  // Handle OPTIONS request for CORS
  if (event.requestContext?.http?.method === "OPTIONS" || event.httpMethod === "OPTIONS") {
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

    const sendEmailCommand = new SendEmailCommand({
      Destination: {
        ToAddresses: [process.env.EMAIL]
      },
      Message: {
        Body: {
          Text: {
            Data: emailContent,
            Charset: "UTF-8"
          }
        },
        Subject: {
          Data: "Portfolio Contact Message",
          Charset: "UTF-8"
        }
      },
      Source: process.env.EMAIL, // Must be verified in SES
      ReplyToAddresses: [formData.email]
    });

    await sesClient.send(sendEmailCommand);
    console.log("Email sent successfully");
    
    return {
      statusCode: 200,
      headers: headers,
      body: JSON.stringify({ message: "Email sent successfully" }),
    };
  } catch (error) {
    console.error(`SES Error: ${error.message}`);
    console.error(`Error details:`, error);
    return {
      statusCode: 500,
      headers: headers,
      body: JSON.stringify({ 
        message: "Email service temporarily unavailable",
        error: error.message 
      }),
    };
  }
};