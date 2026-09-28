// Import Modules
const os = require("os");
const path = require("path");
const dns = require("dns");
const net = require("net");
const readline = require("readline");

// Readline Module
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your name: ", (name) => {

    console.log("\nHello", name);

    // OS Module
    console.log("\n--- OS MODULE ---");
    console.log("Platform:", os.platform());
    console.log("Architecture:", os.arch());
    console.log("CPU Cores:", os.cpus().length);

    // Path Module
    console.log("\n--- PATH MODULE ---");
    let file = path.join("node", "app.js");
    console.log("File Name:", path.basename(file));
    console.log("Extension:", path.extname(file));

    // DNS Module
    console.log("\n--- DNS MODULE ---");

    dns.lookup("google.com", (err, address) => {

        if (err) {
            console.log("DNS Error:", err.message);
        } else {
            console.log("Google IP:", address);
        }

        // Net Module
        console.log("\n--- NET MODULE ---");

        const client = net.createConnection(
            { host: "example.com", port: 80 },
            () => {
                console.log("TCP Connection Established");
                client.end();
            }
        );

        client.on("error", (err) => {
            console.log("Connection Error:", err.message);
            rl.close();
        });

        client.on("end", () => {
            console.log("Connection Closed");
            rl.close();
        });
    });
});