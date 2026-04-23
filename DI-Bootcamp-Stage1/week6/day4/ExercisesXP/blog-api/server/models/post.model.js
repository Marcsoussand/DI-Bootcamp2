let posts = [
  { id: 1, title: 'First Post', content: 'This is the first blog post.' },
  { id: 2, title: 'Second Post', content: 'This is the second blog post.' },
];

let nextId = 3;

const getAll = () => posts;

const getById = (id) => posts.find((p) => p.id === id);

const create = ({ title, content }) => {
  const post = { id: nextId++, title, content };
  posts.push(post);
  return post;
};

const update = (id, { title, content }) => {
  const index = posts.findIndex((p) => p.id === id);
  if (index === -1) return null;
  posts[index] = { ...posts[index], title, content };
  return posts[index];
};

const remove = (id) => {
  const index = posts.findIndex((p) => p.id === id);
  if (index === -1) return null;
  const [deleted] = posts.splice(index, 1);
  return deleted;
};

module.exports = { getAll, getById, create, update, remove };
