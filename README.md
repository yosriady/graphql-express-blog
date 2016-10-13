# graphql-express-blog

An example of a GraphQL service using Node.js and Express.

Have Node `stable` installed, then

```
npm install
npm start
```

Then, go to `http://localhost:3000/graphql`


## `curl`

```
curl -X POST \
-H "Content-Type: application/json" \
-d '{"query": "{ posts { title } }"}' \
http://localhost:3000/graphql
```
