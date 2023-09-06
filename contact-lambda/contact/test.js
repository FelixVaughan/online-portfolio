const AWS = require("aws-sdk");
const lambda = new AWS.Lambda({ region: "us-east-1" });

const testEvent = require("../events/event.json"); // Load the test event JSON

const params = {
  FunctionName: "handler", // Replace with your Lambda function's name
  Payload: JSON.stringify(testEvent),
};

lambda.invoke(params, (err, data) => {
  if (err) {
    console.error("Error:", err);
  } else {
    const result = JSON.parse(data.Payload);
    console.log("Result:", result);
  }
});
