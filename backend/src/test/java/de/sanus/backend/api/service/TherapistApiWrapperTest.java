package de.sanus.backend.api.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import de.sanus.backend.api.dto.KbvResultDto;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.io.File;
import java.io.IOException;


class TherapistApiWrapperTest {

    TherapistApiWrapper therapistApiWrapper = new TherapistApiWrapper();
    ObjectMapper mapper = new ObjectMapper();

    @Test
    @DisplayName("Should return a wrapped object with three list entries")
    void filterEntriesTest() throws IOException {

        //given
        KbvResultDto obj = mapper.readValue(new File("example.json"), KbvResultDto.class);

        KbvResultDto excepted = mapper.readValue(new File("wrapped-example.json"), KbvResultDto.class);

        //when
        therapistApiWrapper.filterEntries(obj);

        //then
    }
}