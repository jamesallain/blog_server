import { User, Post, Comment } from './connectors';
import { connectionFromArray, connectionFromPromisedArray } from 'graphql-relay';
import { resolver } from 'graphql-sequelize';
import { globalIdField } from 'graphql-relay'

const BASE_URL = 'https://api.nal.usda.gov/ndb/V2/reports?ndbno=01009&ndbno=45202763&ndbno=35193&type=f&format=json&api_key=DEMO_KEY';


function fetchResponseByURL(relativeURL) {
  return fetch(`${BASE_URL}${relativeURL}`).then(res => res.json());
}

function fetchPeople() {
  return fetchResponseByURL('/people/').then(json => json.people);
}

function fetchPersonByURL(relativeURL) {
  return fetchResponseByURL(relativeURL).then(json => json.person);
}

export function getGame() { return game; }
export function getHidingSpots() { return hidingSpots; }

const resolvers = {
  Query: {
    user(root, args) {
      console.log(root)
      return User.find({ where: args });
    },
    allUsers() {
      return User.findAll()
      .then(res => { console.log(res); });
    },
    post(root, args) {
      return Comment.find({ where: args})
    },
    allPosts(root, args, context) {
      console.log(context)
      return Post.findAll();
      ;
      //   .then(posts => {
      //     console.log(posts)
      //     //return posts.Instance.dataValues;
      //     // return posts.forEach( (post, i) => {
      //     //   console.log(post,"index:" + i)
      //     //   return post; 
      //     // });
      // });      
    },
    comment(root, args) {
      return Comment.find({ where: args})
    },
    allComments() {
      return Comment.findAll()
     .then(res => { console.log(res); });
    },

  },
  Mutation: {
    createUser: (root, args) => {
      return User.create({
        qqId: args.input.user.qqId,
        weiboId: args.input.user.weiboId,
        facebookId: args.input.user.facebookId,
        twitterId: args.input.user.twitterId,
        githubId: args.input.user.githubId,
        avatar: args.input.user.avatar,
        nickname: args.input.user.nickname,
        firstName: args.input.user.firstName,
        lastName: args.input.user.lastName,
        publisher: args.input.user.publisher,
      }).then(res => { console.log(res); });
    },
    updateUser: (root, args) => {
      return User.update({
        qqId: args.input.user.qqId,
        weiboId: args.input.user.weiboId,
        facebookId: args.input.user.facebookId,
        twitterId: args.input.user.twitterId,
        githubId: args.input.user.githubId,
        avatar: args.input.user.avatar,
        nickname: args.input.user.nickname,
        firstName: args.input.user.firstName,
        lastName: args.input.user.lastName,
        publisher: args.input.user.publisher,
      }, {
        where: { id: args.input.id }
      }).then(res => { console.log(res); });
    },
    deleteUser: (root, args) => {
      return User.destroy({
        where: { id: args.input.id }
      }).then(res => { console.log(res); });
    },
  },   
  PostsConnection: {
    edges: (root, args, context, info) => {      
      //connectionFromArray(
              console.log(context)

      return root.map((post) => { return post; });
    },
  },
  PostsEdge: {
    node: (root, args, context, info) => {
     // console.log(root)
      return root;      
    }, 
  },
  Post: {
    id: (root, args, contect, info) => {
            //console.log("ID ----------",globalIdField('Post'))
      //return globalIdField('Post');
      return root.dataValues.id;

        //return new globalIdField('Post', object => object.properties['uuid']);

    },
    // rowId: (root, args, context, info) => {
    //   return root.dataValues.id;
    // }, 
    nodeId: (root, args, context, info) => {
      return root.dataValues.id;
    }, 
 }


  // User: {
  //   posts(user) {
  //     return user.getPosts();
  //   },
  // },
  // Post: {
  //   user(post) {
  //     return post.getUser();
  //   },
  //   views(post) {
  //     return View.findOne({ postId: post.id })
  //            .then((view) => view.views);
  //   },
  // },
  // Comment: {
  //   post(comment) {
  //     return comment.getPost();
  //   },
  // },
};

export default resolvers;


// .then(posts => {
//        return posts.forEach(post => { console.log(post); });
//      });

// import { connectionFromArray, connectionFromPromisedArray } from 'graphql-relay';
//  connectionFromArray(
//         root.posts.map((post) => { console.log(post.title) } ),
//         args
//       )
