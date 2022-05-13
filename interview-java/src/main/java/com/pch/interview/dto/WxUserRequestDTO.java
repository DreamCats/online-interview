package com.pch.interview.dto;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

@Data
@ApiModel("用户数据请求DTO")
public class WxUserRequestDTO {

    private WxUserInfoDTO userInfo;

    @ApiModelProperty(required = true)
    private String code;

    @ApiModelProperty(required = true)
    private String uuid;
}
