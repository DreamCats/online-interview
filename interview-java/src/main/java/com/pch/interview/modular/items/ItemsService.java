package com.pch.interview.modular.items;

import com.pch.interview.dto.RandomItemDTO;

import java.util.List;

public interface ItemsService {

    List<RandomItemDTO> selectItemsByTagType(Integer tagType, Integer count);

    List<RandomItemDTO> selectItemsByRandomTagType(Integer count);

    List<RandomItemDTO> selectItemsByTagTypeNot(Integer tagType, Integer count);

}
