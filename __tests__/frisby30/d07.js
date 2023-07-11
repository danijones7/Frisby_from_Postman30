// НЕ МОЕ РЕШЕНИЕ, ВЕРНУТЬСЯ ПОЗЖЕ К РАЗБОРУ 

const frisby = require("frisby");

jest.setTimeout(150000);

describe("d07", () => {
    const params = new URLSearchParams({ count: 10, api_key: "DEMO_KEY" });

    it("Check status 200", async function () {
        await frisby
            .get(`https://api.nasa.gov/planetary/apod?${params}`)
            .expect("status", 200)
            .then((response) => {
                const filteredResponse = response.json.map((item) => ({
                    title: item.title,
                    url: item.url,
                }));
                console.log(filteredResponse);
            });
    });

    it("Check status 403", function () {
        return frisby
            .get("https://api.nasa.gov/planetary/apod?")
            .expect("status", 403);
    });
});