const frisby = require("frisby");

jest.setTimeout(150000); // вроде только для этого теста таймаут устаналивает 

describe("d08", () => {
    it("Check status 200", async function () {
        const result = await frisby
            .get("https://randomuser.me/api")
            .expect("status", 200);
        console.log(result.json.results[0].name);
    });
    const paramGender = new URLSearchParams({ gender: "female" });
    it("Check status and gender", async function () {
        const result = await frisby
            .get(`https://randomuser.me/api/?${paramGender}`)
            .expect("status", 200)
            .expect("jsonTypes", 'results.0', { gender: 'female' });
        console.log(result.json.results[0].gender);
    });
    const paramNat = new URLSearchParams({ nat: "FR" });
    it("Check status, gender and nationality", async function () {
        const result = await frisby
            .get(`https://randomuser.me/api/?${paramGender}&${paramNat}`)
            .expect("status", 200)
            .expect("jsonTypes", 'results.0', { gender: 'female', nat: 'FR' });
        console.log(result.json.results[0].gender);
        console.log(result.json.results[0].nat);

    });
});