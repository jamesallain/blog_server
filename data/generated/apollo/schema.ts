
export interface Query extends Node {
  node: Node | null;
  allComments: CommentsConnection | null;
  comment: Comment | null;
  commentById: Comment | null;
  allPosts: PostsConnection | null;
  post: Post | null;
  postById: Post | null;
  allStatics: StaticsConnection | null;
  static: Static | null;
  staticById: Static | null;
  allUsers: UsersConnection | null;
  user: User | null;
  userById: User | null;
  query: Query;
  nodeId: string;
}

export interface NodeQueryArgs {
  nodeId: string;
}

export interface AllCommentsQueryArgs {
  orderBy: CommentsOrderBy | null;
  before: Cursor | null;
  after: Cursor | null;
  first: number | null;
  last: number | null;
  offset: number | null;
  condition: CommentCondition | null;
}

export interface CommentQueryArgs {
  nodeId: string;
}

export interface CommentByIdQueryArgs {
  id: number;
}

export interface AllPostsQueryArgs {
  orderBy: PostsOrderBy | null;
  before: Cursor | null;
  after: Cursor | null;
  first: number | null;
  last: number | null;
  offset: number | null;
  condition: PostCondition | null;
}

export interface PostQueryArgs {
  nodeId: string;
}

export interface PostByIdQueryArgs {
  id: number;
}

export interface AllStaticsQueryArgs {
  orderBy: StaticsOrderBy | null;
  before: Cursor | null;
  after: Cursor | null;
  first: number | null;
  last: number | null;
  offset: number | null;
  condition: StaticCondition | null;
}

export interface StaticQueryArgs {
  nodeId: string;
}

export interface StaticByIdQueryArgs {
  id: number;
}

export interface AllUsersQueryArgs {
  orderBy: UsersOrderBy | null;
  before: Cursor | null;
  after: Cursor | null;
  first: number | null;
  last: number | null;
  offset: number | null;
  condition: UserCondition | null;
}

export interface UserQueryArgs {
  nodeId: string;
}

export interface UserByIdQueryArgs {
  id: number;
}

export interface Node {
  nodeId: string;
}

export type CommentsOrderBy = "PRIMARY_KEY_ASC" | "PRIMARY_KEY_DESC" | "NATURAL" | "ID_ASC" | "ID_DESC" | "POST_ID_ASC" | "POST_ID_DESC" | "USER_ID_ASC" | "USER_ID_DESC" | "COMMENT_ID_ASC" | "COMMENT_ID_DESC" | "CONTENT_ASC" | "CONTENT_DESC" | "LOCKED_ASC" | "LOCKED_DESC" | "CREATED_AT_ASC" | "CREATED_AT_DESC" | "UPDATED_AT_ASC" | "UPDATED_AT_DESC";

export type Cursor = any;

export interface CommentCondition {
  id: number | null;
  postId: number | null;
  userId: number | null;
  commentId: number | null;
  content: string | null;
  locked: boolean | null;
  createdAt: Datetime | null;
  updatedAt: Datetime | null;
}

export type Datetime = any;

export interface CommentsConnection {
  pageInfo: PageInfo;
  totalCount: number | null;
  edges: Array<CommentsEdge> | null;
  nodes: Array<Comment>;
}

export interface PageInfo {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: Cursor | null;
  endCursor: Cursor | null;
}

export interface CommentsEdge {
  cursor: Cursor | null;
  node: Comment;
}

export interface Comment extends Node {
  nodeId: string;
  id: number;
  postId: number;
  userId: number;
  commentId: number;
  content: string;
  locked: boolean;
  createdAt: Datetime | null;
  updatedAt: Datetime | null;
  postByPostId: Post | null;
  userByUserId: User | null;
  commentByCommentId: Comment | null;
  commentsByCommentId: CommentsConnection | null;
}

export interface CommentsByCommentIdCommentArgs {
  orderBy: CommentsOrderBy | null;
  before: Cursor | null;
  after: Cursor | null;
  first: number | null;
  last: number | null;
  offset: number | null;
  condition: CommentCondition | null;
}

