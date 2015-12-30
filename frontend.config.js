var countlyConfig = {
    mongodb: process.env.MONGO_URL,
    web: {
        port: 6001,
        host: "localhost",
        use_intercom: true
    },
    path: "",
    cdn: ""
};

module.exports = countlyConfig;

