package com.pch.interview.modular.user;


 import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
 import com.pch.interview.DO.WxUserDO;
 import com.pch.interview.common.MiniprogramResult;
import com.pch.interview.common.ResponseData;
import com.pch.interview.dao.WxUserDaoMapper;
import com.pch.interview.dto.WxUserDTO;
 import com.pch.interview.dto.WxUserRequestDTO;
 import com.pch.interview.dto.WxUserResponseDTO;
 import com.pch.interview.utils.ResponseEnum;
import com.pch.interview.utils.SecrectKeyEnum;
import lombok.extern.slf4j.Slf4j;
 import org.springframework.beans.BeanUtils;
 import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
 import org.springframework.web.bind.annotation.*;
 import org.springframework.web.client.RestTemplate;

import javax.servlet.http.HttpServletRequest;

@Slf4j
@RestController
@RequestMapping("/user/")
public class UserController {

    @Autowired
    private WxUserDaoMapper wxUserDaoMapper;

    @Autowired
    private UserSevice userSevice;

    @GetMapping("info")
    public ResponseData get_user_info_code(HttpServletRequest request) throws JsonProcessingException {
        String  wx_code = request.getParameter("code");
        String openid = get_code2Session(wx_code).getOpenid();
        ResponseData responseData = new ResponseData();
        if (openid==null){
            responseData.setRe_code(ResponseEnum.USERERR.getCode());
            responseData.setMsg("openid");
            return responseData;
        }
        try {
            QueryWrapper<WxUserDO> queryWrapper = new QueryWrapper<>();
            queryWrapper.eq("uuid", openid);
            WxUserDO wxUserDO = wxUserDaoMapper.selectOne(queryWrapper);
            if (wxUserDO ==null){
                responseData.setRe_code(ResponseEnum.USERERR.getCode());
                responseData.setMsg("user not found");
                return responseData;
            }
            WxUserResponseDTO responseDTO = new WxUserResponseDTO();
            BeanUtils.copyProperties(wxUserDO, responseDTO);
            responseDTO.setUser_name(wxUserDO.getUserName());
            responseDTO.setCurrent_date(wxUserDO.getCurrentDate());
            responseData.setData(responseDTO);
            responseData.setRe_code(ResponseEnum.OK.getCode());
            responseData.setMsg("查询成功");
            System.out.println(wxUserDO.getUserName());
        }catch (Exception e){
            e.printStackTrace();
        }
        return responseData;
    }

    public MiniprogramResult get_code2Session(String code) throws JsonProcessingException {
        MiniprogramResult miniprogramResult = new MiniprogramResult();
        String authorizationCodeUrl = "https://api.weixin.qq.com/sns/jscode2session?appid=" + SecrectKeyEnum.wxx.getAppid() + "&secret=" + SecrectKeyEnum.wxx.getSecret() + "&js_code=" + code + "&grant_type=authorization_code";
        // 微信的接口
        RestTemplate restTemplate = new RestTemplate();
        // 进行网络请求,访问url接口
        ResponseEntity<String> responseEntity = restTemplate.exchange(authorizationCodeUrl, HttpMethod.GET, null, String.class);
        // 根据返回值进行后续操作
        if (responseEntity != null && responseEntity.getStatusCode() == HttpStatus.OK) {
            String sessionData = JSONObject.toJSONString(responseEntity.getBody());
            Object parseSessionData = JSON.parse(sessionData);
            sessionData = parseSessionData.toString();
            // 此处为返回json数据转换成javabean，可以自己查阅其他材料写
            ObjectMapper objectMapper = new ObjectMapper();
            miniprogramResult = objectMapper.readValue(sessionData, MiniprogramResult.class);

        }
        return miniprogramResult;
    }

    @GetMapping("active")
    public ResponseData update_user_active(WxUserRequestDTO requestDTO, HttpServletRequest req){
        String uuid = requestDTO.getUuid();
        String code = requestDTO.getCode();
        ResponseData responseData = new ResponseData();
        if (code == null || !code.equals("dreamcat")){
            responseData.setRe_code(ResponseEnum.DBERR.getCode());
            responseData.setMsg(ResponseEnum.DBERR.getMessage());
            return responseData;
        }
        try {
            wxUserDaoMapper.updateUserByUuid(uuid);
        }catch (Exception e){
            e.printStackTrace();
            responseData.setRe_code(ResponseEnum.DBERR.getCode());
            responseData.setMsg(ResponseEnum.DBERR.getMessage());
            return responseData;
        }
        responseData.setRe_code(ResponseEnum.OK.getCode());
        responseData.setMsg("更新成功");
        return responseData;
    }

    @PostMapping("add")
    public ResponseData add_user(@RequestBody WxUserRequestDTO wxUserRequestDTO, HttpServletRequest request) throws JsonProcessingException {
        ResponseData responseData = new ResponseData();
        String code = wxUserRequestDTO.getCode();
        String openid = get_code2Session(code).getOpenid();
        if (openid == null){
            responseData.setRe_code(ResponseEnum.USERERR.getCode());
            responseData.setMsg("openid is null");
            return responseData;
        }
        try {
            WxUserDTO wxUserDTO = new WxUserDTO();
            if (!userSevice.queryWxUserByUuid(openid)){
                wxUserDTO.setUrl(wxUserRequestDTO.getUserInfo().getAvatarUrl());
                wxUserDTO.setUserName(wxUserRequestDTO.getUserInfo().getNickName());
                wxUserDTO.setActive(0);
                wxUserDTO.setUuid(openid);
                userSevice.addWxUser(wxUserDTO);
            }else {
                wxUserDTO.setUrl(wxUserRequestDTO.getUserInfo().getAvatarUrl());
                wxUserDTO.setUserName(wxUserRequestDTO.getUserInfo().getNickName());
                wxUserDTO.setUuid(openid);
                userSevice.updateWxUserByUuid(wxUserDTO);
            }

        }catch (Exception e){
            e.printStackTrace();
            responseData.setRe_code(ResponseEnum.USERERR.getCode());
            responseData.setMsg("openid is null");
            return responseData;
        }
        responseData.setRe_code(ResponseEnum.OK.getCode());
        responseData.setMsg("添加成功");
        return responseData;
    }
}
