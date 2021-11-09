package de.sanus.backend.model;

import de.sanus.backend.model.enums.Status;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Therapist {

    private String id;
    private String title;
    private String firstName;
    private String lastName;

    private String gender;

    private String phone;
    private String email;
    private String website;

    private String street;
    private String postalCode;
    private String city;

    private Boolean forChildren;

    private Status status;

}