export interface Post extends Node {
  nodeId: string;
  id: number;
  userId: number;
  title: string;
  url: string | null;
  content: string | null;
  topic: PostTopic | null;
  visit: number | null;
  createdAt: Datetime | null;
  updatedAt: Datetime | null;
  userByUserId: User | null;
  commentsByPostId: CommentsConnection | null;
  staticsByPostId: StaticsConnection | null;
}

export interface CommentsByPostIdPostArgs {
  orderBy: CommentsOrderBy | null;
  before: Cursor | null;
  after: Cursor | null;
  first: number | null;
  last: number | null;
  offset: number | null;
  condition: CommentCondition | null;
}

export interface StaticsByPostIdPostArgs {
  orderBy: StaticsOrderBy | null;
  before: Cursor | null;
  after: Cursor | null;
  first: number | null;
  last: number | null;
  offset: number | null;
  condition: StaticCondition | null;
}

export type PostTopic = "DISCUSSION" | "INSPIRATION" | "HELP" | "SHOWCASE";

export interface User extends Node {
  nodeId: string;
  id: number;
  qqId: string | null;
  weiboId: string | null;
  facebookId: string | null;
  twitterId: string | null;
  githubId: string | null;
  avatar: string | null;
  nickname: string;
  firstName: string;
  lastName: string;
  publisher: boolean | null;
  createdAt: Datetime | null;
  updatedAt: Datetime | null;
  postsByUserId: PostsConnection | null;
  commentsByUserId: CommentsConnection | null;
  staticsByUserId: StaticsConnection | null;
}

export interface PostsByUserIdUserArgs {
  orderBy: PostsOrderBy | null;
  before: Cursor | null;
  after: Cursor | null;
  first: number | null;
  last: number | null;
  offset: number | null;
  condition: PostCondition | null;
}

export interface CommentsByUserIdUserArgs {
  orderBy: CommentsOrderBy | null;
  before: Cursor | null;
  after: Cursor | null;
  first: number | null;
  last: number | null;
  offset: number | null;
  condition: CommentCondition | null;
}

export interface StaticsByUserIdUserArgs {
  orderBy: StaticsOrderBy | null;
  before: Cursor | null;
  after: Cursor | null;
  first: number | null;
  last: number | null;
  offset: number | null;
  condition: StaticCondition | null;
}

export type PostsOrderBy = "PRIMARY_KEY_ASC" | "PRIMARY_KEY_DESC" | "NATURAL" | "ID_ASC" | "ID_DESC" | "USER_ID_ASC" | "USER_ID_DESC" | "TITLE_ASC" | "TITLE_DESC" | "URL_ASC" | "URL_DESC" | "CONTENT_ASC" | "CONTENT_DESC" | "TOPIC_ASC" | "TOPIC_DESC" | "VISIT_ASC" | "VISIT_DESC" | "CREATED_AT_ASC" | "CREATED_AT_DESC" | "UPDATED_AT_ASC" | "UPDATED_AT_DESC";

export interface PostCondition {
  id: number | null;
  userId: number | null;
  title: string | null;
  url: string | null;
  content: string | null;
  topic: PostTopic | null;
  visit: number | null;
  createdAt: Datetime | null;
  updatedAt: Datetime | null;
}

export interface PostsConnection {
  pageInfo: PageInfo;
  totalCount: number | null;
  edges: Array<PostsEdge> | null;
  nodes: Array<Post>;
}

export interface PostsEdge {
  cursor: Cursor | null;
  node: Post;
}

export type StaticsOrderBy = "PRIMARY_KEY_ASC" | "PRIMARY_KEY_DESC" | "NATURAL" | "ID_ASC" | "ID_DESC" | "USER_ID_ASC" | "USER_ID_DESC" | "POST_ID_ASC" | "POST_ID_DESC" | "LONG_ASC" | "LONG_DESC";

