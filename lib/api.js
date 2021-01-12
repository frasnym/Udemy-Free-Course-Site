import { google } from "googleapis";

export async function getWhyNextReasons() {
	try {
		const scopes = [
			"https://www.googleapis.com/auth/spreadsheets.readonly",
		];
		const jwt = new google.auth.JWT(
			process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
			null,
			// we need to replace the escaped newline characters
			// https://stackoverflow.com/questions/50299329/node-js-firebase-service-account-private-key-wont-parse
			(process.env.GOOGLE_SHEETS_PRIVATE_KEY || "").replace(/\\n/g, "\n"),
			scopes
		);

		const sheets = google.sheets({ version: "v4", auth: jwt });
		const response = await sheets.spreadsheets.values.get({
			spreadsheetId: process.env.SPREADSHEET_ID,
			range: "Valid",
		});

		const rows = response.data.values;

		if (rows.length) {
			return rows.map((row) => ({
				title: row[0],
				url: row[1],
				image: row[2],
				description: row[3],
				rating: row[4],
				students: row[5],
				language: row[6],
				caption: row[7],
				updated: row[8],
			}));
		}
	} catch (err) {
		console.log(err);
	}

	return [];
}
