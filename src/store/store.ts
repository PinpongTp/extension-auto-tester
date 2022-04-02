import React from 'react';
import {useChromeStorageLocal} from 'use-chrome-storage';

export const store = () => {



    // const setStore = async (data: {}) => {
    //     let store = await getStore()
    //     store = { ...store, ...data }
    //     chrome.storage.sync.set({ 'store': store }, function () {
    //         console.log('store data', store)
    //     });
    // }
    
    // const getStore = async (data?: string) => {
    //     return new Promise<{}>((resolve, reject) => {
    //         chrome.storage.sync.get(['store'], function (result) {
    //             resolve(data ? result.store[data] : result.store)
    //         })
    //     });
    // }


}