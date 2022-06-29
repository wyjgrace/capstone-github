import fetch from "node-fetch";
import cheerio from "cheerio";
import pretty from "pretty";

// function to get the raw data
const getRawData = (URL) => {
  return fetch(URL)
    .then((response) => response.text())
    .then((data) => {
      return data;
    });
};

// URL for data
//const URL = "https://en.wikipedia.org/wiki/Cricket_World_Cup";
const URL = "https://www.huffpost.com/life/";

// start of the program
const getHTML = async () => {
  const retrievedRawData = await getRawData(URL);
//   console.log(retrievedRawData);

  const $ = cheerio.load(retrievedRawData);
  console.log(pretty($.html()));
};

// invoking the main function
getHTML();
