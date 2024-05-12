import app from "./app";
const port = 3000;

const mainServer = async () => {
  const server = app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
};

mainServer();
