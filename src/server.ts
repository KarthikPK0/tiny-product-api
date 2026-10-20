import type { Server } from "node:http";
import app from "./app.js";
import pool, { connectDatabase } from "./db.js";

const PORT = 5000;

let server : Server | undefined;

const startServer = async () => {

    await connectDatabase();
    server = app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
};


try {
    await startServer();

} catch (err) {
    console.error("Server startup failed", err);
    process.exit(1);
}

process.on("SIGINT", () => {
    if (!server) return;

    server.close(async () => {
        await pool.end();
        process.exit(0);

    });

});

