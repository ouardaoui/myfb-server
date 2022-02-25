export const Query = {
  users(parent: any, args: any, { data: { users } }: any, info: any) {
    if (!args.query) {
      return users
    }
    return users.filter((user: any) => {
      return user.name.toLowerCase().includes(args.query.toLowerCase())
    })
  },
  posts(parent: any, { query }: any, { data: { posts } }: any, info: any) {
    const post = posts.filter((post: any) => {
      if (query) {
        const matchtitle = post.title.toLowerCase().includes(query)
        const matchbody = post.body.toLowerCase().includes(query)
        return matchbody || matchtitle
      }
      return posts

    })
    return post

  },
  comments(parent: any, args: any, { data: { comments } }: any, info: any) {
    return comments
  },
}

