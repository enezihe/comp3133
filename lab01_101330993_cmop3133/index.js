const fs = require("fs");
const csv = require("csv-parser");

const INPUT_FILE = "input_countries.csv";
const CANADA_FILE = "canada.txt";
const USA_FILE = "usa.txt";

// Delete existing file
function deleteFileIfExists(fileName) {
  if (fs.existsSync(fileName)) {
    fs.unlinkSync(fileName);
  }
}

// Write the header line to a file
function writeHeader(fileName) {
  fs.appendFileSync(fileName, "country,year,population\n");
}

// Remove old output files
deleteFileIfExists(CANADA_FILE);
deleteFileIfExists(USA_FILE);

// Add headers to new files
writeHeader(CANADA_FILE);
writeHeader(USA_FILE);

// Read the CSV file as a stream
fs.createReadStream(INPUT_FILE)
  .pipe(csv())
  .on("data", (row) => {
    const country = row.country?.trim().toLowerCase(); //trim and normalize

    // Write Canada data to canada.txt 
    if (country === "canada") {
      fs.appendFileSync(
        CANADA_FILE,
        `${country},${row.year},${row.population}\n`
      );
    }

    // Write USA data to usa.txt 
    if (country === "united states" || country === "usa") {
      fs.appendFileSync(
        USA_FILE,
        `${country},${row.year},${row.population}\n`
      );
    }
  })
  .on("end", () => {
    console.log("CSV processing completed.");
    console.log("canada.txt and usa.txt created successfully.");
  })
  .on("error", (err) => {
    console.error("Error reading CSV file:", err);
  });
