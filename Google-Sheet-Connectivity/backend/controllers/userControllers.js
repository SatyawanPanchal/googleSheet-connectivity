import { google } from "googleapis";
import emailjs from "@emailjs/browser";
const serviceAccountKeyFile = "./curd-439402-98c6345a31dc.json";
const sheetId = "1a1w34jKPym04TYuvOfw1U0-QDt_2dDQnym9yZbUAEkg";
const tabName = "Users";
const range = "A:M";

const getDataFromTable = async (req, res) => {
  console.log("request is properly sent now you can proce");

  main().then(() => {
    console.log("Completed the job of writing and reading");
  });

  async function main() {
    try {
      // Generating google sheet client
      const googleSheetClient = await _getGoogleSheetClient();

      // Reading Google Sheet from a specific range
      const dataFromTable = await _readGoogleSheet(
        googleSheetClient,
        sheetId,
        tabName,
        range
      );
      //  console.log(dataFromTable);
      res.json({
        dataFromTable,
        success: true,
        message: "data is recieved",
      });
    } catch (error) {
      res.json({
        success: false,
        message: error.message + "is the error message",
      });
    }
  }

  // get the client for google sheet access
  async function _getGoogleSheetClient() {
    const auth = new google.auth.GoogleAuth({
      keyFile: serviceAccountKeyFile,
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
};



export { getDataFromTable };
