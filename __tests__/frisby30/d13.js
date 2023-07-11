const frisby = require('frisby');

describe('d13', () => {
    it('Check the planet Tatooine', async function () {
        const response = await frisby
            .get('https://swapi.dev/api/planets')
            .expect('status', 200)
            .expect('bodyContains', 'Tatooine')
        const planets = response.json.results;
        const planet = planets.find(planet => planet.name === "Tatooine")
        console.log(planet);
    });

    it('Check who speaks Ewokese page 1', async function () {
        const response = await frisby
            .get('https://swapi.dev/api/species/?page=1')
            .expect('status', 200)
            .expect('bodyContains', 'Ewokese')
        const speciesSpeakEwokese = response.json.results.filter(species => species.language === 'Ewokese')
        expect(speciesSpeakEwokese.length).toBeGreaterThan(0)

        console.log(speciesSpeakEwokese)
    });

    it('Checks height more than 100 on page 1', async function () {
        const response = await frisby
            .get('https://swapi.dev/api/species/?page=1')
            .expect('status', 200)
        const speciesHeight100 = response.json.results.filter(species => parseFloat(species.average_height) > 100)
        const talls = parseInt(speciesHeight100.length)
        console.log(`Species who have an average height greater than 100: ${talls} species`)

    })

});
