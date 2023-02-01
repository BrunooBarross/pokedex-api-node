import chalk from "chalk";
import app from "./app.js"

const port = +process.env.PORT || 4000;

app.listen(port, () => {
    console.log(chalk.bold.blue("server listening on port " + port));
})