﻿import React from 'react';
import LayoutHeader from '../components/Layouts/layouts/LayoutHeader';
import MedCard from '../components/MedCardComponents/MedCard';
import ParticlesContainer from '../components/UI/ParticlesBackground/ParticlesBackground';


const MCard = () => {
    return (
        <div>
            <LayoutHeader/>
            <ParticlesContainer />
            <MedCard />
        </div>
    );
};

export default MCard;