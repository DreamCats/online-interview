package com.pch.interview.common;

import lombok.Data;

@Data
public class ItemsInfoResponse<T> {

    private T data; // 返回的数据

    private Long current_items;

    private Long current_page;

    private Long total;

    private Long pages;

    private Boolean has_next;
}
