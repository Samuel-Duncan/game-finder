class FetchData {
  static async fetchData(game) {
    const keyword = game.split(' ').join('-').toLowerCase();
    const endpoint = `https://api.rawg.io/api/games/${keyword}?key=27516e003a624c4389aa6cde8779b5b6`;

    try {
      const response = await fetch(endpoint);
      if (!response.ok) throw new Error(`Game: ${game} not found.`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export default FetchData;
