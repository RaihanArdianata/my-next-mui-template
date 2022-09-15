import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import userReducer from './reducers/user';

import {
  persistStore,
  persistReducer,
} from 'redux-persist';

const reducer = {
  user: userReducer
};

const rootReducer = combineReducers({
  user: userReducer,
});

let store = configureStore({
  reducer,
});

const makeStore = ({ isServer }) => {
  if (isServer) {
    //If it's on server side, create a store
    return store = configureStore({
      reducer,
    });
  } else {
    //If it's on client side, create a store which will persist
    const persistConfig = {
      key: 'shoppingcart',
      whitelist: ['cart', 'user'], // only counter will be persisted, add other reducers if needed 
      storage, // if needed, use a safer storage
    };

    const persistedReducer = persistReducer(persistConfig, rootReducer); // Create a new reducer with our existing reducer

    store = configureStore({
      reducer: persistedReducer,
      middleware: [thunk]
    }); // Creating the store again

    store.__persistor = persistStore(store); // This creates a persistor object & push that persisted object to .__persistor, so that we can avail the persistability feature

    return store;
  }
};

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, { debug: true });