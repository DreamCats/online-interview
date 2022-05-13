package com.pch.interview.dto;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class WxUserResponseDTO {
    private Integer id;

    private String uuid;

    private String user_name;

    private String url;

    private Integer active;

    private LocalDateTime current_date;
}
