const http = require("http");

const port = Number(process.env.PORT || 3000);

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");

  if (req.url === "/health") {
    res.statusCode = 200;
    res.end(
      JSON.stringify({
        ok: true,
        app: "sample-node-app",
        route: "/health"
      })
    );
    return;
  }

  res.statusCode = 200;
  res.end(
    JSON.stringify({
      ok: true,
      app: "sample-node-app",
      method: req.method,
      path: req.url,
      port
    })
  );
});

server.listen(port, () => {
  console.log(`sample-node-app listening on port ${port}`);
});
