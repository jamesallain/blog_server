declare type Query = Node &  {
      node: ?Node;
      allComments: ?CommentsConnection;
      comment: ?Comment;
      commentById: ?Comment;
      allPosts: ?PostsConnection;
      post: ?Post;
      postById: ?Post;
      allStatics: ?StaticsConnection;
      static: ?Static;
      staticById: ?Static;
      allUsers: ?UsersConnection;
      user: ?User;
      userById: ?User;
      query: Query;
      nodeId: string;
}

declare type NodeQuery =  {
      nodeId: string;
}

declare type AllCommentsQuery =  {
      orderBy: ?CommentsOrderBy;
      before: ?Cursor;
      after: ?Cursor;
      first: ?number;
      last: ?number;
      offset: ?number;
      condition: ?CommentCondition;
}

declare type CommentQuery =  {
      nodeId: string;
}

declare type CommentByIdQuery =  {
      id: number;
}

declare type AllPostsQuery =  {
      orderBy: ?PostsOrderBy;
      before: ?Cursor;
      after: ?Cursor;
      first: ?number;
      last: ?number;
      offset: ?number;
      condition: ?PostCondition;
}

declare type PostQuery =  {
      nodeId: string;
}

declare type PostByIdQuery =  {
      id: number;
}

declare type AllStaticsQuery =  {
      orderBy: ?StaticsOrderBy;
      before: ?Cursor;
      after: ?Cursor;
      first: ?number;
      last: ?number;
      offset: ?number;
      condition: ?StaticCondition;
}

declare type StaticQuery =  {
      nodeId: string;
}

declare type StaticByIdQuery =  {
      id: number;
}

declare type AllUsersQuery =  {
      orderBy: ?UsersOrderBy;
      before: ?Cursor;
      after: ?Cursor;
      first: ?number;
      last: ?number;
      offset: ?number;
      condition: ?UserCondition;
}

declare type UserQuery =  {
      nodeId: string;
}

declare type UserByIdQuery =  {
      id: number;
}

declare type Node =  {
      nodeId: string;
}

declare type CommentsOrderBy = "PRIMARY_KEY_ASC" | "PRIMARY_KEY_DESC" | "NATURAL" | "ID_ASC" | "ID_DESC" | "POST_ID_ASC" | "POST_ID_DESC" | "USER_ID_ASC" | "USER_ID_DESC" | "COMMENT_ID_ASC" | "COMMENT_ID_DESC" | "CONTENT_ASC" | "CONTENT_DESC" | "LOCKED_ASC" | "LOCKED_DESC" | "CREATED_AT_ASC" | "CREATED_AT_DESC" | "UPDATED_AT_ASC" | "UPDATED_AT_DESC";

declare type Cursor = any;

declare type CommentCondition =  {
      id: ?number;
      postId: ?number;
      userId: ?number;
      commentId: ?number;
      content: ?string;
      locked: ?bool;
      createdAt: ?Datetime;
      updatedAt: ?Datetime;
}

declare type Datetime = any;

declare type CommentsConnection =  {
      pageInfo: PageInfo;
      totalCount: ?number;
      edges: ?Array<CommentsEdge>;
      nodes: Array<Comment>;
}

declare type PageInfo =  {
      hasNextPage: bool;
      hasPreviousPage: bool;
      startCursor: ?Cursor;
      endCursor: ?Cursor;
}

declare type CommentsEdge =  {
      cursor: ?Cursor;
      node: Comment;
}

declare type Comment = Node &  {
      nodeId: string;
      id: number;
      postId: number;
      userId: number;
      commentId: number;
      content: string;
      locked: bool;
      createdAt: ?Datetime;
      updatedAt: ?Datetime;
      postByPostId: ?Post;
      userByUserId: ?User;
      commentByCommentId: ?Comment;
      commentsByCommentId: ?CommentsConnection;
}

declare type CommentsByCommentIdComment =  {
      orderBy: ?CommentsOrderBy;
      before: ?Cursor;
      after: ?Cursor;
      first: ?number;
      last: ?number;
      offset: ?number;
      condition: ?CommentCondition;
}

