// ЕЩЕ РАЗ РАЗОБРАТЬСЯ В ДЕТАЛЯХ 

const frisby = require('frisby');

it('Get Pokemon Types', () => {
    return frisby
        .get('https://pokeapi.co/api/v2/type')
        .expect('status', 200)
        .then(response => {
            const types = response.json.results;
            let htmlTable = `
        <style>
          table {
              background-color: #00FFEF;
              border-collapse: collapse;
              width: 100%;
          }
          th, td {
              padding: 8px;
              text-align: left;
              border-bottom: 1px solid #ddd;
          }
          th {
              background-color: #4CAF50;
              color: white;
          }
        </style>
        <h2>Pokemon Types</h2>
        <table>
            <tr>
                <th>Name</th>
                <th>URL</th>
            </tr>
      `;

            types.forEach(type => {
                htmlTable += `
          <tr>
            <td>${type.name}</td>
            <td>${type.url}</td>
          </tr>
        `;
            });

            htmlTable += '</table>';

            expect(htmlTable).toBeTruthy();
        })
        .catch(error => {
            console.error(error);
        });
});
