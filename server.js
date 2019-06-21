//package
const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');
const {
    buildSchema,
} = require('graphql');
// system variable
const app = express();
const port = 3000;

/* middleware */
app.use(bodyParser.json())
// graphql endpoint
app.use('/graphql', graphqlHttp({
    schema: buildSchema(`
    type RootQuery {
        events : [String!]!
    }
    
    type RootMutation {
        createEvent(name: String): String
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
    `),
    rootValue: {
        events:()=>{
            return ['Test','test2','test3']
        },
        createEvent:(args)=>{
            const eventName = args.name;
            return eventName;
        }
    },
    graphiql : true
}))
/* database connection */

/* socket */

/* api */

/* test api */

app.get('/', (req, res) => {
    res.send('app is running');
})

app.listen(port, () => console.log(`server is running at ${port}`));