import React from 'react';
import { resolve } from 'path';
import { reject } from 'q';

function searchData(input){
    return new Promise((resolve,reject)=>{
        fetch(`https://hn.algolia.com/api/v1/search?query=${input}`).then((res)=>{
            return res.json()
        }).then((data)=>{
            resolve(data.hits)
        }).catch((error)=>{
            reject(error)
        })
    })
}

export {
    searchData
}