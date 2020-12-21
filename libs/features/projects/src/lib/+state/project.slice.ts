import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
  EntityState,
  PayloadAction,
} from '@reduxjs/toolkit';

export const PROJECT_FEATURE_KEY = 'project';

/*
 * Update these interfaces according to your requirements.
 */
export interface ProjectEntity {
  id: number;
}

export interface ProjectState extends EntityState<ProjectEntity> {
  loadingStatus: 'not loaded' | 'loading' | 'loaded' | 'error';
  error: string;
}

export const projectAdapter = createEntityAdapter<ProjectEntity>();

/**
 * Export an effect using createAsyncThunk from
 * the Redux Toolkit: https://redux-toolkit.js.org/api/createAsyncThunk
 *
 * e.g.
 * ```
 * import React, { useEffect } from 'react';
 * import { useDispatch } from 'react-redux';
 *
 * // ...
 *
 * const dispatch = useDispatch();
 * useEffect(() => {
 *   dispatch(fetchProject())
 * }, [dispatch]);
 * ```
 */
export const fetchProject = createAsyncThunk(
  'project/fetchStatus',
  async (_, thunkAPI) => {
    /**
     * Replace this with your custom fetch call.
     * For example, `return myApi.getProjects()`;
     * Right now we just return an empty array.
     */
    return Promise.resolve([]);
  }
);

export const initialProjectState: ProjectState = projectAdapter.getInitialState(
  {
    loadingStatus: 'not loaded',
    error: null,
  }
);

export const projectSlice = createSlice({
  name: PROJECT_FEATURE_KEY,
  initialState: initialProjectState,
  reducers: {
    add: projectAdapter.addOne,
    remove: projectAdapter.removeOne,
    // ...
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProject.pending, (state: ProjectState) => {
        state.loadingStatus = 'loading';
      })
      .addCase(
        fetchProject.fulfilled,
        (state: ProjectState, action: PayloadAction<ProjectEntity[]>) => {
          projectAdapter.setAll(state, action.payload);
          state.loadingStatus = 'loaded';
        }
      )
      .addCase(fetchProject.rejected, (state: ProjectState, action) => {
        state.loadingStatus = 'error';
        state.error = action.error.message;
      });
  },
});

/*
 * Export reducer for store configuration.
 */
export const projectReducer = projectSlice.reducer;

/*
 * Export action creators to be dispatched. For use with the `useDispatch` hook.
 *
 * e.g.
 * ```
 * import React, { useEffect } from 'react';
 * import { useDispatch } from 'react-redux';
 *
 * // ...
 *
 * const dispatch = useDispatch();
 * useEffect(() => {
 *   dispatch(projectActions.add({ id: 1 }))
 * }, [dispatch]);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#usedispatch
 */
export const projectActions = projectSlice.actions;

/*
 * Export selectors to query state. For use with the `useSelector` hook.
 *
 * e.g.
 * ```
 * import { useSelector } from 'react-redux';
 *
 * // ...
 *
 * const entities = useSelector(selectAllProject);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#useselector
 */
const { selectAll, selectEntities } = projectAdapter.getSelectors();

export const getProjectState = (rootState: unknown): ProjectState =>
  rootState[PROJECT_FEATURE_KEY];

export const selectAllProject = createSelector(getProjectState, selectAll);

export const selectProjectEntities = createSelector(
  getProjectState,
  selectEntities
);
