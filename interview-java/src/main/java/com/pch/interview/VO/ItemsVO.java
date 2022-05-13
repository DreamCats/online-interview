package com.pch.interview.VO;

import lombok.Data;

@Data
public class ItemsVO {

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

}
