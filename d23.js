// НЕ МОЕ РЕШЕНИЕ, ВЕРНУТЬСЯ ПОЗЖЕ К РАЗБОРУ 



const URL = "https://postman-echo.com";

const frisby = require("frisby");
const fs = require("fs");
const path = require("path");

describe("d23", () => {
    jest.setTimeout(100000);
    it("Geo Map file", async () => {
        const filePath = path.join(__dirname, "..", "geoMap.csv");
        const fileData = fs.readFileSync(filePath, "utf8");
        const rows = fileData.split("\n");
        console.log(rows);

        for (let i = 1; i < rows.length; i++) {
            const [region, boba] = rows[i].split(",");
            const response = await frisby
                .get(`${URL}/get?${region}=${boba}`)
                .expect('status', 200)
        }
    });
});