package com.pch.interview.modular.items;

import com.pch.interview.dao.ItemsDaoMapper;
import com.pch.interview.dto.RandomItemDTO;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
public class ItemsServiceImpl implements ItemsService{

    @Autowired
    private ItemsDaoMapper itemsDaoMapper;

    @Override
    public List<RandomItemDTO> selectItemsByTagType(Integer tagType, Integer count) {
        List<RandomItemDTO> randomItemDTOList = new ArrayList<>();
        try {
            randomItemDTOList  = itemsDaoMapper.selectItemsByTagType(tagType, count);
        }catch (Exception e){
            e.printStackTrace();
        }
        return randomItemDTOList;
    }

    @Override
    public List<RandomItemDTO> selectItemsByRandomTagType(Integer count) {
        List<RandomItemDTO> randomItemDTOList = new ArrayList<>();
        try {
            randomItemDTOList  = itemsDaoMapper.selectRandomItemsByTagType(count);
        }catch (Exception e){
            e.printStackTrace();
        }
        return randomItemDTOList;
    }

    @Override
    public List<RandomItemDTO> selectItemsByTagTypeNot(Integer tagType, Integer count) {
        List<RandomItemDTO> randomItemDTOList = new ArrayList<>();
        try {
            randomItemDTOList  = itemsDaoMapper.selectItemsByTagTypeNot(tagType, count);
        }catch (Exception e){
            e.printStackTrace();
        }
        return randomItemDTOList;

    }
}
