package com.pch.interview.DO;

import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

import java.sql.Timestamp;
import java.util.Date;

@Data
@TableName(value = "wx_cp")
public class WxCpDO {

    private Integer id;

    private String uuid;

    private String cp_name;

    private String url;

    private Date create_time;

    private Timestamp update_time;
}
