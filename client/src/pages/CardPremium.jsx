    /* eslint-disable no-unused-vars */
    import React, { useState } from 'react';
    import {Section1, Image, Card, Description, Title, Text, ButtonStyle } from './StyledBody';
    import Critical from "../assets/5.png";
    import PremiumTemplate from './PremiumTemplate';
    import Envelope from './Envelope';

    const CardPremium = () => {
        const [showEnvelope, setShowEnvelope] = useState(false);
        const [showInvitation, setShowInvitation] = useState(false);
    
        const handleOpenEnvelope = () => {
        setShowEnvelope(true);
        setShowInvitation(false);
        };
    
        const handleCloseEnvelope = () => {
        setShowEnvelope(false);
        setShowInvitation(true);
        };

    return (

        <Section1>
        {showEnvelope ? (
            <Envelope onOpen={handleCloseEnvelope} isOpened={showInvitation} />
        ) : showInvitation ? (
            <PremiumTemplate />
        ) : (
            <Card>
        <Image>
            <img src={Critical} alt="Deskripsi Gambar 1" />
        </Image>
        <Description>
            <Title>Premium design</Title>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
            <ButtonStyle onClick={handleOpenEnvelope}>
                Preview
            </ButtonStyle>
        </Description>
        </Card>
        )}
        </Section1>

        
    );
    };

    export default CardPremium;
