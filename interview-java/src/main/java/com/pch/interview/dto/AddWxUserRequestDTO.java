package com.pch.interview.dto;

import lombok.Data;

@Data
public class AddWxUserRequestDTO {

    private WxUserDTO userInfo;

    private String code;
}
