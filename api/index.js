const app = require("./app");

const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || 3001;

/**
 * Server Activation
 */
app.listen(PORT, HOST, () => console.log("Knowledge Base Api Started!"));
