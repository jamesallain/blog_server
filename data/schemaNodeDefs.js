import { User, Post, Comment } from './connectors';


import {
  nodeDefinitions,
  fromGlobalId,
} from 'graphql-relay';



export const {Node, node} = nodeDefinitions(
  (globalId) => {
    var {type, id} = fromGlobalId(globalId);
    switch (type) {
      case 'User':
        return User.findByPrimary(id);
      case 'Post':
        return Post.findByPrimary(id);
      case 'Comment':
        return Comment.findByPrimary(id);
      default:
        return null;
    }
  },
  (obj) => {
    // we will use sequelize to resolve the object tha timplements node
    // to its type.
    switch (obj.type) {
      case 'User':
        return User;
      case 'Post':
        return Post;
      case 'Comment':
        return Comment;
      default:
       return null;
    }
  }
);

