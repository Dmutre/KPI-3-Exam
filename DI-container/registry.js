const container = require('./container');
const UserRepository = require('./user-repository');
const UserService = require('./user-service');

const fakeDb = { query: sql => Promise.resolve({ id: 1, name: 'Oleh' }) };
const simpleCache = new Map();

container.register('db', () => fakeDb);
container.register('cache', () => simpleCache);
container.register('userRepo', c => new UserRepository(c.get('db')));
container.register('userService', c => new UserService(c.get('userRepo'), c.get('cache')));