declare type Post = Node &  {
      nodeId: string;
      id: number;
      userId: number;
      title: string;
      url: ?string;
      content: ?string;
      topic: ?PostTopic;
      visit: ?number;
      createdAt: ?Datetime;
      updatedAt: ?Datetime;
      userByUserId: ?User;
      commentsByPostId: ?CommentsConnection;
      staticsByPostId: ?StaticsConnection;
}

declare type CommentsByPostIdPost =  {
      orderBy: ?CommentsOrderBy;
      before: ?Cursor;
      after: ?Cursor;
      first: ?number;
      last: ?number;
      offset: ?number;
      condition: ?CommentCondition;
}

declare type StaticsByPostIdPost =  {
      orderBy: ?StaticsOrderBy;
      before: ?Cursor;
      after: ?Cursor;
      first: ?number;
      last: ?number;
      offset: ?number;
      condition: ?StaticCondition;
}

declare type PostTopic = "DISCUSSION" | "INSPIRATION" | "HELP" | "SHOWCASE";

declare type User = Node &  {
      nodeId: string;
      id: number;
      qqId: ?string;
      weiboId: ?string;
      facebookId: ?string;
      twitterId: ?string;
      githubId: ?string;
      avatar: ?string;
      nickname: string;
      firstName: string;
      lastName: string;
      publisher: ?bool;
      createdAt: ?Datetime;
      updatedAt: ?Datetime;
      postsByUserId: ?PostsConnection;
      commentsByUserId: ?CommentsConnection;
      staticsByUserId: ?StaticsConnection;
}

declare type PostsByUserIdUser =  {
      orderBy: ?PostsOrderBy;
      before: ?Cursor;
      after: ?Cursor;
      first: ?number;
      last: ?number;
      offset: ?number;
      condition: ?PostCondition;
}

declare type CommentsByUserIdUser =  {
      orderBy: ?CommentsOrderBy;
      before: ?Cursor;
      after: ?Cursor;
      first: ?number;
      last: ?number;
      offset: ?number;
      condition: ?CommentCondition;
}

declare type StaticsByUserIdUser =  {
      orderBy: ?StaticsOrderBy;
      before: ?Cursor;
      after: ?Cursor;
      first: ?number;
      last: ?number;
      offset: ?number;
      condition: ?StaticCondition;
}

declare type PostsOrderBy = "PRIMARY_KEY_ASC" | "PRIMARY_KEY_DESC" | "NATURAL" | "ID_ASC" | "ID_DESC" | "USER_ID_ASC" | "USER_ID_DESC" | "TITLE_ASC" | "TITLE_DESC" | "URL_ASC" | "URL_DESC" | "CONTENT_ASC" | "CONTENT_DESC" | "TOPIC_ASC" | "TOPIC_DESC" | "VISIT_ASC" | "VISIT_DESC" | "CREATED_AT_ASC" | "CREATED_AT_DESC" | "UPDATED_AT_ASC" | "UPDATED_AT_DESC";

declare type PostCondition =  {
      id: ?number;
      userId: ?number;
      title: ?string;
      url: ?string;
      content: ?string;
      topic: ?PostTopic;
      visit: ?number;
      createdAt: ?Datetime;
      updatedAt: ?Datetime;
}

declare type PostsConnection =  {
      pageInfo: PageInfo;
      totalCount: ?number;
      edges: ?Array<PostsEdge>;
      nodes: Array<Post>;
}

declare type PostsEdge =  {
      cursor: ?Cursor;
      node: Post;
}

declare type StaticsOrderBy = "PRIMARY_KEY_ASC" | "PRIMARY_KEY_DESC" | "NATURAL" | "ID_ASC" | "ID_DESC" | "USER_ID_ASC" | "USER_ID_DESC" | "POST_ID_ASC" | "POST_ID_DESC" | "LONG_ASC" | "LONG_DESC";

