package com.pch.interview.utils;

public enum ResponseEnum {

    OK("0", "成功"),
    DBERR("4001", "数据库查询错误"),
    NODATA("4002", "无数据"),
    DATAEXIST("4003", "数据已存在"),
    DATAERR("4004", "数据错误"),
    SESSIONERR("4101", "用户未登录"),
    LOGINERR("4102", "用户登录失败"),
    PARAMERR("4103", "参数错误"),
    USERERR("4104", "用户不存在或未激活"),
    ROLEERR("4105", "用户身份错误"),
    PWDERR("4106", "密码错误"),
    REQERR("4201", "非法请求或请求次数受限"),
    IPERR("4202", "IP受限"),
    THIRDERR("4301", "第三方系统错误"),
    IOERR("4302", "文件读写错误"),
    SERVERERR("4500", "内部错误"),
    UNKOWNERR("4501", "未知错误");


    private String code;

    private String message;

    ResponseEnum(String code, String message){
        this.code = code;
        this.message = message;
    }

    public String getCode() {
        return code;
    }

public String getMessage() {
        return message;
    }
}
