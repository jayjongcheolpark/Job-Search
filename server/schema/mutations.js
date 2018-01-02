const graphql = require('graphql')
const { GraphQLObjectType, GraphQLString } = graphql
const UserType = require('./types/user_type')
const JobType = require('./types/job_type')
const AuthService = require('../services/auth')
const ParseService = require('../services/parseJobLink')

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    signup: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(parentValue, { email, password }, req) {
        return AuthService.signup({ email, password, req })
      }
    },
    logout: {
      type: UserType,
      resolve(parentValue, args, req) {
        const { user } = req
        req.logout()
        return user
      }
    },
    login: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(parentValue, { email, password }, req) {
        return AuthService.login({ email, password, req })
      }
    },
    addJob: {
      type: JobType,
      args: {
        url: { type: GraphQLString }
      },
      resolve(parentValue, { url }, req) {
        return ParseService.parseJobLink(url)
      }
    }
  }
})

module.exports = mutation
