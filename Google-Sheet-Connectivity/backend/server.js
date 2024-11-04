

require('dotenv').config();
const {GOOGLE_APPLICATION_CREDENTIALS}=process.env
const { google } = require("googleapis");
 
 
const tabName = "Users";
const range = "A:M";

main().then(() => {
  console.log("Completed the job of writing and reading");
});


async function main() {
  // Generating google sheet client
  const googleSheetClient = await _getGoogleSheetClient();

  // Reading Google Sheet from a specific range
  const data = await _readGoogleSheet(process.env.googleSheetClient,process.env.sheetId,tabName,range);
  console.log(data);

  // // Adding a new row to Google Sheet
  // const dataToBeInserted = [
  //    ['11', 'rohith', 'Rohith', 'Sharma', 'Active'],
  //    ['12', 'virat', 'Virat', 'Kohli', 'Active']
  // ]
  // await _writeGoogleSheet(googleSheetClient, sheetId, tabName, range, dataToBeInserted);
}

// get the client for google sheet access
async function _getGoogleSheetClient() {
  const auth = new google.auth.GoogleAuth({
    keyFile: GOOGLE_APPLICATION_CREDENTIALS,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  const authClient = await auth.getClient();
  return google.sheets({
    version: "v4",
    auth: authClient,
  });
}

// function that will read data from the sheet
async function _readGoogleSheet(googleSheetClient, sheetId, tabName, range) {
  const res = await googleSheetClient.spreadsheets.values.get({
    spreadsheetId: sheetId,
    range: `${tabName}!${range}`,
  });
  return res.data.values;
}

// // function that will write the data to google sheet
// async function _writeGoogleSheet(
//   googleSheetClient,
//   sheetId,
//   tabName,
//   range,
//   data
// ) {
//   await googleSheetClient.spreadsheets.values.append({
//     spreadsheetId: sheetId,
//     range: `${tabName}!${range}`,
//     valueInputOption: "USER_ENTERED",
//     insertDataOption: "INSERT_ROWS",
//     resource: {
//       majorDimension: "ROWS",
//       values: data,
//     },
//   });
// }