export interface StaticCondition {
  id: number | null;
  userId: number | null;
  postId: number | null;
  long: number | null;
}

export interface StaticsConnection {
  pageInfo: PageInfo;
  totalCount: number | null;
  edges: Array<StaticsEdge> | null;
  nodes: Array<Static>;
}

export interface StaticsEdge {
  cursor: Cursor | null;
  node: Static;
}

export interface Static extends Node {
  nodeId: string;
  id: number;
  userId: number;
  postId: number;
  long: number;
  userByUserId: User | null;
  postByPostId: Post | null;
}

export type UsersOrderBy = "PRIMARY_KEY_ASC" | "PRIMARY_KEY_DESC" | "NATURAL" | "ID_ASC" | "ID_DESC" | "QQ_ID_ASC" | "QQ_ID_DESC" | "WEIBO_ID_ASC" | "WEIBO_ID_DESC" | "FACEBOOK_ID_ASC" | "FACEBOOK_ID_DESC" | "TWITTER_ID_ASC" | "TWITTER_ID_DESC" | "GITHUB_ID_ASC" | "GITHUB_ID_DESC" | "AVATAR_ASC" | "AVATAR_DESC" | "NICKNAME_ASC" | "NICKNAME_DESC" | "FIRST_NAME_ASC" | "FIRST_NAME_DESC" | "LAST_NAME_ASC" | "LAST_NAME_DESC" | "PUBLISHER_ASC" | "PUBLISHER_DESC" | "CREATED_AT_ASC" | "CREATED_AT_DESC" | "UPDATED_AT_ASC" | "UPDATED_AT_DESC";

export interface UserCondition {
  id: number | null;
  qqId: string | null;
  weiboId: string | null;
  facebookId: string | null;
  twitterId: string | null;
  githubId: string | null;
  avatar: string | null;
  nickname: string | null;
  firstName: string | null;
  lastName: string | null;
  publisher: boolean | null;
  createdAt: Datetime | null;
  updatedAt: Datetime | null;
}

export interface UsersConnection {
  pageInfo: PageInfo;
  totalCount: number | null;
  edges: Array<UsersEdge> | null;
  nodes: Array<User>;
}

export interface UsersEdge {
  cursor: Cursor | null;
  node: User;
}

export interface Mutation {
  createComment: CreateCommentPayload | null;
  updateComment: UpdateCommentPayload | null;
  updateCommentById: UpdateCommentPayload | null;
  deleteComment: DeleteCommentPayload | null;
  deleteCommentById: DeleteCommentPayload | null;
  createPost: CreatePostPayload | null;
  updatePost: UpdatePostPayload | null;
  updatePostById: UpdatePostPayload | null;
  deletePost: DeletePostPayload | null;
  deletePostById: DeletePostPayload | null;
  createStatic: CreateStaticPayload | null;
  updateStatic: UpdateStaticPayload | null;
  updateStaticById: UpdateStaticPayload | null;
  deleteStatic: DeleteStaticPayload | null;
  deleteStaticById: DeleteStaticPayload | null;
  createUser: CreateUserPayload | null;
  updateUser: UpdateUserPayload | null;
  updateUserById: UpdateUserPayload | null;
  deleteUser: DeleteUserPayload | null;
  deleteUserById: DeleteUserPayload | null;
}

export interface CreateCommentMutationArgs {
  input: CreateCommentInput;
}

export interface UpdateCommentMutationArgs {
  input: UpdateCommentInput;
}

export interface UpdateCommentByIdMutationArgs {
  input: UpdateCommentByIdInput;
}

export interface DeleteCommentMutationArgs {
  input: DeleteCommentInput;
}

export interface DeleteCommentByIdMutationArgs {
  input: DeleteCommentByIdInput;
}

export interface CreatePostMutationArgs {
  input: CreatePostInput;
}

export interface UpdatePostMutationArgs {
  input: UpdatePostInput;
}

export interface UpdatePostByIdMutationArgs {
  input: UpdatePostByIdInput;
}

