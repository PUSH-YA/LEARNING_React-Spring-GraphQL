// graphql
const graphql = require('graphql');
const _ = require('lodash');

//MongoDB models
const Author = require('../models/Author')
const Post = require('../models/Post')

// data types we use
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLSchema
} = graphql

//data
const posts = [
    {
        id:'0',
        title: 'first post',
        author: 'mike'
    },{
        id:'1',
        title: 'second post',
        author: 'devin'
    }
];

const authors = [
    {
        id: '0',
        name: 'mike',
        description: 'Hi'
    },
    {
        id: '1',
        name: 'devin',
        description: 'sad'
    }
];

// Post data type
const PostsType = new GraphQLObjectType({
    name: 'Posts',
    fields: () => ({
        // data type of the fields
        id: {type: GraphQLString},
        title: { type: GraphQLString},
        author: {type: GraphQLString},
        author_data: {
            type: AuthorType,
            // not from database
            // resolve(parent, args){
            //     return _.find(authors, (author) => {
            //         if (author.name == parent.author.name){
            //             return author;
            //         }
            //     });
            // }
            resolve(parent, args){
                return Author.find({name: parent.author})
            }
        }
    })
});

//Author data type
const AuthorType = new GraphQLObjectType({
    name: 'Authors',
    fields: () => ({
        id: {type: GraphQLString},
        name: { type: GraphQLString},
        posts: {
            type: new GraphQLList(PostsType),
            // not from database
            // resolve(parent, args){
            //     var author_posts = []
            //     _.find(posts, (post) => {
            //         if (post.author == parent.name){
            //             author_posts.push(post);
            //         }
            //     });

            //     return author_posts;
            // }
            resolve(parent, args){
                return Post.find({author: parent.name})
            }
        }
    })
})

// adding posts
const Mutation = new GraphQLObjectType({
    name:'Mutation',
    fields: {
      addPost: {
        type: PostsType,
        args: {
            id: {type: GraphQLString},
            title: {type: GraphQLString},
            author: {type: GraphQLString}
        },
        resolve(parent, args){
            // posts.push({
            //     id: args.id, 
            //     title: args.title,
            //     author: args.author
            // });

            // return _.find(posts, (post) => {
            //     if (post.id == args.id){
            //         return post
            //     }
            // })
            let new_post = new Post({
                id: args.id,
                title: args.title,
                author: args.author
            })
            // mongoDB will auto create new or update post
            return new_post.save();
        }
      },
      addAuthor: {
        type: AuthorType,
        args:{
            id: {type: GraphQLString},
            name: {type: GraphQLString},
            description: {type: GraphQLString},
        },
        resolve(parent, args){
            let author = new Author({
                id: args.id,
                name: args.name,
                description: args.description
            });

            return author.save();
        }
      }  
    }
})

// Post Query
const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        author: {
            type: AuthorType,
            args: { id: {type: GraphQLString}},
            resolve(parent, args){
                //using lodash to find the post with id
            //    return _.find(posts, {id: args.id})
                return Author.findById(args.id)
            }
        },
        authors: {
            type: new GraphQLList(AuthorType),
            resolve(parent, args){
                return Author.find({});
            }
        },
        posts: {
            type: GraphQLList(PostsType),
            resolve(parent, args){
                // return posts;
                return Post.find({});
            }
        },
        post: {
            type: PostsType,
            args: { id: {type: GraphQLString}},
            resolve(parent, args){
                //using lodash to find the post with id
            //    return _.find(posts, {id: args.id})
                return Post.findById(args.id)
            }
        }
    }
});

// export schema in the module
module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});
