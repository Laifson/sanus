package de.sanus.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping
public class PsychotherapistController {

    @RequestMapping("/hey")
    public String hey() {
        return "Hey dude";
    }

    @GetMapping(value = "/callclienthey")
    private String getHeyClient() {
        String uri = "http://localhost:8080/hey";
        RestTemplate restTemplate = new RestTemplate();
        String result = restTemplate.getForObject(uri, String.class);
        return result;
    }

    @GetMapping(value = "/countries")
    public List<Object> getCountries() {
        String url = "https://restcountries.com/v3.1/name/germany";
        RestTemplate restTemplate = new RestTemplate();

        Object[] countries = restTemplate.getForObject(url, Object[].class);

        return Arrays.asList(countries);

    }
}
