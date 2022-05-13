package com.pch.interview.common;

import com.pch.interview.utils.ResponseEnum;

public class ResponseDataUtil<T> {

    private ResponseData<T> responseData;

    public ResponseDataUtil(){
        responseData = new ResponseData<T>();
        responseData.setMsg(ResponseEnum.OK.getMessage());
        responseData.setRe_code(ResponseEnum.OK.getCode());
    }

    /**
     * 封装结果
     * @param t
     * @return
     */
    public ResponseData<T> setData(T t) {
        this.responseData.setData(t);
        this.responseData.setMsg("成功");
        responseData.setRe_code("0");
        return this.responseData;
    }

}
