const mongoose = require("mongoose");

module.exports = async () => {
    try {
        const connectionParams = {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
        };
        await mongoose.connect(
            "mongodb+srv://nithirocky23:icvZU39j8O4mlbUv@cluster0.xyplatf.mongodb.net/?retryWrites=true&w=majority",
            // "mongodb://localhost:27017/todoApp",
            connectionParams
        );
        console.log("Connected to database.");
    } catch (error) {
        console.log("Could not connect to database.", error);
    }
};
