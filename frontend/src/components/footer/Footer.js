import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    FooterBottom,
    FooterBottomWrap,
    SanusLogo,
    AppVersion,
    AppRights,
} from './FooterElements';
import SanusLogoOnly from '../../img/sanus-logo-wo-text.svg';

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Infos zur App</FooterLinkTitle>
                            <FooterLink to='/'>Anleitung</FooterLink>
                            <FooterLink to='/'>Möglichkeiten</FooterLink>
                            <FooterLink to='/'>Nutzungsbedingungen</FooterLink>
                            <FooterLink to='/'>Datenschutz</FooterLink>
                            <FooterLink to='/'>Impressum</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Anlaufstellen</FooterLinkTitle>
                            <FooterLink to='/'>Telefonseelsorge</FooterLink>
                            <FooterLink to='/'>Krankenkassen</FooterLink>
                            <FooterLink to='/'>Kassenärztliche Vereinigung</FooterLink>
                            <FooterLink to='/'>Sozialpsychatrische Dienste</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Weitere Infoquellen</FooterLinkTitle>
                            <FooterLink to='/'>Krisenanlaufstellen</FooterLink>
                            <FooterLink to='/'>Weisse Liste</FooterLink>
                            <FooterLink to='/'>Gesundheitsinformationen</FooterLink>
                            <FooterLink to='/'>Neurologischer Dienst</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <FooterBottom>
                    <FooterBottomWrap>
                        <SanusLogo src={SanusLogoOnly} to='/' onClick={toggleHome} />
                        <AppVersion>version 0.1 (EARLY ACCESS)</AppVersion>
                        <AppRights>sanus © 2021 All rights reserved.</AppRights>
                    </FooterBottomWrap>
                </FooterBottom>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;