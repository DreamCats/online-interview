package com.pch.interview.DO;

import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

import java.sql.Timestamp;
import java.util.Date;

@Data
@TableName(value = "wx_msg")
public class MsgDO {

    private Integer id;

    private Integer status;

    private String content;

    private Date create_time;

    private Timestamp update_time;
}
