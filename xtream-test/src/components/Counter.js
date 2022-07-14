import React from 'react';
import { defaultArray } from '../array';

function Counter() {
    let count = defaultArray.length;
    return <span>There are {count} posts</span>;
}
export default Counter