const mongoose = require('mongoose');

const connectDB = () => {
    mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }).then(() => {
        console.log('Database Connection Successful')
    }).catch((err) => {
        console.error(err);
        process.exit(1);
    })
}

module.exports = connectDB;