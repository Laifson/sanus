// import React from "react";
// import styled from "styled-components/macro";
// import TherapistCard from "../cards/TherapistCard";
//
// export default function Board({ therapists, onExpand, onDelete }) {
//     return (
//         <StyledContainer>
//             <h1>Board</h1>
// <List>
//     {therapists.map(therapist => {
//         return(
//             <li key={therapist.id}>
//                 <TherapistCard therapist={therapist} onExpand={onExpand} onDelete={onDelete} />
//             </li>
//         )
//     })}
// </List>
//         </StyledContainer>
//     )
// }
//
// const StyledContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 90vh;
// `
// const List = styled.ul`
//   list-style: none;
//   padding: 0;
// `