const graphql = require('graphql')
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql

const JobType = new GraphQLObjectType({
  name: 'JobType',
  fields: {
    id: { type: GraphQLID },
    companyName: { type: GraphQLString },
    jobTitle: { type: GraphQLString },
    location: { type: GraphQLString },
    status: { type: GraphQLString }
  }
})

module.exports = JobType