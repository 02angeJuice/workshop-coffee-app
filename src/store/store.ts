import {create} from 'zustand';
import {produce} from 'immer';
import {persist, createJSONStorage} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {CoffeeData} from '../constants/CoffeeData';
import {BeansData} from '../constants/BeansData';

// import {bearSlice} from './bearSlice';
// import {langSlice} from './langSlice';
// import {pinSlice} from './pinSlice';
// import {bearSlice, langSlice} from './SliceStore';

export const useBoundStore = create(
  persist(
    // (...a) => ({
    //   ...bearSlice(...a),
    //   ...langSlice(...a),
    //   ...pinSlice(...a),
    // }),

    (set, get) => ({
      coffeeList: CoffeeData,
      beanList: BeansData,
      cartPrice: 0,
      favoriteList: [],
      cartList: [],
      orderHistorytList: [],
    }),
    {name: 'coffee-store', storage: createJSONStorage(() => AsyncStorage)},
  ),
);
