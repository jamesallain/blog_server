import Sequelize from 'sequelize';
import Mongoose from 'mongoose';
import rp from 'request-promise';
import casual from 'casual';
import _ from 'lodash';

//SQL
// const db = new Sequelize('blog', null, null, {
//   dialect: 'sqlite',
//   storage: './blog.sqlite',
// });

const db = new Sequelize('postgres://nosh:postgres@localhost:5432/ncp');


const UserModel = db.define('user', {
  id: {
    type: Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  key: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV1,
  },
  qqId: { type: Sequelize.STRING },
  weiboId: { type: Sequelize.STRING },
  facebookId: { type: Sequelize.STRING },
  twitterId: { type: Sequelize.STRING },
  avatar: { type: Sequelize.STRING },
  firstName: {
    type: Sequelize.STRING,
    field: 'first_name',
  },
  lastName: {
    type: Sequelize.STRING,
    field: 'last_name',
  },
  nickname: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  timezone: { type: Sequelize.INTEGER },
  publisher: {
    type: Sequelize.BOOLEAN,
    defaultValue: true,
  },
  createdAt: {
    type: Sequelize.DATE,
    field: 'created_at',
  },
  updatedAt: {
    type: Sequelize.DATE,
    field: 'updated_at',
  },
});

const PostModel = db.define('post', {
  id: {
    type: Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  key: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV1,
  },
  title: { type: Sequelize.STRING },
  topic: { type: Sequelize.STRING },
  url: { type: Sequelize.STRING },
  content: { type: Sequelize.TEXT },
  visits: { type: Sequelize.INTEGER },
  createdAt: {
    type: Sequelize.DATE,
    field: 'created_at',
  },
  updatedAt: {
    type: Sequelize.DATE,
    field: 'updated_at',
  },
});

const CommentModel = db.define('comment', {
  id: {
    type: Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  key: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV1,
  },
  content: { type: Sequelize.TEXT },
  locked: { type: Sequelize.BOOLEAN },
  url: { type: Sequelize.STRING },
  createdAt: {
    type: Sequelize.DATE,
    field: 'created_at',
  },
  updatedAt: {
    type: Sequelize.DATE,
    field: 'updated_at',
  },
});

UserModel.hasMany(PostModel);
PostModel.belongsTo(UserModel);
PostModel.hasMany(CommentModel);
CommentModel.belongsTo(PostModel);

//Mongo
const mongo = Mongoose.connect('mongodb://localhost/views');

const ViewSchema = Mongoose.Schema({
  postId: Number,
  views: Number,
});

const View = Mongoose.model('views', ViewSchema);

//HTTP
const USDA = {
  getOne() {
    return rp('https://api.nal.usda.gov/ndb/V2/reports?ndbno=01009&ndbno=45202763&ndbno=35193&type=f&format=json&api_key=DEMO_KEY')
      .then((res) => JSON.parse(res))
      .then((res) => {
          console.log(res[0])
        return res[0].foods.food.name;
      });
  },
};

      //  .then((post) => {
      //   return post.createComment({
      //     content: casual.sentence(3),
      //   })

// create mock data with a seed, so we always get the same
casual.seed(123);
db.sync({ force: true }).then(() => {
  _.times(10, () => {
    return UserModel.create({
      nickname: casual.nickname,
      firstName: casual.first_name,
      lastName: casual.last_name,
    }).then((user) => {
      return user.createPost({
        title: `A post by ${user.firstName}`,
        content: casual.sentences(3),
      }).then((post) => { // <- the new part starts here
        // create some View mocks
        return View.update(
          { postId: post.id },
          { views: casual.integer(0, 100) },
          { upsert: true });
      });
    });
  });
});

const User = db.models.user;
const Post = db.models.post;
const Comment = db.models.coment;

export { User, Post, Comment, USDA };