declare type StaticCondition =  {
      id: ?number;
      userId: ?number;
      postId: ?number;
      long: ?number;
}

declare type StaticsConnection =  {
      pageInfo: PageInfo;
      totalCount: ?number;
      edges: ?Array<StaticsEdge>;
      nodes: Array<Static>;
}

declare type StaticsEdge =  {
      cursor: ?Cursor;
      node: Static;
}

declare type Static = Node &  {
      nodeId: string;
      id: number;
      userId: number;
      postId: number;
      long: number;
      userByUserId: ?User;
      postByPostId: ?Post;
}

declare type UsersOrderBy = "PRIMARY_KEY_ASC" | "PRIMARY_KEY_DESC" | "NATURAL" | "ID_ASC" | "ID_DESC" | "QQ_ID_ASC" | "QQ_ID_DESC" | "WEIBO_ID_ASC" | "WEIBO_ID_DESC" | "FACEBOOK_ID_ASC" | "FACEBOOK_ID_DESC" | "TWITTER_ID_ASC" | "TWITTER_ID_DESC" | "GITHUB_ID_ASC" | "GITHUB_ID_DESC" | "AVATAR_ASC" | "AVATAR_DESC" | "NICKNAME_ASC" | "NICKNAME_DESC" | "FIRST_NAME_ASC" | "FIRST_NAME_DESC" | "LAST_NAME_ASC" | "LAST_NAME_DESC" | "PUBLISHER_ASC" | "PUBLISHER_DESC" | "CREATED_AT_ASC" | "CREATED_AT_DESC" | "UPDATED_AT_ASC" | "UPDATED_AT_DESC";

declare type UserCondition =  {
      id: ?number;
      qqId: ?string;
      weiboId: ?string;
      facebookId: ?string;
      twitterId: ?string;
      githubId: ?string;
      avatar: ?string;
      nickname: ?string;
      firstName: ?string;
      lastName: ?string;
      publisher: ?bool;
      createdAt: ?Datetime;
      updatedAt: ?Datetime;
}

declare type UsersConnection =  {
      pageInfo: PageInfo;
      totalCount: ?number;
      edges: ?Array<UsersEdge>;
      nodes: Array<User>;
}

declare type UsersEdge =  {
      cursor: ?Cursor;
      node: User;
}

declare type Mutation =  {
      createComment: ?CreateCommentPayload;
      updateComment: ?UpdateCommentPayload;
      updateCommentById: ?UpdateCommentPayload;
      deleteComment: ?DeleteCommentPayload;
      deleteCommentById: ?DeleteCommentPayload;
      createPost: ?CreatePostPayload;
      updatePost: ?UpdatePostPayload;
      updatePostById: ?UpdatePostPayload;
      deletePost: ?DeletePostPayload;
      deletePostById: ?DeletePostPayload;
      createStatic: ?CreateStaticPayload;
      updateStatic: ?UpdateStaticPayload;
      updateStaticById: ?UpdateStaticPayload;
      deleteStatic: ?DeleteStaticPayload;
      deleteStaticById: ?DeleteStaticPayload;
      createUser: ?CreateUserPayload;
      updateUser: ?UpdateUserPayload;
      updateUserById: ?UpdateUserPayload;
      deleteUser: ?DeleteUserPayload;
      deleteUserById: ?DeleteUserPayload;
}

declare type CreateCommentMutation =  {
      input: CreateCommentInput;
}

declare type UpdateCommentMutation =  {
      input: UpdateCommentInput;
}

declare type UpdateCommentByIdMutation =  {
      input: UpdateCommentByIdInput;
}

declare type DeleteCommentMutation =  {
      input: DeleteCommentInput;
}

declare type DeleteCommentByIdMutation =  {
      input: DeleteCommentByIdInput;
}

declare type CreatePostMutation =  {
      input: CreatePostInput;
}

declare type UpdatePostMutation =  {
      input: UpdatePostInput;
}

declare type UpdatePostByIdMutation =  {
      input: UpdatePostByIdInput;
}

declare type DeletePostMutation =  {
      input: DeletePostInput;
}

