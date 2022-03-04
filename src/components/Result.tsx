import React,  {useState, useEffect} from 'react';

interface ResultProps {
    numA:string; 
    numB:string; 
}

export const Result = ({numA, numB}:ResultProps) => {
    const [soma,setSoma] = useState<number>(0); 

    return (
        <div>

        <button className='click' onClick = {
            () => setSoma(parseInt(numA) + parseInt(numB))
        } >
             +
        </button> 

        <h2 className='result'> {soma}  </h2>
        </div> 

    );
}