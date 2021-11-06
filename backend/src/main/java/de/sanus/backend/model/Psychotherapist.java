package de.sanus.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Psychotherapist {

    private String id;
    private String title;
    private String firstName;
    private String lastName;

    private String gender;

    private String email;
    private String website;

    private String street;
    private String postalCode;
    private String city;

}