export interface DeletePostMutationArgs {
  input: DeletePostInput;
}

export interface DeletePostByIdMutationArgs {
  input: DeletePostByIdInput;
}

export interface CreateStaticMutationArgs {
  input: CreateStaticInput;
}

export interface UpdateStaticMutationArgs {
  input: UpdateStaticInput;
}

export interface UpdateStaticByIdMutationArgs {
  input: UpdateStaticByIdInput;
}

export interface DeleteStaticMutationArgs {
  input: DeleteStaticInput;
}

export interface DeleteStaticByIdMutationArgs {
  input: DeleteStaticByIdInput;
}

export interface CreateUserMutationArgs {
  input: CreateUserInput;
}

export interface UpdateUserMutationArgs {
  input: UpdateUserInput;
}

export interface UpdateUserByIdMutationArgs {
  input: UpdateUserByIdInput;
}

export interface DeleteUserMutationArgs {
  input: DeleteUserInput;
}

export interface DeleteUserByIdMutationArgs {
  input: DeleteUserByIdInput;
}

export interface CreateCommentInput {
  clientMutationId: string | null;
  comment: CommentInput;
}

export interface CommentInput {
  id: number | null;
  postId: number;
  userId: number;
  commentId: number;
  content: string;
  locked: boolean;
  createdAt: Datetime | null;
  updatedAt: Datetime | null;
}

export interface CreateCommentPayload {
  clientMutationId: string | null;
  comment: Comment | null;
  commentEdge: CommentsEdge | null;
  postByPostId: Post | null;
  userByUserId: User | null;
  commentByCommentId: Comment | null;
  query: Query | null;
}

export interface CommentEdgeCreateCommentPayloadArgs {
  orderBy: CommentsOrderBy | null;
}

export interface UpdateCommentInput {
  clientMutationId: string | null;
  nodeId: string;
  commentPatch: CommentPatch;
}

export interface CommentPatch {
  id: number | null;
  postId: number | null;
  userId: number | null;
  commentId: number | null;
  content: string | null;
  locked: boolean | null;
  createdAt: Datetime | null;
  updatedAt: Datetime | null;
}

export interface UpdateCommentPayload {
  clientMutationId: string | null;
  comment: Comment | null;
  postByPostId: Post | null;
  userByUserId: User | null;
  commentByCommentId: Comment | null;
  query: Query | null;
}

export interface UpdateCommentByIdInput {
  clientMutationId: string | null;
  id: number;
  commentPatch: CommentPatch;
}

export interface DeleteCommentInput {
  clientMutationId: string | null;
  nodeId: string;
}

export interface DeleteCommentPayload {
  clientMutationId: string | null;
  comment: Comment | null;
  deletedCommentId: string | null;
  postByPostId: Post | null;
  userByUserId: User | null;
  commentByCommentId: Comment | null;
  query: Query | null;
}

export interface DeleteCommentByIdInput {
  clientMutationId: string | null;
  id: number;
}

export interface CreatePostInput {
  clientMutationId: string | null;
  post: PostInput;
}

export interface PostInput {
  id: number | null;
  userId: number;
  title: string;
  url: string | null;
  content: string | null;
  topic: PostTopic | null;
  visit: number | null;
  createdAt: Datetime | null;
  updatedAt: Datetime | null;
}

export interface CreatePostPayload {
  clientMutationId: string | null;
  post: Post | null;
  postEdge: PostsEdge | null;
  userByUserId: User | null;
  query: Query | null;
}

export interface PostEdgeCreatePostPayloadArgs {
  orderBy: PostsOrderBy | null;
}

export interface UpdatePostInput {
  clientMutationId: string | null;
  nodeId: string;
  postPatch: PostPatch;
}

export interface PostPatch {
  id: number | null;
  userId: number | null;
  title: string | null;
  url: string | null;
  content: string | null;
  topic: PostTopic | null;
  visit: number | null;
  createdAt: Datetime | null;
  updatedAt: Datetime | null;
}

