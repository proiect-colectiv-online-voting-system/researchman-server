'use strict';

const XLSX = require("xlsx")

/**
 * Read the documentation () to implement custom controller functions
 */

module.exports = {
    // GET /testApis/hello
    hello: async ctx => {
        var workbook = XLSX.readFile("./public/sample.xlsx");

        // ctx.send(JSON.stringify(workbook, null, 4));

        var responseBuffer = "";

        // Iterating over sheets
        for (const sheetName in workbook.Sheets) {
            responseBuffer += `Reading sheet ${sheetName}...\n`;
            const currentSheet = workbook.Sheets[sheetName];

            // Approach #1: God help us
            // Process each cell in the sheet...here we goooo....
            for (const key in currentSheet) {
                const currentEntry = currentSheet[key];

                // If the key starts with "!", forget it
                if (key[0] == "!") {
                    continue;
                }

                responseBuffer += `Processing cell "${key}" with value ${currentEntry.v}...\n`;
            }

            // Approach #2: Pray the user doesn't screw us over
            var sheetJSON = XLSX.utils.sheet_to_json(currentSheet);
            responseBuffer += JSON.stringify(sheetJSON, null, 4);
        }

        ctx.send(responseBuffer)
    }
};
