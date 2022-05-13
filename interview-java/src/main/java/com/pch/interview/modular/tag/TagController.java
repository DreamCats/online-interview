package com.pch.interview.modular.tag;

import com.pch.interview.common.ResponseData;
import com.pch.interview.dao.WxTagsDaoMapper;
import com.pch.interview.dto.WxTagsDTO;
import com.pch.interview.utils.ResponseEnum;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/tag/list")
public class TagController {

    @Autowired
    private WxTagsDaoMapper wxTagsDaoMapper;

    @GetMapping("all")
    ResponseData get_tag_list_all(){
        List<WxTagsDTO> wxTagsDTOS = wxTagsDaoMapper.selectAllTags();
        ResponseData<List<WxTagsDTO>> responseData = new ResponseData<>();
        responseData.setData(wxTagsDTOS);
        responseData.setRe_code(ResponseEnum.OK.getCode());
        responseData.setMsg(ResponseEnum.OK.getMessage());
        return responseData;
    }
}