declare type DeletePostByIdMutation =  {
      input: DeletePostByIdInput;
}

declare type CreateStaticMutation =  {
      input: CreateStaticInput;
}

declare type UpdateStaticMutation =  {
      input: UpdateStaticInput;
}

declare type UpdateStaticByIdMutation =  {
      input: UpdateStaticByIdInput;
}

declare type DeleteStaticMutation =  {
      input: DeleteStaticInput;
}

declare type DeleteStaticByIdMutation =  {
      input: DeleteStaticByIdInput;
}

declare type CreateUserMutation =  {
      input: CreateUserInput;
}

declare type UpdateUserMutation =  {
      input: UpdateUserInput;
}

declare type UpdateUserByIdMutation =  {
      input: UpdateUserByIdInput;
}

declare type DeleteUserMutation =  {
      input: DeleteUserInput;
}

declare type DeleteUserByIdMutation =  {
      input: DeleteUserByIdInput;
}

declare type CreateCommentInput =  {
      clientMutationId: ?string;
      comment: CommentInput;
}

declare type CommentInput =  {
      id: ?number;
      postId: number;
      userId: number;
      commentId: number;
      content: string;
      locked: bool;
      createdAt: ?Datetime;
      updatedAt: ?Datetime;
}

declare type CreateCommentPayload =  {
      clientMutationId: ?string;
      comment: ?Comment;
      commentEdge: ?CommentsEdge;
      postByPostId: ?Post;
      userByUserId: ?User;
      commentByCommentId: ?Comment;
      query: ?Query;
}

declare type CommentEdgeCreateCommentPayload =  {
      orderBy: ?CommentsOrderBy;
}

declare type UpdateCommentInput =  {
      clientMutationId: ?string;
      nodeId: string;
      commentPatch: CommentPatch;
}

declare type CommentPatch =  {
      id: ?number;
      postId: ?number;
      userId: ?number;
      commentId: ?number;
      content: ?string;
      locked: ?bool;
      createdAt: ?Datetime;
      updatedAt: ?Datetime;
}

declare type UpdateCommentPayload =  {
      clientMutationId: ?string;
      comment: ?Comment;
      postByPostId: ?Post;
      userByUserId: ?User;
      commentByCommentId: ?Comment;
      query: ?Query;
}

declare type UpdateCommentByIdInput =  {
      clientMutationId: ?string;
      id: number;
      commentPatch: CommentPatch;
}

declare type DeleteCommentInput =  {
      clientMutationId: ?string;
      nodeId: string;
}

declare type DeleteCommentPayload =  {
      clientMutationId: ?string;
      comment: ?Comment;
      deletedCommentId: ?string;
      postByPostId: ?Post;
      userByUserId: ?User;
      commentByCommentId: ?Comment;
      query: ?Query;
}

declare type DeleteCommentByIdInput =  {
      clientMutationId: ?string;
      id: number;
}

declare type CreatePostInput =  {
      clientMutationId: ?string;
      post: PostInput;
}

declare type PostInput =  {
      id: ?number;
      userId: number;
      title: string;
      url: ?string;
      content: ?string;
      topic: ?PostTopic;
      visit: ?number;
      createdAt: ?Datetime;
      updatedAt: ?Datetime;
}

declare type CreatePostPayload =  {
      clientMutationId: ?string;
      post: ?Post;
      postEdge: ?PostsEdge;
      userByUserId: ?User;
      query: ?Query;
}

declare type PostEdgeCreatePostPayload =  {
      orderBy: ?PostsOrderBy;
}

declare type UpdatePostInput =  {
      clientMutationId: ?string;
      nodeId: string;
      postPatch: PostPatch;
}

declare type PostPatch =  {
      id: ?number;
      userId: ?number;
      title: ?string;
      url: ?string;
      content: ?string;
      topic: ?PostTopic;
      visit: ?number;
      createdAt: ?Datetime;
      updatedAt: ?Datetime;
}

