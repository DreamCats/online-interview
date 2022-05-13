package com.pch.interview.modular.user;

import com.pch.interview.dto.WxUserDTO;

public interface UserSevice {

    boolean addWxUser(WxUserDTO wxUserDTO);

    boolean queryWxUserByUuid(String uuid);

    boolean updateWxUserByUuid(WxUserDTO wxUserDTO);

}
