// A mock data store
const Database = {
  getPosts(args) {
    let posts = [
      {
        "id": 1,
        "author_id": 101,
        "title": "GraphQL in an Age of REST",
        "url": "http://yos.io",
        "body": "lorem ipsum",
        "votes": 342,
        "published_at": 1476340597259
      },
      {
        "id": 2,
        "author_id": 102,
        "title": "Entity Component Systems in Elixir",
        "url": "http://yos.io",
        "body": "blah blah",
        "votes": 188,
        "published_at": 1476340597259
      },
      {
        "id": 3,
        "author_id": 101,
        "title": "Automated API Development",
        "url": "http://yos.io",
        "body": "apis apis",
        "votes": 2,
        "published_at": 1476340597259
      }
    ]

    if (args.limit) {
      return posts.slice(0, args.limit);
    }
    return posts;
  },

  getPostById(_id) {
      return {
        "id": 1,
        "author_id": 101,
        "title": "GraphQL in an Age of REST",
        "url": "http://yos.io",
        "body": "lorem ipsum",
        "votes": 342,
        "published_at": 1476340597259
      }
  },

  createPost(_args) {
    return {
      "id": 3,
      "author_id": 101,
      "title": "New post",
      "url": "http://yos.io",
      "body": "hello world",
      "votes": 0,
      "published_at": 1476340597259
    }
  },

  getUsers() {
    return [
      {
        "id": 101,
        "name": "yosriady",
        "joined_at": 1476340597259
      },
      {
        "id": 102,
        "name": "graphqluser",
        "joined_at": 1476340597259
      }
    ]
  },

  getUserById(_id) {
    return {
      "id": 101,
      "name": "yosriady",
      "joined_at": 1476340597259
    }
  }
}

export default Database;
