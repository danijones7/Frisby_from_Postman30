const frisby = require('frisby');
const headers = { 'Content-Type': 'application/json' };
const artist = "Ed Sheeran";
const queryParam = `query getByArtist($name: String!) {
    queryArtists (byName: $name) {
        name
        image
        albums {
            name
        }
        name
        image
        albums {
            name
        }
    }
}`;
const body = {
    query: queryParam,
    variables: { 'name': artist }
};


describe('d19', () => {
    it('Checks artist info', async function () {
        const result = await frisby
            .setup({
                request: {
                    headers: headers
                }
            })
            .post('https://joyce-spotify-graphql.herokuapp.com/graphql', { body: JSON.stringify(body) }
            )

            .expect('status', 200)
            .expect('bodyContains', 'Ed Sheeran')
            .expect('bodyContains', 'Wembley Edition')


        const artists = result._json.data.queryArtists;
        const edSheeran = artists.find(artist => artist.name === 'Ed Sheeran');
        console.log('Name:', edSheeran.name);
        console.log('Image:', edSheeran.image);
        console.log('Albums:');
        edSheeran.albums.forEach(album => {
            console.log(album.name);
        });
    })
})