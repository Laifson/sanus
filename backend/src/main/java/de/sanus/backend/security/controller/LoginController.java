package de.sanus.backend.security.controller;

import de.sanus.backend.security.dto.LoginDto;
import de.sanus.backend.security.service.JWTUtilService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;

/*
 * Controller for Credential based logins
 */
@RestController
@RequestMapping("auth/login")
public class LoginController {

    private final AuthenticationManager authenticationManager;
    private final JWTUtilService jwtService;

    @Autowired
    public LoginController(AuthenticationManager authenticationManager, JWTUtilService jwtService) {
        this.authenticationManager = authenticationManager;
        this.jwtService = jwtService;
    }

    @PostMapping
    public String login(@RequestBody LoginDto loginDto){

        this.authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginDto.getUsername(), loginDto.getPassword()));

        return jwtService.createToken(new HashMap<>(), loginDto.getUsername());
    }

}
