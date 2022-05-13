package com.pch.interview.dao;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.pch.interview.dto.WxTagsDTO;

import java.util.List;

public interface WxTagsDaoMapper extends BaseMapper<WxTagsDaoMapper> {

    List<WxTagsDTO> selectAllTags();

}
