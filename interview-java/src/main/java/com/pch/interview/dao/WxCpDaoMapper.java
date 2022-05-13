package com.pch.interview.dao;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.pch.interview.DO.WxCpDO;
import com.pch.interview.dto.WxCpDTO;

import java.util.List;

public interface WxCpDaoMapper extends BaseMapper<WxCpDO> {

    List<WxCpDTO> selectAllCps();
}
