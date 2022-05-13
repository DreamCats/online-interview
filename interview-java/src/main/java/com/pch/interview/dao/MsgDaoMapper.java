package com.pch.interview.dao;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.pch.interview.DO.MsgDO;
import com.pch.interview.dto.MsgDTO;
import org.apache.ibatis.annotations.Param;

public interface MsgDaoMapper extends BaseMapper<MsgDO> {

    MsgDTO selectLatestMsgs(@Param("status")Integer status);
}
