const graphql = require('graphql')
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLNonNull
} = graphql
const UserType = require('./user_type')
const JobType = require('./job_type')

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      resolve(parentValue, args, req) {
        return req.user
      }
    },
    job: {
      type: JobType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID)
        }
      },
      resolve(parentValue, args, req) {
        return null
      }
    }
  }
})

module.exports = RootQueryType
