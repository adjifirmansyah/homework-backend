const express = require("express");
const app = express();
const port = 3307;

const { sequelize } = require("./models");
sequelize.sync({ force: true });

const routerUser = require("./controller/user/userRouter");
app.use(express.json());

app.use("/users", routerUser);

// app.get("/", (req, res) => {
//   res.send("HELLO WORLD");
// });

app.post("/", (req, res) => {
    res.send("POST METHOD");
});

app.put("/", (req, res) => {
    res.send("PUT METHOD");
});

app.delete("/", (req, res) => {
    res.send("DELETE METHOD");
});

// app.get("/query", (req, res) => {
//   res.send(req.query);
// });

// app.get("/json", (req, res) => {
//   const response = { success: true, message: "data buku berhasil diterima" };
//   res.status(500).json(response);
// });

// app.get("/document", (req, res) => {
//   res.sendFile(__dirname + "/views/index.html");
// });

app.listen(port, () => {
    console.log(`listen at http://localhost:${port}`);
});