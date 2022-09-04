const schdule = require("node-schedule")

schdule.scheduleJob("m-job","*/5 * * * * *",() => {
    console.log("I am running...")
    schdule.cancelJob("m-job")
});


const mjob1 = schdule.scheduleJob("*/5 * * * * *",() => {
    console.log("I am running... 1")
    mjob1.cancel();
});

/*

*    *    *    *    *    *
┬    ┬    ┬    ┬    ┬    ┬
│    │    │    │    │    │
│    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
│    │    │    │    └───── month (1 - 12)
│    │    │    └────────── day of month (1 - 31)
│    │    └─────────────── hour (0 - 23)
│    └──────────────────── minute (0 - 59)
└───────────────────────── second (0 - 59, OPTIONAL)

*/