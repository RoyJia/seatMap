import express from 'express';
import schema from './schema';
import graphqlHTTP from 'express-graphql';

const port = 6001;
const app = express();

app.use('/graphql', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // 设置允许跨域请求
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With'); // 设置跨域允许的相应头
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

app.use('/graphql', graphqlHTTP({schema, graphiql: true}));

const server = app.listen(port, () => {console.log(`\n\nExpress listen at http://localhost:${port} \n`)});