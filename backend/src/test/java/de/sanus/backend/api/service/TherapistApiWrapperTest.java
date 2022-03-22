package de.sanus.backend.api.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import de.sanus.backend.api.dto.KbvResultDto;
import de.sanus.backend.api.dto.PractitionerEntriesDto;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.io.File;
import java.io.IOException;
import java.util.List;


class TherapistApiWrapperTest {

    TherapistApiWrapper therapistApiWrapper = new TherapistApiWrapper();
    ObjectMapper mapper = new ObjectMapper();

    @Test
    @DisplayName("Should return a wrapped object with three list entries")
    void filterEntriesTest() throws IOException {

        //given
        KbvResultDto response = mapper.readValue(new File("example.json"), KbvResultDto.class);

        KbvResultDto excepted = mapper.readValue(new File("wrapped-example.json"), KbvResultDto.class);

        //when
        List<PractitionerEntriesDto> actual = therapistApiWrapper.filterEntries(response.getEntry());

        //then
        Assertions.assertEquals(actual, excepted);

    }
}