package de.sanus.backend.model;

import de.sanus.backend.model.enums.Accessibility;
import de.sanus.backend.model.enums.Status;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
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

    private List<String> languages;

    private Boolean forChildren;

    private Accessibility accessibility;
    private Status status;

}
