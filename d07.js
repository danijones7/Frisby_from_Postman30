const frisby = require("frisby");

describe("d07", () => {
    const params = new URLSearchParams({ count: 10, api_key: "DEMO_KEY" });

    it("Check status 200", async function () {
        const result = await frisby
            .get(`https://api.nasa.gov/planetary/apod?${params}`)
            .expect("status", 200)
        const filteredResponse = result.json.map((item) => ({
            title: item.title,
            url: item.url,
        }));
        console.log(filteredResponse);
    });
});

it("Check status 403", async function () {
    const result = await frisby
        .get("https://api.nasa.gov/planetary/apod?")
        .expect("status", 403);
});