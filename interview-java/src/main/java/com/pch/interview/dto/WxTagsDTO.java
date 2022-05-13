package com.pch.interview.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.sql.Timestamp;
import java.util.Date;

@Data
public class WxTagsDTO {

    private Integer id;

    private String tag_name;

    private String url;

    private String uuid;
}
