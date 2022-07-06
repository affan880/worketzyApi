
const returnedCompanies = [];
const API_KEY = "demo";
const count = 5;

function getCompanies(offset) {
  if (typeof offset == "undefined") {
    offsetParam = null;
  } else {
    offsetParam = `offset=${offset}`;
  }
  const hapikeyParam = `hapikey=${API_KEY}`;
  const paramsString = `?count=${count}&${hapikeyParam}&${offsetParam}`;

  const finalUrl = `https://api.hubapi.com/companies/v2/companies/paged${paramsString}`;
  console.log(finalUrl);
//   request(finalUrl, (error, response, body) => {
//     if (error) {
//       console.log("error", error);
//       throw new Error();
//     }
//     const parsedBody = JSON.parse(body);
//     parsedBody.companies.forEach((company) => {
//       returnedCompanies.push(company);
//     });
//     if (parsedBody["has-more"]) {
//       getCompanies(parsedBody["offset"]);
//     } else {
//       //print out all companies
//       console.log(returnedCompanies);
//     }
//   });
}

getCompanies();
