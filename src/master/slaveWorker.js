const SlaveWorker = require("worker-loader!../slave/slave.js");

export const slaveWorker = new SlaveWorker();
