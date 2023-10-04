const { startDatabase } = require('./mongo');

const collectionName = 'userScore';

async function addUserScore(newScore) {
  console.log('newScore');
  const database = await startDatabase();
  const result = await database.db("win-streak-game").collection(collectionName).insertOne(newScore);
  return result;
}

async function getAds() {
  console.log('getAds ici la comme ca coucou');
  const database = await startDatabase();
  return await database.db("win-streak-game").collection(collectionName).find({}).toArray();
}

module.exports = {
  addUserScore,
  getAds,
};