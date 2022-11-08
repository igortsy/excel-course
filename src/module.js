// eslint-disable-next-line no-console
console.log('module.js');

async function start() {
  return await Promise.resolve('asyn works');
}

start().then(console.log);
