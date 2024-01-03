import FetchData from '../modules/FetchData';

// Mocking fetch function for testing
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () =>
      Promise.resolve({
        background_image: 'background.jpg',
        description_raw: 'Game description',
        developers: ['Developer1', 'Developer2'],
        esrb_rating: { name: 'Mature' },
        name: 'Test Game',
        reddit_url: 'https://www.reddit.com/game',
        released: '2022-01-01',
        tags: ['tag1', 'tag2'],
        website: 'https://www.testgame.com',
      }),
  }),
);

describe('FetchData', () => {
  test('fetchData should fetch and organize data correctly', async () => {
    const result = await FetchData.fetchData('Test Game');

    const expectedOutput = {
      image: 'background.jpg',
      description: 'Game description',
      developers: ['Developer1', 'Developer2'],
      rating: 'Mature',
      name: 'Test Game',
      reddit: 'https://www.reddit.com/game',
      released: '2022-01-01',
      tags: ['tag1', 'tag2'],
      website: 'https://www.testgame.com',
    };

    expect(result).toEqual(expectedOutput);
    expect(global.fetch).toHaveBeenCalledWith(
      'https://api.rawg.io/api/games/test-game?key=27516e003a624c4389aa6cde8779b5b6',
    );
  });

  test('fetchData should handle errors', async () => {
    global.fetch.mockImplementationOnce(() =>
      Promise.reject(new Error('Network error')),
    );

    await expect(FetchData.fetchData('Nonexistent Game')).rejects.toThrowError(
      'Network error',
    );
  });
});
