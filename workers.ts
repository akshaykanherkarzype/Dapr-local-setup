// // import { config } from "dotenv";
// const { ZBClient } = require("zeebe-node");
// const axios = require("axios");
// // config();
// const zbc = new ZBClient("https://zeebee-gateway.l8r.in");
// const API_KEY = "f504fb70e7c6e76703f0a88df83cdd59";

// zbc.createWorker({
//   taskType: "get-weather-report",
//   taskHandler: async (job) => {
//     console.log("Created Workflow: ", JSON.stringify(job, null, 2));
//     const city = job.variables.city;
//     try {
//       const res = await axios.get(
//         `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
//       );

//       const weather = res.data.weather[0];
//       const weather_code = weather.id.toString[0] + "xx";
//       job.complete({
//         weather_code,
//       });
//     } catch (e) {
//       console.error("Something went wrong!");
//       console.error(e);
//       job.fail(e.message);
//     }
//   },
// });

// zbc.createWorker({
//   taskType: "take-umbrella",
//   taskHandler: async (job) => {
//     return job.complete({
//       recommendation: "Take an umbrella!",
//     });
//   },
// });

// zbc.createWorker({
//   taskType: "leave-umbrella",
//   taskHandler: async (job) => {
//     return job.complete({
//       recommendation: "Leave the umbrella at home!",
//     });
//   },
// });
