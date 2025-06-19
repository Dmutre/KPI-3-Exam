require('./registry')
const container = require('./container');

(async () => {
  const userService = container.get('userService')
  console.log(await userService.getUser(1))
})()