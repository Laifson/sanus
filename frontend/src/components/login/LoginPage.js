import React from 'react';
import {
    Container,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormButton,
    Text,
} from './LoginElements';

const LoginPage = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to='/'>sanus</Icon>
                    <FormContent>
                        <Form action='#'>
                            <FormH1>Bitte logge Dich ein, <br/> um die App zu benutzen.</FormH1>
                            <FormLabel htmlFor='for'>E-Mail</FormLabel>
                            <FormInput type='email' required />
                            <FormLabel htmlFor='for'>Passwort</FormLabel>
                            <FormInput type='password' required />
                            <FormButton type='submit'>Einloggen</FormButton>
                            <Text>Account anlegen.</Text>
                            <Text>Passwort vergessen?</Text>
                            <Text>Nutzernamen vergessen?</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    );
};

export default LoginPage;