declare type UpdatePostPayload =  {
      clientMutationId: ?string;
      post: ?Post;
      userByUserId: ?User;
      query: ?Query;
}

declare type UpdatePostByIdInput =  {
      clientMutationId: ?string;
      id: number;
      postPatch: PostPatch;
}

declare type DeletePostInput =  {
      clientMutationId: ?string;
      nodeId: string;
}

declare type DeletePostPayload =  {
      clientMutationId: ?string;
      post: ?Post;
      deletedPostId: ?string;
      userByUserId: ?User;
      query: ?Query;
}

declare type DeletePostByIdInput =  {
      clientMutationId: ?string;
      id: number;
}

declare type CreateStaticInput =  {
      clientMutationId: ?string;
      static: StaticInput;
}

declare type StaticInput =  {
      id: ?number;
      userId: number;
      postId: number;
      long: number;
}

declare type CreateStaticPayload =  {
      clientMutationId: ?string;
      static: ?Static;
      staticEdge: ?StaticsEdge;
      userByUserId: ?User;
      postByPostId: ?Post;
      query: ?Query;
}

declare type StaticEdgeCreateStaticPayload =  {
      orderBy: ?StaticsOrderBy;
}

declare type UpdateStaticInput =  {
      clientMutationId: ?string;
      nodeId: string;
      staticPatch: StaticPatch;
}

declare type StaticPatch =  {
      id: ?number;
      userId: ?number;
      postId: ?number;
      long: ?number;
}

declare type UpdateStaticPayload =  {
      clientMutationId: ?string;
      static: ?Static;
      userByUserId: ?User;
      postByPostId: ?Post;
      query: ?Query;
}

declare type UpdateStaticByIdInput =  {
      clientMutationId: ?string;
      id: number;
      staticPatch: StaticPatch;
}

declare type DeleteStaticInput =  {
      clientMutationId: ?string;
      nodeId: string;
}

declare type DeleteStaticPayload =  {
      clientMutationId: ?string;
      static: ?Static;
      deletedStaticId: ?string;
      userByUserId: ?User;
      postByPostId: ?Post;
      query: ?Query;
}

declare type DeleteStaticByIdInput =  {
      clientMutationId: ?string;
      id: number;
}

declare type CreateUserInput =  {
      clientMutationId: ?string;
      user: UserInput;
}

declare type UserInput =  {
      id: ?number;
      qqId: ?string;
      weiboId: ?string;
      facebookId: ?string;
      twitterId: ?string;
      githubId: ?string;
      avatar: ?string;
      nickname: string;
      firstName: string;
      lastName: string;
      publisher: ?bool;
      createdAt: ?Datetime;
      updatedAt: ?Datetime;
}

declare type CreateUserPayload =  {
      clientMutationId: ?string;
      user: ?User;
      userEdge: ?UsersEdge;
      query: ?Query;
}

declare type UserEdgeCreateUserPayload =  {
      orderBy: ?UsersOrderBy;
}

declare type UpdateUserInput =  {
      clientMutationId: ?string;
      nodeId: string;
      userPatch: UserPatch;
}

declare type UserPatch =  {
      id: ?number;
      qqId: ?string;
      weiboId: ?string;
      facebookId: ?string;
      twitterId: ?string;
      githubId: ?string;
      avatar: ?string;
      nickname: ?string;
      firstName: ?string;
      lastName: ?string;
      publisher: ?bool;
      createdAt: ?Datetime;
      updatedAt: ?Datetime;
}

declare type UpdateUserPayload =  {
      clientMutationId: ?string;
      user: ?User;
      query: ?Query;
}

declare type UpdateUserByIdInput =  {
      clientMutationId: ?string;
      id: number;
      userPatch: UserPatch;
}

declare type DeleteUserInput =  {
      clientMutationId: ?string;
      nodeId: string;
}

declare type DeleteUserPayload =  {
      clientMutationId: ?string;
      user: ?User;
      deletedUserId: ?string;
      query: ?Query;
}

declare type DeleteUserByIdInput =  {
      clientMutationId: ?string;
      id: number;
}

