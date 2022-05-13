package com.pch.interview.dao;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.pch.interview.DO.WxUserDO;
import com.pch.interview.dto.WxUserDTO;

public interface WxUserDaoMapper extends BaseMapper<WxUserDO> {


    WxUserDTO selectUserByOpenid(String openid);

    boolean updateUserByUuid(String uuid);

    boolean addUser(WxUserDTO wxUserDTO);

}
