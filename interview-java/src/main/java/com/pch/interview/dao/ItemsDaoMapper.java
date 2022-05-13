package com.pch.interview.dao;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.pch.interview.DO.WxItemsDO;
import com.pch.interview.dto.RandomItemDTO;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface ItemsDaoMapper extends BaseMapper<WxItemsDO> {


    List<RandomItemDTO> selectRandomItemsByTagType(@Param("count") Integer count);

    List<RandomItemDTO> selectItemsByTagType(@Param("tagtype") Integer tagtype, @Param("count") Integer count);

    List<RandomItemDTO> selectItemsByTagTypeNot(@Param("tagtype") Integer tagtype, @Param("count") Integer count);
}
