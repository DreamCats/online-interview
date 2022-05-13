package com.pch.interview.DO;

import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

import java.sql.Date;
import java.sql.Timestamp;

@Data
@TableName("wx_user_like_item")
public class WxUserLikeDO {

    private Integer id;

    private String uuid;

    private String userId;

    private String itemId;

    private Date createTime;

    private Timestamp updateTime;

}
