     
     
     
     
      getPosts({ post_type, limit = 10, skip = 0 }) {
        return Post.findAll({
          where: {
            post_type,
            post_status: 'publish'
          },
          limit: limit,
          offset: skip
        })
      },

      getPostsInCategory(termId, { post_type, limit = 10, skip = 0 }) {
        return TermRelationships.findAll({
          attributes: [],
          include: [{
            model: Post,
            where: {
              post_type: post_type,
              post_status: 'publish'
            }
          }],
          where: {
            term_taxonomy_id: termId
          },
          limit: limit,
          offset: skip
        }).then(posts => _.map(posts, post => post.wp_post))
      },

      getCategoryById(termId) {
        return Terms.findOne({
          where: { termId }
        })
      },