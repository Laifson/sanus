package de.sanus.backend.api.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import de.sanus.backend.api.dto.KbvResultDto;
import de.sanus.backend.api.dto.resource.EntryDto;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;

class TherapistApiWrapperTest {

    ObjectMapper mapper = new ObjectMapper();




    @Test
    @DisplayName("Should return a wrapped object with three list entries")
    void filterEntriesTest() throws IOException {

        //JSON file to Java object
        KbvResultDto obj = mapper.readValue(new File("example.json"), KbvResultDto.class);

    }
}