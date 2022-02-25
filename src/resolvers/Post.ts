export const Post = {
  comments(parent: any, args: any, { data: { comments } }: any, info: any) {
    return comments.filter((comment: any) => {
      return comment.post === parent.id
    })
  }
}