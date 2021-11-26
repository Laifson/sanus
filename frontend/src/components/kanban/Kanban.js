import React from "react";
import useTherapists from "../../hooks/useTherapists";
import { KanbanComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-kanban";
import { Container } from "./KanbanElements"

export default function Kanban() {
    const {therapists, handleChangeStatus} = useTherapists()
    return (
        <Container class="container">
        <KanbanComponent class="kanban" keyField="status" dataSource={therapists} cardSettings={{ contentField: "lastName", headerField: "firstName" }}>
            <ColumnsDirective>
                <ColumnDirective headerText="Kartei" keyField="OPEN"/>
                <ColumnDirective headerText="Warteliste" keyField="WAITLIST"/>
                <ColumnDirective headerText="in Behandlung" keyField="ACTIVE"/>
                <ColumnDirective headerText="derzeit keine Termine" keyField="OCCUPIED"/>
            </ColumnsDirective>
        </KanbanComponent>
        </Container>
)
}
