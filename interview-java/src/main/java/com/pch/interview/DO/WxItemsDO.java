package com.pch.interview.DO;


import com.baomidou.mybatisplus.annotation.TableName;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@TableName(value = "wx_items")
public class WxItemsDO {

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

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    private LocalDateTime createTime;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
    private LocalDateTime updateTime;

}
