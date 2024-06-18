import dotenv from "dotenv";
dotenv.config()
import mongoose from "mongoose";
import app from "./app";


mongoose.connect(process.env.MONGO_URL as string, {}).then(data => {
    console.log("MONGO-DB connectin succeed!");
    const PORT = process.env.PORT ?? 3003;

    app.listen(PORT, () => {
        console.info(`The server is running on ${PORT}`);
        console.info(`Admin project on http://localhost:${PORT}/admin`);

    })

}).catch(err => {
    console.log("ERROR on connection MONGODB", err);

})



