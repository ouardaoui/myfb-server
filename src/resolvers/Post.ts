import { userInfo } from "os"

export const Post = {
  comments(parent: any, args: any, { data: { comments } }: any, info: any) {
    return comments.filter((comment: any) => {
      return comment.post === parent.id
    })
  },
  user(parent: any, args: unknown, { data: { users } }: unknown, info: unknown) {
    console.log("#1")
    return users.find((user: any) => {
      console.log(user)
      return user.id === parent.author
    })
  }
}