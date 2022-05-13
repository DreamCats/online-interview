package com.pch.interview.modular.items;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.fasterxml.uuid.Generators;
import com.fasterxml.uuid.UUIDGenerator;
import com.pch.interview.DO.WxItemsDO;
import com.pch.interview.DO.WxUserLikeDO;
import com.pch.interview.VO.ItemsVO;
import com.pch.interview.common.ItemsInfoResponse;
import com.pch.interview.common.ResponseData;
import com.pch.interview.dao.ItemsDaoMapper;
import com.pch.interview.dao.WxUserLikeDaoMapper;
import com.pch.interview.dto.ItemRequestDTO;
import com.pch.interview.dto.RandomItemDTO;
import com.pch.interview.VO.RandomItemResponseVO;
import com.pch.interview.utils.ResponseEnum;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.*;

@Slf4j
@RestController
@RequestMapping("/items/")
public class ItemsController {

    @Autowired
    private ItemsDaoMapper itemsDaoMapper;

    @Autowired
    private ItemsService itemsService;

    private WxUserLikeDaoMapper wxUserLikeDaoMapper;


    @GetMapping("rand")
    public ResponseData get_items_rand(HttpServletRequest request){
        Integer tag_type = Integer.valueOf(request.getParameter("tag_type"));
        Integer count = Integer.valueOf(request.getParameter("count"));
        QueryWrapper<WxItemsDO> queryWrapper = new QueryWrapper<>();
        List<RandomItemDTO> wxItemDOS = new LinkedList<>();
        List<RandomItemResponseVO> randomItemResponseVOS = new ArrayList<>();
        ResponseData responseData = new ResponseData();
        if (tag_type==0){
            wxItemDOS = itemsService.selectItemsByTagTypeNot(tag_type, count);
        }else if (tag_type==4){
            wxItemDOS = itemsService.selectItemsByTagType(tag_type, count);
        }else {
            wxItemDOS = itemsService.selectItemsByRandomTagType(count);
        }
        for (RandomItemDTO item: wxItemDOS
             ) {
            RandomItemResponseVO randomItemResponseVO = new RandomItemResponseVO();
            ItemsVO itemsVO = new ItemsVO();
            BeanUtils.copyProperties(item, itemsVO);
            itemsVO.setS_id(item.getSId());
            itemsVO.setLike_count(item.getLikeCount());
            itemsVO.setPublish_time(item.getPublishTime());
            itemsVO.setTag_type(item.getTagType());
            itemsVO.setTc_uuid(item.getTcUuid());
            itemsVO.setView_count(item.getViewCount());
            randomItemResponseVO.setItem(itemsVO);
            randomItemResponseVO.setImg_url(item.getImgUrl());
            randomItemResponseVO.setTag(item.getTag());
            randomItemResponseVOS.add(randomItemResponseVO);
        }
        responseData.setData(randomItemResponseVOS);
        responseData.setRe_code(ResponseEnum.OK.getCode());
        responseData.setMsg("请求成功");
        return responseData;
    }

    @GetMapping("list")
    public ResponseData get_items_list(Integer page, Integer count, String tc_uuid){
        ResponseData responseData = new ResponseData();
        ItemsInfoResponse itemsInfoResponse = new ItemsInfoResponse();
        QueryWrapper<WxItemsDO> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("tc_uuid", tc_uuid);
        queryWrapper.orderByDesc("publish_time");
        IPage<WxItemsDO> wxItemsPage = new Page<>();
        try {
            wxItemsPage = itemsDaoMapper.selectPage(new Page<>(page, count), queryWrapper);
            List<WxItemsDO> wxItemsDOList = wxItemsPage.getRecords();
            if (wxItemsDOList.size()==0){
                responseData.setRe_code(ResponseEnum.NODATA.getCode());
                responseData.setMsg("没有数据");
                return responseData;
            }
            itemsInfoResponse.setData(wxItemsDOList);
            itemsInfoResponse.setCurrent_page(page.longValue());
            itemsInfoResponse.setTotal(wxItemsPage.getTotal());
            itemsInfoResponse.setPages(wxItemsPage.getTotal() / wxItemsPage.getSize());
            itemsInfoResponse.setCurrent_items(count.longValue());
            itemsInfoResponse.setHas_next(itemsInfoResponse.getCurrent_page() < itemsInfoResponse.getPages());
        }catch (Exception e){
            e.printStackTrace();
            responseData.setRe_code(ResponseEnum.DBERR.getCode());
            responseData.setMsg("数据库查询错误");
            return responseData;
        }
        responseData.setData(itemsInfoResponse);
        responseData.setRe_code(ResponseEnum.OK.getCode());
        responseData.setMsg("请求成功");
        return responseData;
    }

