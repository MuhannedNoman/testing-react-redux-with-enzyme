import moxios from 'moxios';
import { testStore } from '../../utils';
import { fetchPosts } from '../../actions';

describe('fetchPosts action', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test('Store is updated correctly', () => {
    const expectedState = [
      { title: 'Title1', body: 'test' },
      { title: 'Title1', body: 'test' },
      { title: 'Title1', body: 'test' },
    ];

    const store = testStore();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState,
      });
    });

    return store.dispatch(fetchPosts()).then(() => {
      const newState = store.getState();
      expect(newState.posts).toBe(expectedState);
    });
  });
});
