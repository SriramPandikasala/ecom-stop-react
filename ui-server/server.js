
import express from 'express';
import path from 'path';


function run() {
    const app = express();

    const buildPath = path.join(process.cwd(), "../ui/build");

    app.use(express.static(buildPath));

    app.get('/', function (req, res) {
        res.sendFile(path.join(buildPath, 'index.html'));
    });

    return app;
}



function start({ port }) {
    const server = run();

    server.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    });
}


start({
    port: 3000
});

