export const User = {
  comments(parent: any, args: any, { data: { comments } }: any, info: any) {

    return comments.filter((comment: any) => {
      return comment.author === parent.id
    })
  },
  posts(parent: any, args: any, { data: { posts } }: any, info: any) {
    return posts.filter((post: any) => {
      return post.author === parent.id
    })
  }
}
