package com.pch.interview.dto;


import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import net.sf.jsqlparser.expression.DateTimeLiteralExpression;

import java.sql.Date;
import java.time.LocalDateTime;

@Data
public class RandomItemDTO {

    private Integer id;

    private String uuid;

    private String tcUuid;

    private Integer tagType;

    private String title;

    private Integer sId;

    private String url;

    private Integer viewCount;

    private Integer likeCount;

    private String content;

    private String publishTime;

    private String imgUrl;

    private String tag;
}
