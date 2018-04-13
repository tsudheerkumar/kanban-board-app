const express = require('express')
const db = require('../db/schema')
const MyGraphQLSchema = require('../graphQl/schema');

const app = express();

app.use('/graphql', MyGraphQLSchema);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(8000, () => console.log('Example app listening on port 8000!'))