package com.pch.interview.common;

import lombok.Data;

import java.io.Serializable;

@Data
public class MiniprogramResult implements Serializable {
    private static final long serialVersionUID = 1L;

    /** 获取到openid */
    private String openid;
    /** 获取到unionid */
    private String unionid;
    /** 获取到session_key */
    private String session_key;
    /** 获取到的凭证 */
    private String access_token;
    /** 凭证有效时间，单位：秒 */
    private Integer expires_in;
    /** 错误码 */
    private Integer errcode;
    /** 错误信息 */
    private String errmsg;


}
