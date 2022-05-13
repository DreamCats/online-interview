package com.pch.interview.VO;

import com.pch.interview.DO.WxItemsDO;
import lombok.Data;

import java.io.Serializable;

@Data
public class RandomItemResponseVO implements Serializable {

    private ItemsVO item;


    private String img_url;


    private String tag;

}
