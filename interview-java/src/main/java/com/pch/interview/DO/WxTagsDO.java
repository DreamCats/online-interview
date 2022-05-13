package com.pch.interview.DO;

import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

import java.sql.Timestamp;
import java.util.Date;

@Data
@TableName("wx_tag")
public class WxTagsDO {

    private Integer id;

    private String uuid;

    private Integer tag_type;

    private String tag_name;

    private String url;

    private Date create_time;

    private Timestamp update_time;
}
