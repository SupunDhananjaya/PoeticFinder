const { Client } = require('@elastic/elasticsearch');

const client = new Client({ node: 'http://localhost:9200' });


const getRandomPoem = async (req,res) => {

    try {
        const data = await client.search({
            index: 'sinhala-metaphors',
            size: 1,
            from: Math.floor(Math.random() * 75),
            body: {
              query: {
                function_score: {
                  functions: [
                    {
                      random_score: {}
                    }
                  ]
                }
              }
            }
          });
        res.status(200).send(data.hits.hits[0]._source);
    } catch (error) {
        res.status(400).send({error:error, message: "Internal server error"})
    }
    
    
}

module.exports = {
    getRandomPoem
}