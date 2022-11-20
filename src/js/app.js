import GameSavingLoader from './GameSavingLoader';

(async () => {
  try {
    const data = await GameSavingLoader.load();
    return data;
  } catch (error) {
    // console.error(error);
    throw new Error(error);
  }
})();
