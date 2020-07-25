import React from 'react';

interface props {
    name: string
}
const Temp:React.FC<props> = (props) => {
    return (
        <div>
            haha, {props.name}
        </div>
    );
};

export default Temp;
