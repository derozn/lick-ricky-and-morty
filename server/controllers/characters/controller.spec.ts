import { formatResponse } from './controller';

describe('formatResponse', () => {
  it('correctly formats the given response', () => {
    const mockedResponse = {
      info: {} as RMApi.Characters.IInfo,
      results: [
        {
          id: 48,
          name: 'Black Rick',
          status: 'Alive',
          species: 'Human',
          gender: 'Male',
          image: 'some-avatar-url',
          url: 'some-url',
          created: 'some-create-date',
        },
        {
          id: 72,
          name: 'Cool Rick',
          status: 'Alive',
          species: 'Human',
          gender: 'Male',
          image: 'another-avatar-url',
          url: 'some-url',
          created: 'some-create-date',
        },
      ] as RMApi.Character.IResponse[],
    };

    expect(formatResponse(mockedResponse)).toEqual([
      {
        id: 48,
        name: 'Black Rick',
        status: 'Alive',
        species: 'Human',
        gender: 'Male',
        avatar: 'some-avatar-url',
      },
      {
        id: 72,
        name: 'Cool Rick',
        status: 'Alive',
        species: 'Human',
        gender: 'Male',
        avatar: 'another-avatar-url',
      },
    ]);
  });
});
