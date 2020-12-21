// /**** Create the redux store ****/

// import { configureStore } from '@reduxjs/toolkit';
// import rootReducer from './rootReducer';

// import { composeWithDevTools } from 'redux-devtools-extension';

// const store = configureStore({
//   reducer: rootReducer,
// });

// if (process.env.NODE_ENV === 'development' && (module as any).hot) {
//   (module as any).hot.accept('./rootReducer', () => {
//     const newRootReducer = require('./rootReducer').default;
//     store.replaceReducer(newRootReducer);
//   });
// }

// // export type AppDispatch = typeof store.dispatch;

// // export default store;

// export type AppDispatch = typeof store.dispatch;

// export default store;
