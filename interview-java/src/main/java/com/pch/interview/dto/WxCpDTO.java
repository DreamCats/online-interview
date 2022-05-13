package com.pch.interview.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.sql.Timestamp;
import java.util.Date;

@Data
public class WxCpDTO {
    private String cp_name;

    private Integer id;

    private String url;

    private String uuid;
}
