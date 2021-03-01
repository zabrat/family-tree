import React from 'react';
import Card from '../components/Card/Card';
import {
    PersonCardsWrapper
} from './styledComponents';

const PersonCards: React.FC = () => {
    return(
        <PersonCardsWrapper>
            <Card/>
        </PersonCardsWrapper>
        
    )
}

export default React.memo(PersonCards);