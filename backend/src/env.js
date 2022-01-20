const environments = {
    api: {
        port: 3000,
        host: 'localhost',
    },
    database: {
        connection: process.env.connection || 'mongodb://localhost:27017/DifGuias',
    },
};

module.exports = environments;