package com.pch.interview.modular.cp;

import com.pch.interview.common.ResponseData;
import com.pch.interview.dao.WxCpDaoMapper;
import com.pch.interview.dto.WxCpDTO;
import com.pch.interview.utils.ResponseEnum;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/cp/list/")
public class CpController {

    @Autowired
    private WxCpDaoMapper wxCpDaoMapper;

    @GetMapping("all")
    ResponseData get_cp_list_all(){
        List<WxCpDTO> wxCpDTOS = wxCpDaoMapper.selectAllCps();
        ResponseData<List<WxCpDTO>> responseData = new ResponseData<>();
        responseData.setData(wxCpDTOS);
        responseData.setRe_code(ResponseEnum.OK.getCode());
        responseData.setMsg(ResponseEnum.OK.getMessage());
        return responseData;
    }
}
