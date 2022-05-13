package com.pch.interview.utils;

public enum SecrectKeyEnum {

    wxx("wx525579a990736877", "e1d5bb1814d6009685a8e61ba6fedcbc");

    private String appid;

    private String secret;

    SecrectKeyEnum(String appid, String secret){
        this.appid = appid;
        this.secret = secret;
    }

    public String getAppid() {
        return appid;
    }

    public String getSecret() {
        return secret;
    }
}
