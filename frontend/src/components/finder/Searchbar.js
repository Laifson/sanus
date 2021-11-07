import React from 'react';
import {
    Container,
    FormWrap,
    SearchParamsRowTop,
    SearchParamsRowBottom,
    Form,
    FormLabel,
    InputWrap,
    FormInput,
    DropdownGroup,
    DropdownRadius,
    BarrierWrap,
    BarrierCheck,
    ResetButton,
    SearchButton, ButtonWrapper,
} from './SearchbarElements';

const Searchbar = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Form action='#'>
                        <SearchParamsRowTop>
                            <InputWrap>
                                <FormLabel>Ort</FormLabel>
                                <FormInput type='text'/>
                            </InputWrap>
                            <InputWrap>
                                <FormLabel>Plz</FormLabel>
                                <FormInput type='text'/>
                            </InputWrap>
                            <InputWrap>
                                <FormLabel>Umkreis</FormLabel>
                                <DropdownRadius>
                                    <option value="">5km</option>
                                    <option value="1">10km</option>
                                    <option value="2">25km</option>
                                    <option value="3">50km</option>
                                    <option value="4">100km</option>
                                </DropdownRadius>
                            </InputWrap>
                        </SearchParamsRowTop>
                        <SearchParamsRowBottom>
                            <InputWrap>
                                <FormLabel>Name</FormLabel>
                                <FormInput type='text'/>
                            </InputWrap>
                            <InputWrap>
                                <FormLabel>Patientengruppe</FormLabel>
                                <DropdownGroup>
                                    <option value=""/>
                                    <option value="1">Erwachsene</option>
                                    <option value="2">Kinder und Jugendliche</option>
                                </DropdownGroup>
                            </InputWrap>
                        </SearchParamsRowBottom>
                        <BarrierWrap>
                            <FormLabel>Barrierefreier Zugang?</FormLabel>
                            <BarrierCheck type="checkbox"/>
                        </BarrierWrap>
                        <ButtonWrapper>
                        <ResetButton>Suche zurücksetzen</ResetButton>
                        <SearchButton>Suchen</SearchButton>
                        </ButtonWrapper>
                    </Form>
                </FormWrap>
            </Container>
        </>
    );
};

export default Searchbar;
