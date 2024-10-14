import express from "express";
import router from "./routes/routes.js";


export const app = new express();
app.use(express.json());
app.use('/', router)

app.listen(3000, () => {
    console.log("Server is listening on port 3000")
})

export default app