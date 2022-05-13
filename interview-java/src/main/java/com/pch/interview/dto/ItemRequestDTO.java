package com.pch.interview.dto;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

@Data
@ApiModel(value = "randomitems分页实体", description = "randomitems分页实体分页请求信息")
public class ItemRequestDTO {

    private Integer tag_type;

    private Integer page = 1;

    private Integer count = 10;

    private String uuid = "0";

    private String item_uuid = "0";

    private String user_uuid = "0";

}
