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
    Text
} from './LoginElements';

const Login = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to='/'>sanus</Icon>
                    <FormContent>
                        <Form action='#'>
                            <FormH1>Bitte logge Dich ein, um die App zu benutzen.</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' required />
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required />
                            <FormButton type='submit'>Einloggen</FormButton>
                            <Text>Noch keinen Account?</Text>
                            <Text>Passwort vergessen?</Text>
                            <Text>Nutzernamen vergessen?</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    );
};

export default Login;
