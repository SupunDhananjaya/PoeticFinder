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
        res.status(400).send({error:error, message: "Internal server error"});
    }
    
    
}

const search = async (req,res) => {
  try{
    const {metaphor, lyrics, author} = req.query;
    if(metaphor && lyrics && author){
      const data = await client.search({
        index: 'sinhala-metaphors',
        size: 100,
        body: {
          query: {
            bool: {
              must: [
                {match: {poet: author}},
                {match: {source_domain: metaphor}},
                {match_phrase: {lyrics: lyrics}}
              ]
            }
          }
        }
      });
      res.status(200).send(data.hits.hits);
      return;
    }else if(metaphor && lyrics){
      const data = await client.search({
        index: 'sinhala-metaphors',
        size: 100,
        body: {
          query: {
            bool: {
              must: [
                {match: {source_domain: metaphor}},
                {match_phrase: {lyrics: lyrics}}
              ]
            }
          }
        }
      });
      res.status(200).send(data.hits.hits);
      return;
    }else if(metaphor && author){
      const data = await client.search({
        index: 'sinhala-metaphors',
        size: 100,
        body: {
          query: {
            bool: {
              must: [
                {match: {poet: author}},
                {match: {source_domain: metaphor}}
              ]
            }
          }
        }
      });
      res.status(200).send(data.hits.hits);
      return;
    }else if(lyrics && author){
      const data = await client.search({
        index: 'sinhala-metaphors',
        size: 100,
        body: {
          query: {
            bool: {
              must: [
                {match: {poet: author}},
                {match_phrase: {lyrics: lyrics}}
              ]
            }
          }
        }
      });
      res.status(200).send(data.hits.hits);
      return;
    }else if(metaphor){
      const data = await client.search({
        index: 'sinhala-metaphors',
        size: 100,
        body: {
          query: {
            bool: {
              must: [
                {match: {source_domain: metaphor}}
              ]
            }
          }
        }
      });
      res.status(200).send(data.hits.hits);
      return;
    }else if(lyrics){
      const data = await client.search({
        index: 'sinhala-metaphors',
        size: 100,
        body: {
          query: {
            bool: {
              must: [
                {match_phrase: {lyrics: lyrics}}
              ]
            }
          }
        }
      });
      res.status(200).send(data.hits.hits);
      return;
    }else if(author){
      const data = await client.search({
        index: 'sinhala-metaphors',
        size: 100,
        body: {
          query: {
            bool: {
              must: [
                {match: {poet: author}}
              ]
            }
          }
        }
      });
      res.status(200).send(data.hits.hits);
      return;
    }else{
      res.status(400).send({message: 'search parameters are empty'});
    }

    res.status(200).send({metaphor,lyrics,author});
  }catch(error){  
    console.log('error',error)
    res.status(400).send({error:error, message: "Internal server error"});
  }
}

module.exports = {
    getRandomPoem,
    search
}