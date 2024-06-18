const { log } = require("console")
const os = require("os")

log(os.hostname());
log(os.platform());
log(os.uptime())
log(os.version());