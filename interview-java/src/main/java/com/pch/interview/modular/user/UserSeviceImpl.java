package com.pch.interview.modular.user;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.pch.interview.DO.WxUserDO;
import com.pch.interview.dao.WxUserDaoMapper;
import com.pch.interview.dto.WxUserDTO;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@Service
public class UserSeviceImpl implements UserSevice{

    @Autowired
    private WxUserDaoMapper wxUserDaoMapper;

    @Transactional(rollbackFor = Exception.class)
    @Override
    public boolean addWxUser(WxUserDTO wxUserDTO) {
        try {
            WxUserDO wxUserDO = new WxUserDO();
            wxUserDO.setUserName(wxUserDTO.getUserName());
            wxUserDO.setActive(wxUserDTO.getActive());
            wxUserDO.setUrl(wxUserDTO.getUrl());
            wxUserDO.setUuid(wxUserDTO.getUuid());
            wxUserDaoMapper.insert(wxUserDO);
        }catch (Exception e){
            e.printStackTrace();
            return false;
        }
        return true;
    }

    @Override
    public boolean queryWxUserByUuid(String uuid) {
        QueryWrapper<WxUserDO> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("uuid", uuid);
        WxUserDO wxUserDO = wxUserDaoMapper.selectOne(queryWrapper);
        return wxUserDO !=null;
    }

    @Override
    public boolean updateWxUserByUuid(WxUserDTO wxUserDTO) {
        WxUserDO wxUserDO = new WxUserDO();
        wxUserDO.setUrl(wxUserDTO.getUrl());
        wxUserDO.setUuid(wxUserDTO.getUuid());
        wxUserDO.setUserName(wxUserDTO.getUserName());
        UpdateWrapper<WxUserDO> wrapper = new UpdateWrapper<>();
        wrapper.eq("uuid", wxUserDO.getUuid());
        try {
            int update = wxUserDaoMapper.update(wxUserDO, wrapper);
            System.out.println(update);
        }catch (Exception e){
            e.printStackTrace();
            return false;
        }
        return true;
    }
}
