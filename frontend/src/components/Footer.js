import React from 'react';
import {
    StyledFooter,
    SocialMedia,
} from '../styles/Footer';

const Footer = () => {
    return (
        <StyledFooter>
            <SocialMedia>
                <a href="https://www.facebook.com/hybridsoldiersmx" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://x.com/HybridSoldiers" target="_blank" rel="noopener noreferrer">X</a>
                <a href="https://www.instagram.com/hybridsoldiersmx/" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://www.tiktok.com/tag/hybridsoldiersmx" target="_blank" rel="noopener noreferrer">TikTok</a>
            </SocialMedia>
            <div>
                <small>Hybrid Soldiers México 2025 ©</small>
            </div>
        </StyledFooter>
    );
};

export default Footer;
