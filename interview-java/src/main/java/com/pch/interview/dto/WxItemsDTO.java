package com.pch.interview.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class WxItemsDTO {

    private Integer id;

    private String uuid;

    private String tc_uuid;

    private Integer tag_type;

    private String title;

    private Integer s_id;

    private String url;

    private Integer view_count;

    private Integer like_count;

    private String content;

    private String publish_time;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    private LocalDateTime createTime;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    private LocalDateTime updateTime;
}
