import OrganizeData from '../modules/OrganizeData';

describe('OrganizeData', () => {
  test('organizeData should correctly organize data', () => {
    const inputData = {
      background_image: 'background.jpg',
      description_raw: 'Game description',
      developers: ['Developer1', 'Developer2'],
      esrb_rating: { name: 'Mature' },
      name: 'Test Game',
      reddit_url: 'https://www.reddit.com/game',
      released: '2022-01-01',
      tags: ['tag1', 'tag2'],
      website: 'https://www.testgame.com',
    };

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

    const result = OrganizeData.organizeData(inputData);
    expect(result).toEqual(expectedOutput);
  });
});
