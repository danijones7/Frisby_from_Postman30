const frisby = require('frisby');
const cheerio = require('cheerio');

describe('d26', () => {
    it('Gets the link from Bing and make an array', async function () {
        const response = await frisby
            .get('https://www.bing.com/search?q=postman')
            .expect('status', 200)
        const $ = cheerio.load(response.body)
        const linkResults = $("ol#b_results h2 a");
        const linkArray = [];
        $(linkResults).each((i, v) => {
            // console.log(v)
            if (v.type === "tag" && v.name === "a") {
                linkArray.push({
                    type: v.type,
                    name: v.name,
                    attribs: v.attribs
                });
            }
            expect(linkArray).toBeInstanceOf(Array);
            const links = JSON.stringify(linkArray);
            // const links = finalValue;
            console.log(links)
        });

    })
})