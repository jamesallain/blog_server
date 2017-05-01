import { User, View } from './connectors';



const resolvers = {
  Query: {
    user(_, args) {
      return User.find({ where: args });
    },   
  },
  Mutation: {
    createUser: (root, args) => {
      return User.create({
        nickname: args.input.user.nickname,
        firstName: args.input.user.firstName,
        lastName: args.input.user.lastName,
      });
    },
    deleteUser: (root, args) => {
      return User.destoy({
        where: { nickname: args.input.user.nickname }
      });
    },

  },

  User: {
    posts(user) {
      return user.getPosts();
    },
  },
  Post: {
    user(post) {
      return post.getUser();
    },
    views(post) {
      return View.findOne({ postId: post.id })
             .then((view) => view.views);
    },
  },
  Comment: {
    post(comment) {
      return comment.getPost();
    },
  },
};

export default resolvers;
