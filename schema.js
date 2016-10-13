import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID
} from 'graphql';

const SuperHeroType = new GraphQLObjectType({
  name: 'SuperHero',
  fields: {
    first_name: { type: GraphQLString },
    last_name: { type: GraphQLString },
    nickname: { type: GraphQLString },
  }
});

const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'The root of all our queries',
  fields: () => ({
    superhero: {
      type: SuperHeroType,
      resolve: () => (
        {
          first_name: 'Tony',
          last_name: 'Stark',
          nickname: 'Iron Man',
        }
      ),
    }
  }),
});

const schema = new GraphQLSchema({
  query: QueryType,
});

export default schema;
