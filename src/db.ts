const users = [{
  id: 1,
  name: "ahmed",
  email: "ahmed@ahmed.com",
  age: 15
}, {
  id: 2,
  name: "issam",
  email: "issam@issam.com",

}, {
  id: 3,
  name: "mouad",
  email: "mouad@mouad.com",

}, {
  id: 4,
  name: "halima",
  email: "halima@halima.com",
  age: 28
}
]

const posts = [{
  id: "P1",
  title: "which your favorite music",
  body: "share white us ur favorite music type kind song ...",
  published: true,
  author: 1
}, {
  id: "P2",
  title: "your best country",
  body: "which country or countries do like why how ...",
  published: false,
  author: 2
}, {
  id: "P3",
  title: "weather",
  body: "how do weather was in ur country this month",
  published: true,
  author: 3
},
]

const comments = [{
  id: "C1",
  text: "i like rock indie rap",
  author: 1,
  post: "P1",
}, {
  id: "C2",
  text: " i really like arabic music i found it fantastic",
  author: 3,
  post: "P1"
}, {
  id: "C3",
  text: "it s sunny let s go to beach",
  author: 1,
  post: "P3"
}, {
  id: "C4",
  text: "so snow i stay home this evening",
  author: 2,
  post: "P3"
}]

export const data = {
  users,
  posts,
  comments
}