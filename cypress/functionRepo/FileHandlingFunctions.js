var xlsx = require('xlsx');
const csv = require('csv-parser');
var fs = require('fs');
const path = require('path');
const filePath = path.resolve('./TestData');
const glbVars = require('../GlobalVariables.json');
var genericFunc = require('./genericFunc.js');

module.exports = function(browser) {
    var upldPage = browser.page.UploadPage();

    /**
     * Get all row values by passing excel file and column
     * @param  {filePath} Test Case Name which is maintained in the excel data sheet
     * @param  {columnNameToFetch} Worksheet name
     * @param {sheetname} workSheetName
     */

    this.getExcelColumnValueAsAList = function getExcelColumnValueAsAList(fileName, sheetName, columnNameToFetch) {
            const XLSX = require("xlsx");
            var entireFilePath = filePath + "\\" + fileName;
            const workbook = XLSX.readFile(entireFilePath);
            var ws = workbook.Sheets[sheetName];
            var data = XLSX.utils.sheet_to_json(ws);
            const resultList = [];
            for (i = 0; i < data.length; i++) {
                for (const key in data[i]) {
                    if (key == columnNameToFetch) {
                        if (key == 'Project Start Date' || key == 'Project End Date') {
                            resultList[i] = genericFunc(browser).excelDateToJSDate(data[i][key], 'MM/DD/YYYY')
                        } else
                            resultList[i] = data[i][key];
                    }
                }
            }
            return resultList;
        },

        /**
         * Read Excel rows as values
         * @param  {TCID} Test Case Name which is maintained in the excel data sheet
         * @param  {SheetName} Worksheet name
         * @return {resultList} returns the entire row respective to test case as values or String values
         */

        this.getExcelRowAsValues = function(TCID, SheetName) {
            scriptPath = __filename;
            var resultList = new Array();
            excelPath = scriptPath.replace("FuncRepo\\fileHandleFunc.js", "TestData\\OneDashTestData.xlsx");
            var wb = xlsx.readFile(excelPath);
            var ws = wb.Sheets[SheetName];
            var data = xlsx.utils.sheet_to_json(ws);
            for (i = 0; i < data.length; i++) {
                if (data[i].TestCaseID == TCID) {
                    for (const key in data[i]) {
                        resultList.push(data[i][key]);
                    }
                    break;
                }
            }
            return resultList;
        },

        /**
         * Read Excel rows as JSON
         * @param  {TCID} Test Case Name which is maintained in the excel data sheet
         * @param  {SheetName} Worksheet name
         * @return {resultList} returns the entire row respective to test case in JSON format
         */

        this.getExcelRowAsJSON = function(TCID, SheetName) {
            scriptPath = __filename;
            var resultList;
            excelPath = scriptPath.replace("FuncRepo\\fileHandleFunc.js", "TestData\\OneDashTestData.xlsx");
            var wb = xlsx.readFile(excelPath);
            var ws = wb.Sheets[SheetName];
            var data = xlsx.utils.sheet_to_json(ws);
            for (i = 0; i < data.length; i++) {
                if (data[i].TestCaseID == TCID) {
                    resultList = data[i];
                    break;
                }
            }
            return resultList;
        },

        /**
         * Read Excel rows for specific Project
         * @param  {projCode} Project Name which is uploaded in the excel data sheet
         * @param  {SheetName} Worksheet name
         * @param {excelName} Excel workbook name
         * @return {rowRec} returns the excel data row for specific project
         */

        this.getExcelRowForSpecificProj = function(projCode, SheetName, excelName) {
            var colTrimmed, rowRec;
            scriptPath = __filename;
            excelPath = scriptPath.replace("FuncRepo\\fileHandleFunc.js", "TestData\\" + excelName);
            var wb = xlsx.readFile(excelPath);
            var ws = wb.Sheets[SheetName];
            var data1 = xlsx.utils.sheet_to_json(ws);
            var data = data1[0];

            Object.keys(data).forEach(key => {
                if (key.indexOf(' ') > 0) {
                    colTrimmed = key.toString().replace(/ /g, "")
                    data[colTrimmed] = data[key];
                    delete data[key];
                }
            });

            if (data.InternalProjectCode == projCode) {
                rowRec = data;
                console.log('Excel data from poject ' + projCode + ' is', rowRec);
            }

            return rowRec;

        },

        /**
         * Get data row from CSV according to the Test case name
         * @param  {TCName} Test Case Name which is maintained in the csv data sheet
         * @param  {csvFileName} CSV file name
         * @return {rowRec} returns the entire row respective to test case
         */

        this.getCSVRow = function(TCName, csvFileName) {
            const results = [];
            scriptPath = __filename;
            csvPathPartial = "TestData\\" + csvFileName + ".csv";
            csvPathFull = scriptPath.replace("FuncRepo\\fileHandleFunc.js", csvPathPartial);
            var rowRec;

            const firstPromise = new Promise((resolve) => {

                fs.createReadStream(csvPathFull)
                    .pipe(csv({}))
                    .on('data', (data) => {
                        results.push(data)
                    })
                    .on('end', () => {
                        for (var i = 0; i < results.length; i++) {
                            if (results[i].TestScriptName == TCName) {
                                rowRec = results[i]
                                console.log('csv data is', results[i]);
                                resolve(rowRec);
                                break;
                            }
                        }
                    });
            });

            return firstPromise;
        },

        /**
         * Create and write into a file
         * @param  {filename} var File Name with extention which needs to be created [Eg. TestFile.json]
         * @param  {filecontent} var Content of the file to be written into the file
         * @return {} None
         */
        this.createAndWriteFile = function(filename, filecontent) {
            var fullPath = filePath + '\\' + filename;
            fs.writeFileSync(fullPath, filecontent);
        },

        /**
         * Append an existing file
         * @param  {filename} var File Name with extention which needs to be created [Eg. TestFile.json]
         * @param  {filecontent} var Content of the file to be written into the file
         * @return {} None
         */
        this.appendFile = function(filename, filecontent) {
            var fullPath = filePath + '\\' + filename;
            fs.appendFile(fullPath, filecontent, function(err) {
                if (err) throw err;
                console.log('Saved!');
            });
        },


        /**
         * Read file
         * @param  {filename} var File Name with extention which needs to be created [Eg. TestFile.json]
         * @return {} None
         */
        this.readFile = function(filename) {
            var fullPath = filePath + '\\' + filename;
            fs.readFile(fullPath, { encoding: 'utf-8' }, function(err, data) {
                if (!err) {
                    console.log('received data: ' + data);
                } else {
                    console.log(err);
                }
            });
        },


        /**
         * Read file
         * @param  {filename} var File Name with extention which needs to be created [Eg. TestFile.json]
         * @return {} None
         */
        this.readFileSync = function(filename) {
            var fullPath = filePath + '\\' + filename;
            var contents = fs.readFileSync(fullPath, 'utf8');
            console.log(contents);
        },

        /**
         * Delete file
         * @param  {filename} var File Name with extention which needs to be created [Eg. TestFile.json]
         * @return {} None
         */
        this.deleteFile = function(filename) {
            var fullPath = filePath + '\\' + filename;
            fs.unlinkSync(fullPath);
        },

        /**
         * Copy File from one location to another
         * @param  {filePath} var File Path with FileName (with extention) which needs to be copied
         * @param  {filePathDest} var File Path with FileName (with extention) which needs to be copied
         * @return {} None
         */
        this.CopyFileFromOneLocToAnother = function(filePath, filePathDest) {
            fs.copyFile(filePath, filePathDest, function(err) {
                console.log('Soure is' + pathToFile);
                console.log('Des is' + pathToNewDestination);
                if (err) {
                    throw err
                } else {
                    console.log("Successfully copied and moved the file!")
                }
            })
        },

        /**
         * Upload file
         * @param {filename} var File Name with extention which needs to be uploaded
         * @returns {} None
         */
        this.uploadFile = function(filename) {
            var fullPath = filePath + '\\' + filename;
            upldPage
                .setValue('//input[@type="file"]', fullPath)
                .click('//button/span[text()="Upload"]')
                .pause(glbVars.maxWait)
                .assert.containsText('@statusColText', 'Processed Successfully', 'Verifying File Upload Status of File: ' + filename)
                // .expect.element('@statusColText').text.to.contain('Processed Successfully')
        },

        /**
         * Check file existence in given path
         * @param  {filename} var File Name with extention which needs to be checked [Eg. TestFile.json]        
         * @return {} None
         */
        this.checkIfFileExists = function(filename) {
            try {
                var fullPath = filePath + '\\' + filename;
                fs.statSync(fullPath);
                console.log('File ' + filename + ' exists');
                return true;
            } catch (error) {
                console.log('File does not exists');
                return false;
            }
        },
        /**
         * Read Excel as JSON
         * @param  {SheetName} Worksheet name
         * @return {array} returns array of arrays i.e. treats rows and columns in excel as array
         */

        this.getExcelAsJSON = function(SheetName) {
            scriptPath = __filename;
            excelPath = scriptPath.replace("FuncRepo\\fileHandleFunc.js", "TestData\\OneDashTestData.xlsx");
            var workbook = xlsx.readFile(excelPath);
            var ws = workbook.Sheets[SheetName];
            /* header: 1 instructs xlsx to create an 'array of arrays' */
            var result = xlsx.utils.sheet_to_json(ws, { header: 1 });
            return result;
        }
    return this;
};