import React, {useEffect, useState} from "react";
import TherapistCard from "../cards/TherapistCardNew";
import {
    Container,
    TopBar,
    CardContainer,
    InputWrap,
    LabelAndButtonWrapper
} from "./ListElements";

export default function List({ therapists, setTherapists, removeTherapist }) {
    const [search, setSearch] = useState("");
    const [sortType, setSortType] = useState('date');

    const filteredTherapists = therapists.filter(therapist =>
        (therapist.firstName.toLowerCase() + therapist.lastName.toLowerCase()).includes(search.toLowerCase())
    )

    const handleSearch = event => {
        const newSearch = event.target.value
        setSearch(newSearch)
    }

    useEffect(() => {
        const sortArray = type => {
            const types = {
                name: 'lastName',
                date: 'dateAdded',
                status: 'status',
            };
            const sortProperty = types[type];
            const sorted = [...therapists].sort((a, b) => b[sortProperty] - a[sortProperty]);
            setTherapists(sorted);
        };

        sortArray(sortType);
    }, [sortType]);

    return (
        <Container>
        <div class="container">
            <TopBar>
                <div class="element-container">
                    <InputWrap class="control">
                        <input class="input" type="text" placeholder="Nach Namen suchen" onChange={handleSearch}
                               value={search}/>
                    </InputWrap>
                </div>
                <LabelAndButtonWrapper>
                    <InputWrap class="control">
                        <div class="textfield">Sortieren:</div>
                        <div class="select">
                            <select onChange={(e) => setSortType(e.target.value)}>
                                <option value="date">Datum</option>
                                <option value="name">Name</option>
                                <option value="status">Status</option>
                            </select>
                        </div>
                    </InputWrap>
                </LabelAndButtonWrapper>
            </TopBar>
            <CardContainer>
                {filteredTherapists.map(therapist => <TherapistCard key={therapist.id} therapist={therapist} removeTherapist={removeTherapist}/>)}
            </CardContainer>
        </div>
        </Container>
    )
}
