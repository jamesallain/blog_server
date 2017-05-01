

begin;
drop schema if exists blog CASCADE;
create schema blog;

create table blog.user (
  id               serial primary key,
  qq_id            text,
  weibo_id         text,
  facebook_id      text,
  twitter_id       text,
  github_id        text,
  avatar           text,
  timezone         integer,
  nickname         text not null check (char_length(nickname) < 80),
  first_name       text not null check (char_length(nickname) < 80),
  last_name        text not null check (char_length(nickname) < 80),
  publisher        boolean,
  created_at       timestamp default now(),
  updated_at       timestamp default now()
);

comment on table blog.user is 'A user of the blog.';
comment on column blog.user.id is 'The primary unique identifier for the user.';
comment on column blog.user.qq_id is 'The QQ id for the the user.';
comment on column blog.user.weibo_id is 'The Weibo id for the the user.';
comment on column blog.user.facebook_id is 'The Facebook id for the the user.';
comment on column blog.user.twitter_id is 'The Twitter id for the the user.';
comment on column blog.user.github_id is 'The Gitbhub id for the the user.';
comment on column blog.user.avatar is 'The avatar address for the the user.';
comment on column blog.user.nickname is 'The user’s nickname.';
comment on column blog.user.first_name is 'The user’s first name.';
comment on column blog.user.last_name is 'The user’s last name.';
comment on column blog.user.publisher is 'Whether or not a user can publish a post.';
comment on column blog.user.created_at is 'The time this user was created.';
comment on column blog.user.updated_at is 'The time this user was updated.';

-- create type blog.post_topic as enum (
--   'discussion',
--   'inspiration',
--   'help',
--   'showcase'
-- );

create table blog.post (
  id               serial primary key,
  user_id          integer not null references blog.user(id),
  title            text not null check (char_length(title) < 280),
  url              text,
  content          text,
  --topic            blog.post_topic,
  visit            integer,
  created_at       timestamp default now(),
  updated_at       timestamp default now()
);

comment on table blog.post is 'A forum post written by a user.';
comment on column blog.post.id is 'The primary key for the post.';
comment on column blog.post.user_id is 'The id of the author user.';
comment on column blog.post.title is 'The title written by the user.';
comment on column blog.post.url is 'The url of the post.';
comment on column blog.post.topic is 'The topic this has been posted in.';
comment on column blog.post.visit is 'Number of times the post has been visited.';
comment on column blog.post.content is 'The main content text of our post.';
comment on column blog.post.created_at is 'The time this post was created.';
comment on column blog.post.updated_at is 'The time this post was updated.';

-- create table blog.captcha (
--   id               serial primary key,
--   base64           text not null,
--   created_at       timestamp default now()
-- );

-- comment on table blog.captcha is 'A Captcha is what verfies whether a client is human.';
-- comment on column blog.captcha.id is 'The primary key for the captcha.';
-- comment on column blog.captcha.base64 is 'The base64 image of a captcha.';

create table blog.comment (
  id               serial primary key,
  post_id          integer not null references blog.post(id),
  user_id          integer not null references blog.user(id),
  comment_id       integer not null references blog.comment(id),
  content          text not null check (char_length(content) < 280),
  locked           boolean not null,
  created_at       timestamp default now(),
  updated_at       timestamp default now()
);

comment on table blog.comment is 'A forum comment written by a user.';
comment on column blog.comment.id is 'The primary key for the comment.';
comment on column blog.comment.post_id is 'The id of the post of the user.';
comment on column blog.comment.comment_id is 'The id of the comment the user replied to.';
comment on column blog.comment.locked is 'A comment wil be locked after others reply to it.';
comment on column blog.comment.content is 'The main content of our comment on the post.';
comment on column blog.comment.created_at is 'The time this post was created.';
comment on column blog.comment.updated_at is 'The time this post was updated.';


-- create table blog.static (
--   id               serial primary key,
--   user_id          integer not null references blog.user(id),
--   post_id          integer not null references blog.post(id),
--   long             integer not null 
-- );

-- comment on table blog.static is 'A stat is the statics on how long a user stays on one page.';
-- comment on column blog.static.user_id is 'The id of the author user.';
-- comment on column blog.static.post_id is 'The id of the post of the user.';
-- comment on column blog.static.long is 'Legth of time.';


commit;
