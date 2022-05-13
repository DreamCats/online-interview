package com.pch.interview.modular.msg;

import com.pch.interview.common.ResponseData;
import com.pch.interview.dao.MsgDaoMapper;
import com.pch.interview.dto.MsgDTO;
import com.pch.interview.utils.ResponseEnum;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpRequest;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/")
public class MsgController {

    @Autowired
    private MsgDaoMapper msgDaoMapper;

    @RequestMapping("msg")
    ResponseData get_msg(HttpServletRequest request){
        Integer status = Integer.valueOf(request.getParameter("status"));
        ResponseData<MsgDTO> responseData = new ResponseData<>();
        try {
            MsgDTO msgDTO = msgDaoMapper.selectLatestMsgs(status);
            if (msgDTO == null){
                responseData.setRe_code(ResponseEnum.NODATA.getCode());
                responseData.setMsg(ResponseEnum.NODATA.getMessage());
            }else {
                responseData.setData(msgDTO);
                responseData.setRe_code(ResponseEnum.OK.getCode());
                responseData.setMsg(ResponseEnum.OK.getMessage());
            }
        }catch (Exception e){
            responseData.setRe_code(ResponseEnum.DBERR.getCode());
            responseData.setMsg(ResponseEnum.DBERR.getMessage());
        }
        return responseData;
    }

}
