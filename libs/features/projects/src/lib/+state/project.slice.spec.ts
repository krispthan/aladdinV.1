import { fetchProject, projectAdapter, projectReducer } from './project.slice';

describe('project reducer', () => {
  it('should handle initial state', () => {
    const expected = projectAdapter.getInitialState({
      loadingStatus: 'not loaded',
      error: null,
    });

    expect(projectReducer(undefined, { type: '' })).toEqual(expected);
  });

  it('should handle fetchProjects', () => {
    let state = projectReducer(undefined, fetchProject.pending(null, null));

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loading',
        error: null,
        entities: {},
      })
    );

    state = projectReducer(
      state,
      fetchProject.fulfilled([{ id: 1 }], null, null)
    );

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loaded',
        error: null,
        entities: { 1: { id: 1 } },
      })
    );

    state = projectReducer(
      state,
      fetchProject.rejected(new Error('Uh oh'), null, null)
    );

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'error',
        error: 'Uh oh',
        entities: { 1: { id: 1 } },
      })
    );
  });
});
