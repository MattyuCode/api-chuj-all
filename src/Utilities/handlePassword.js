const bcryptjs = require("bcryptjs");

// const encrypt = async (password) => {
//   const hash = await bcryptjs.hash(password, 10);
//   return hash;
// };

const encrypt = async (password) => await bcryptjs.hash(password, 10);

// const compare = async (password, hasPassword) => {
//   return await bcryptjs.compare(password, hasPassword);
// };

const compare = async (password, hasPassword) =>  await bcryptjs.compare(password, hasPassword);

module.exports = { encrypt, compare };
