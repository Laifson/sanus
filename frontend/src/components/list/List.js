import React, {useState} from "react";
import TherapistCard from "../cards/TherapistCardNew";
import {
    TopBar,
    CardContainer,
    InputWrap,
    LabelAndButtonWrapper
} from "./ListElements";
import useTherapists from "../../hooks/useTherapists";

export default function List() {
    const {therapists, setTherapists} = useTherapists();
    const [search, setSearch] = useState("");

    const filteredTherapists = therapists.filter(therapist =>
        (therapist.firstName.toLowerCase() + therapist.lastName).toLowerCase().includes(search.toLowerCase())
    )

    const handleSearch = event => {
        const newSearch = event.target.value
        setSearch(newSearch)
    }

    return (
        <div class="container">
            <TopBar>
                <div class="element-container">
                    <InputWrap class="control">
                        <input class="textarea" type="text" placeholder="Nach Namen suchen" onChange={handleSearch}
                               value={search}/>
                    </InputWrap>
                </div>
                <LabelAndButtonWrapper>
                    <InputWrap class="control">
                        <div class="textfield">Sortieren:</div>
                        <div class="select">
                            <select>
                                <option value=""></option>
                                <option value="Name" onClick={() => setTherapists(therapists.sort((a, b) => a.lastName.localeCompare(b.lastName)))}>Name</option>
                                <option value="Date" onClick={() => setTherapists(therapists.sort((a, b) => a.dateAdded.localeCompare(b.dateAdded)))}>Datum</option>
                                <option value="Status" onClick={() => setTherapists(therapists.sort((a, b) => a.status.localeCompare(b.status)))}>Status</option>
                            </select>
                        </div>
                    </InputWrap>
                </LabelAndButtonWrapper>
            </TopBar>
            <CardContainer>
                {filteredTherapists.map(therapist => <TherapistCard key={therapist.id} therapist={therapist}/>)}
            </CardContainer>
        </div>
    )
}
