package com.pch.interview;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.pch.interview.DO.WxItemsDO;
import com.pch.interview.dao.ItemsDaoMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class InterviewApplicationTests {

    @Autowired
    private ItemsDaoMapper itemsDaoMapper;

    @Test
    void contextLoads() {
        QueryWrapper<WxItemsDO> queryWrapper = new QueryWrapper<>();
        queryWrapper
                .eq("wx_items.tag_type", 0);

    }

}
