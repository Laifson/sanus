package de.sanus.backend.api.service;

import de.sanus.backend.api.dto.TherapistDto;
import de.sanus.backend.api.dto.resource.EntryDto;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TherapistApiWrapper {

    public List<EntryDto> filterEntries(List<TherapistDto> therapistDtos) {

        List<EntryDto> wrappedList = new ArrayList<>();

        int firstStartIndex = 0;
        int firstEndIndex = 2;

        for(TherapistDto therapistDto : therapistDtos) {
            wrappedList = (therapistDto.getEntry().subList(firstStartIndex, firstEndIndex));
            firstStartIndex = firstStartIndex + 3;
            firstEndIndex = firstEndIndex + 3;
        }
        return wrappedList;

    }
}
