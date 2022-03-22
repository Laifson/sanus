package de.sanus.backend.controller;

import de.sanus.backend.model.UserResponseDto;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
@RequestMapping("api/user")
public class UserController {

    @GetMapping("/me")
    public UserResponseDto getLoggedInUser(Principal principal){
        return new UserResponseDto(principal.getName());

    }
}
