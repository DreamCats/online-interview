package com.pch.interview.common;

import lombok.Data;

@Data
public class ResponseData<T> {

    private T data; // 返回的数据

    private String msg;

    private String re_code;


    //    private long timestamp = System.currentTimeMillis();
}
