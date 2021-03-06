import React from 'react';
import {Child, ChildAdFc} from "./Child";


const Parent = () => {
    return (
        <ChildAdFc color="red" onClick={() => {console.log('Clicked')}} >

        </ChildAdFc>
    );
};


export default Parent;