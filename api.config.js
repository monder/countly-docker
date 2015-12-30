var countlyConfig = {
    mongodb: process.env.MONGO_URL,
    api: {
        port: 3001,
        host: "localhost",
        max_sockets: 1024
    },
    path: ""
};

module.exports = countlyConfig;

