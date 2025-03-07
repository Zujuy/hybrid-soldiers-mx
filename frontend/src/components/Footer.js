import React from 'react';
import {
    StyledFooter,
    SocialMedia,
} from '../styles/Footer';

const Footer = () => {
    return (
        <StyledFooter>
            <SocialMedia>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            </SocialMedia>
            <div>
                <small>Hybrid Soldiers México 2025 ©</small>
            </div>
        </StyledFooter>
    );
};

export default Footer;