    @GetMapping("count")
    public ResponseData add_item_count(ItemRequestDTO itemRequestDTO){
        String uuid = itemRequestDTO.getUuid();
        ResponseData responseData = new ResponseData();
        try {
            UpdateWrapper<WxItemsDO> updateWrapper = new UpdateWrapper<>();
            QueryWrapper<WxItemsDO> queryWrapper = new QueryWrapper<>();
            queryWrapper.eq("uuid", uuid);
            WxItemsDO wxItemsDO =  itemsDaoMapper.selectOne(queryWrapper);
            if (wxItemsDO==null){
                responseData.setRe_code(ResponseEnum.DBERR.getCode());
                responseData.setMsg("数据不存在");
                return responseData;
            }
            Integer viweCount = wxItemsDO.getViewCount();
            updateWrapper.set("view_count", viweCount + 1);
            updateWrapper.eq("uuid", uuid);
            itemsDaoMapper.update(wxItemsDO, updateWrapper);
            responseData.setData(wxItemsDO);

        } catch (Exception e){
            e.printStackTrace();
            responseData.setRe_code(ResponseEnum.DBERR.getCode());
            responseData.setMsg("数据库查询错误");
            return responseData;
        }

        responseData.setRe_code(ResponseEnum.OK.getCode());
        responseData.setMsg("请求成功");
        return responseData;
    }

    @GetMapping("likecount/add")
    public ResponseData add_item_like_count(ItemRequestDTO itemRequestDTO){
        String item_uuid = itemRequestDTO.getItem_uuid();
        String user_uuid = itemRequestDTO.getUser_uuid();
        ResponseData responseData = new ResponseData();
        try {
            UpdateWrapper<WxItemsDO> updateWrapper = new UpdateWrapper<>();
            QueryWrapper<WxItemsDO> queryWrapper = new QueryWrapper<>();
            queryWrapper.eq("uuid", item_uuid);
            WxItemsDO wxItemsDO =  itemsDaoMapper.selectOne(queryWrapper);
            if (wxItemsDO==null){
                responseData.setRe_code(ResponseEnum.DBERR.getCode());
                responseData.setMsg("数据不存在");
                return responseData;
            }
            Integer likeCount = wxItemsDO.getLikeCount();
            updateWrapper.set("like_count", likeCount + 1);
            updateWrapper.eq("uuid", item_uuid);
            itemsDaoMapper.update(wxItemsDO, updateWrapper);
            responseData.setData(wxItemsDO);
            WxUserLikeDO wxUserLikeDO = new WxUserLikeDO();
            wxUserLikeDO.setUserId(user_uuid);
            wxUserLikeDO.setItemId(item_uuid);
            wxUserLikeDO.setUuid(UUID.nameUUIDFromBytes(user_uuid.getBytes()).toString());
            wxUserLikeDaoMapper.insert(wxUserLikeDO);

        } catch (Exception e){
            e.printStackTrace();
            responseData.setRe_code(ResponseEnum.DBERR.getCode());
            responseData.setMsg("数据库查询错误");
            return responseData;
        }
        responseData.setRe_code(ResponseEnum.OK.getCode());
        responseData.setMsg("请求成功");
        return responseData;
    }

    @GetMapping("likecount/remove")
    public ResponseData remove_item_like_count(ItemRequestDTO itemRequestDTO){
        String item_uuid = itemRequestDTO.getItem_uuid();
        String user_uuid = itemRequestDTO.getUser_uuid();
        ResponseData responseData = new ResponseData();
        try {
            UpdateWrapper<WxItemsDO> updateWrapper = new UpdateWrapper<>();
            QueryWrapper<WxItemsDO> queryWrapper = new QueryWrapper<>();
            queryWrapper.eq("uuid", item_uuid);
            WxItemsDO wxItemsDO =  itemsDaoMapper.selectOne(queryWrapper);
            if (wxItemsDO==null){
                responseData.setRe_code(ResponseEnum.DBERR.getCode());
                responseData.setMsg("数据不存在");
                return responseData;
            }
            Integer likeCount = wxItemsDO.getLikeCount();
            updateWrapper.set("like_count", likeCount - 1);
            updateWrapper.eq("uuid", item_uuid);
            itemsDaoMapper.update(wxItemsDO, updateWrapper);
            responseData.setData(wxItemsDO);
            QueryWrapper<WxUserLikeDO> queryW = new QueryWrapper<>();
            queryW.eq("item_id", item_uuid);
            queryW.eq("user_id", user_uuid);
            int rows = wxUserLikeDaoMapper.delete(queryW);
        } catch (Exception e){
            e.printStackTrace();
            responseData.setRe_code(ResponseEnum.DBERR.getCode());
            responseData.setMsg("数据库查询错误");
            return responseData;
        }
        responseData.setRe_code(ResponseEnum.OK.getCode());
        responseData.setMsg("请求成功");
        return responseData;
    }


    @GetMapping("like")
    public ResponseData get_items_like_list(ItemRequestDTO itemRequestDTO){
        String user_uuid = itemRequestDTO.getUser_uuid();
        int page = itemRequestDTO.getPage();
        int count = itemRequestDTO.getCount();
        ResponseData responseData = new ResponseData();
        try {
            QueryWrapper<WxUserLikeDO> queryWrapper = new QueryWrapper<>();
            queryWrapper.eq("user_id", user_uuid);
            queryWrapper.orderByDesc("id");
            IPage<WxUserLikeDO> pages = wxUserLikeDaoMapper.selectPage(new Page<>(page, count), queryWrapper);
            List<WxUserLikeDO> wxUserLikeDOList = pages.getRecords();
            if (wxUserLikeDOList.size()==0){
                responseData.setRe_code(ResponseEnum.NODATA.getCode());
                responseData.setMsg(ResponseEnum.NODATA.getMessage());
                return responseData;
            }

        }catch (Exception e){
            e.printStackTrace();
        }

        return responseData;
    }
}
