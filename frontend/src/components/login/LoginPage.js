import React, {useContext, useState} from 'react';
import {
    Container,
    Form,
    InputContainer,
    InputWrap,
    ButtonWrapper,
    IconWrapper,
    FacebookLogo,
    GoogleLogo,
    GithubLogo
} from './LoginElements';
import {AuthContext} from "../../context/AuthProvider";
import SocialLogo from 'social-logos';

const initialState = {
    username: '',
    password: '',
}

const LoginPage = () => {
    const [credentials, setCredentials] = useState(initialState)
    const {login} = useContext(AuthContext)

    /* TODO Get from backend */
    const clientId = "0e3dbdfa42eb50c3f6fb"
    const handleChange = event => {
        setCredentials({...credentials, [event.target.name]: event.target.value})
    }

    const handleSubmit = event => {
        event.preventDefault()
        login(credentials)
            }

    const loginWithGithub = () => {
        window.open("https://github.com/login/oauth/authorize?client_id=" + clientId)
    }

    return (
        <Container>
            <Form>
                <h5>Lieber Nutzer, um Zugriff auf die App zu erhalten, logge Dich bitte ein</h5>
                <InputContainer>
                    <InputWrap>
                        <input
                            class='input'
                            name='username'
                            placeholder='Nutzername'
                            value={credentials.username}
                            onChange={handleChange}
                            type='text'
                        />
                    </InputWrap>
                </InputContainer>
                <InputContainer>
                    <InputWrap>
                        <input
                            class='input'
                            name='password'
                            placeholder='Passwort'
                            value={credentials.password}
                            onChange={handleChange}
                            type='password'
                        />
                    </InputWrap>
                </InputContainer>
                <ButtonWrapper>
                    <button class='button' onClick={handleSubmit}>Login</button>
                </ButtonWrapper>
                <IconWrapper>
                    <FacebookLogo>
                        <SocialLogo icon="facebook" size={48} onClick={loginWithGithub}/>
                    </FacebookLogo>
                    <GoogleLogo>
                        <SocialLogo icon="google" size={48} onClick={loginWithGithub}/>
                    </GoogleLogo>
                    <GithubLogo>
                        <SocialLogo icon="github" size={48} onClick={loginWithGithub}/>
                    </GithubLogo>
                </IconWrapper>
                <label>Passwort vergessen</label>
                <label>Nutzernamen vergessen</label>
            </Form>
        </Container>
    );
};

export default LoginPage;
