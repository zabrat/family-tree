import React from 'react';
import PersonCards from '../personCards';

const MainPage: React.FC = () => {
    return(
        <PersonCards data-at='person-cards'/>
    )
}

export default React.memo(MainPage);