import React, {useState} from 'react';
import {
    Form,
    InputWrap,
    SelectAndButtonWrapper,
} from './SearchbarElements';

const SearchBar = ({handleSearchButton, setCardData}) => {
    const [paramValue, setParamValue] = useState({
        searchTerm: "",
        radius: "5",
    });

    const [filter, setFilter] = useState({
        forChildren: "",
        restriction: ""
    })


    function handleParamChange(event) {
        setParamValue({...paramValue, [event.target.name]: event.target.value});
    }

    function handleFilterChange(event) {
        setFilter({...filter, [event.target.name]: event.target.value});
    }

    const createParams = () => {
        let urlParam = "";
        const searchTermParts = paramValue.searchTerm.split(" ")
        let lastName = ""
        let postalCode = ""
        searchTermParts.forEach((p) => {
            if (parseInt(p).toString().length === 5) {
                postalCode = p.toString();
            } else {
                lastName = p;
            }
        })
        urlParam = postalCode ? urlParam + "%26plz=" + postalCode : urlParam;
        urlParam = lastName ? urlParam + "%26family=" + lastName : urlParam;
        return urlParam + "%26distanz=" + paramValue.radius
    }

    function handleSubmit(event) {
        event.preventDefault();
        handleSearchButton(createParams());
    }

    return (
        <div class="container">
            <Form>
                <div class="element-container">
                    <InputWrap class="control">
                        <input class="input" name='searchTerm' placeholder='PLZ und/oder Name des Therapeuten'
                               value={paramValue.searchTerm} onChange={handleParamChange}
                               type='text'
                        />
                    </InputWrap>
                </div>
                <SelectAndButtonWrapper>
                    <InputWrap class="control">
                        <div class="select">
                            <select name='radius' value={paramValue.radius} onChange={handleParamChange}>
                                <option value="5">5km</option>
                                <option value="10">10km</option>
                                <option value="25">25km</option>
                                <option value="50">50km</option>
                                <option value="100">100km</option>
                            </select>
                        </div>
                    </InputWrap>
                    <button class="button" onClick={handleSubmit} type='submit'>Suchen</button>
                </SelectAndButtonWrapper>
            </Form>
        </div>
    );
}

export default SearchBar;
