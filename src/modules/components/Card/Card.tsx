import React from 'react';
import {
    CardWrapper,
    MainInfoWrapper,
    InfoWrapper,
    Photo,
    Info,
    PartInfoWrapper
} from './styledComponents';

const Card: React.FC = () =>{
    return(
        <CardWrapper data-at='card-wrapper'>
            <MainInfoWrapper data-at='card-wrapper__main-info-wrapper'>
            <PartInfoWrapper data-at='main-info-wrapper__top-info-wrapper'>
                <Photo data-at='main-info-wrapper__img'/>
                    <InfoWrapper data-at='main-info-wrapper__info-wrapper'>
                        <Info data-at='info-wrapper__info' children='Name'/>
                        <Info data-at='info-wrapper__info' children='Name'/>
                        <Info data-at='info-wrapper__info' children='Name'/>
                        <Info data-at='info-wrapper__info' children='Name'/>
                    </InfoWrapper>
            </PartInfoWrapper>
            <PartInfoWrapper data-at='main-info-wrapper_bottom-info-wrapper'>
            <InfoWrapper data-at='main-info-wrapper__info-wrapper'>
                        <Info data-at='info-wrapper__info' children='Name'/>
                        <Info data-at='info-wrapper__info' children='Name'/>
                        <Info data-at='info-wrapper__info' children='Name'/>
                        <Info data-at='info-wrapper__info' children='Name'/>
            </InfoWrapper>
            <InfoWrapper data-at='main-info-wrapper__info-wrapper'>
                        <Info data-at='info-wrapper__info' children='Name'/>
                        <Info data-at='info-wrapper__info' children='Name'/>
                        <Info data-at='info-wrapper__info' children='Name'/>
                        <Info data-at='info-wrapper__info' children='Name'/>
            </InfoWrapper>
            </PartInfoWrapper>

            </MainInfoWrapper>
        </CardWrapper>
    );
}

export default React.memo(Card);