export interface UpdatePostPayload {
  clientMutationId: string | null;
  post: Post | null;
  userByUserId: User | null;
  query: Query | null;
}

export interface UpdatePostByIdInput {
  clientMutationId: string | null;
  id: number;
  postPatch: PostPatch;
}

export interface DeletePostInput {
  clientMutationId: string | null;
  nodeId: string;
}

export interface DeletePostPayload {
  clientMutationId: string | null;
  post: Post | null;
  deletedPostId: string | null;
  userByUserId: User | null;
  query: Query | null;
}

export interface DeletePostByIdInput {
  clientMutationId: string | null;
  id: number;
}

export interface CreateStaticInput {
  clientMutationId: string | null;
  static: StaticInput;
}

export interface StaticInput {
  id: number | null;
  userId: number;
  postId: number;
  long: number;
}

export interface CreateStaticPayload {
  clientMutationId: string | null;
  static: Static | null;
  staticEdge: StaticsEdge | null;
  userByUserId: User | null;
  postByPostId: Post | null;
  query: Query | null;
}

export interface StaticEdgeCreateStaticPayloadArgs {
  orderBy: StaticsOrderBy | null;
}

export interface UpdateStaticInput {
  clientMutationId: string | null;
  nodeId: string;
  staticPatch: StaticPatch;
}

export interface StaticPatch {
  id: number | null;
  userId: number | null;
  postId: number | null;
  long: number | null;
}

export interface UpdateStaticPayload {
  clientMutationId: string | null;
  static: Static | null;
  userByUserId: User | null;
  postByPostId: Post | null;
  query: Query | null;
}

export interface UpdateStaticByIdInput {
  clientMutationId: string | null;
  id: number;
  staticPatch: StaticPatch;
}

export interface DeleteStaticInput {
  clientMutationId: string | null;
  nodeId: string;
}

export interface DeleteStaticPayload {
  clientMutationId: string | null;
  static: Static | null;
  deletedStaticId: string | null;
  userByUserId: User | null;
  postByPostId: Post | null;
  query: Query | null;
}

export interface DeleteStaticByIdInput {
  clientMutationId: string | null;
  id: number;
}

export interface CreateUserInput {
  clientMutationId: string | null;
  user: UserInput;
}

export interface UserInput {
  id: number | null;
  qqId: string | null;
  weiboId: string | null;
  facebookId: string | null;
  twitterId: string | null;
  githubId: string | null;
  avatar: string | null;
  nickname: string;
  firstName: string;
  lastName: string;
  publisher: boolean | null;
  createdAt: Datetime | null;
  updatedAt: Datetime | null;
}

export interface CreateUserPayload {
  clientMutationId: string | null;
  user: User | null;
  userEdge: UsersEdge | null;
  query: Query | null;
}

export interface UserEdgeCreateUserPayloadArgs {
  orderBy: UsersOrderBy | null;
}

export interface UpdateUserInput {
  clientMutationId: string | null;
  nodeId: string;
  userPatch: UserPatch;
}

export interface UserPatch {
  id: number | null;
  qqId: string | null;
  weiboId: string | null;
  facebookId: string | null;
  twitterId: string | null;
  githubId: string | null;
  avatar: string | null;
  nickname: string | null;
  firstName: string | null;
  lastName: string | null;
  publisher: boolean | null;
  createdAt: Datetime | null;
  updatedAt: Datetime | null;
}

export interface UpdateUserPayload {
  clientMutationId: string | null;
  user: User | null;
  query: Query | null;
}

export interface UpdateUserByIdInput {
  clientMutationId: string | null;
  id: number;
  userPatch: UserPatch;
}

export interface DeleteUserInput {
  clientMutationId: string | null;
  nodeId: string;
}

export interface DeleteUserPayload {
  clientMutationId: string | null;
  user: User | null;
  deletedUserId: string | null;
  query: Query | null;
}

export interface DeleteUserByIdInput {
  clientMutationId: string | null;
  id: number;
}
