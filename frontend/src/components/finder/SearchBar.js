import React, {useState} from 'react';
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

const SearchBar = ({handleSearchButton}) => {
    const [paramValue, setParamValue] = useState({
        city: "",
        postalCode: "",
        radius: "5km",
        lastName: "",
    });

    const [filter, setFilter] = useState({
        forChildren: "",
        restriction: ""
    })

    function handleParamChange(event) {
        setParamValue({...paramValue,[event.target.name]:event.target.value});
        console.log(event.target.name);
    }

    function handleFilterChange(event) {
        setFilter({...filter,[event.target.name]:event.target.value});
    }

    const createParams = () => {
        const location = paramValue.postalCode.length ? "%26plz=" + paramValue.postalCode: "%26ort=" + paramValue.city;
        return location + "%26distanz=" + paramValue.radius + "%26family=" + paramValue.lastName
    }

    function handleSubmit(event) {
        event.preventDefault();
        handleSearchButton(createParams());
    }

    function handleReset(event) {
        event.preventDefault();
        setParamValue({
            city: "",
            postalCode: "",
            radius: "5km",
            lastName: "",
        })
        setFilter({
            forChildren: "",
            restriction: ""
    })
    }

    return (
        <Container>
            <FormWrap>
                <Form>
                    <SearchParamsRowTop>
                        <InputWrap>
                            <FormLabel>Ort</FormLabel>
                            <FormInput name='city' value={paramValue.city} onChange={handleParamChange} type='text'/>
                        </InputWrap>
                        <InputWrap>
                            <FormLabel>Plz</FormLabel>
                            <FormInput name='postalCode' value={paramValue.postalCode} onChange={handleParamChange} type='text'/>
                        </InputWrap>
                        <InputWrap>
                            <FormLabel>Umkreis</FormLabel>
                            <DropdownRadius name='radius' value={paramValue.radius} onChange={handleParamChange}>
                                <option value="5km">5km</option>
                                <option value="10km">10km</option>
                                <option value="25km">25km</option>
                                <option value="50km">50km</option>
                                <option value="100km">100km</option>
                            </DropdownRadius>
                        </InputWrap>
                    </SearchParamsRowTop>
                    <SearchParamsRowBottom>
                        <InputWrap>
                            <FormLabel>Name</FormLabel>
                            <FormInput name='lastName' value={paramValue.lastName} onChange={handleParamChange} type='text'/>
                        </InputWrap>
                        <InputWrap>
                            <FormLabel>Patientengruppe</FormLabel>
                            <DropdownGroup name='forChildren' value={filter.forChildren} onChange={handleFilterChange}>
                                <option value=""/>
                                <option value="1">Erwachsene</option>
                                <option value="2">Kinder und Jugendliche</option>
                            </DropdownGroup>
                        </InputWrap>
                        <BarrierWrap>
                            <FormLabel>Barrierefreier Zugang?</FormLabel>
                            <BarrierCheck type="checkbox" name='restriction' value={filter.restriction} onChange={handleFilterChange}/>
                        </BarrierWrap>
                    </SearchParamsRowBottom>
                    <ButtonWrapper>
                        <ResetButton onClick={handleReset}>Suche zurücksetzen</ResetButton>
                        <SearchButton onClick={handleSubmit} type='submit'>Suchen</SearchButton>
                    </ButtonWrapper>
                </Form>
            </FormWrap>
        </Container>
    );
}

export default SearchBar;
