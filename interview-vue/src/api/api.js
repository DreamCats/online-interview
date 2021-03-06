import request from "../utils/request";

const getTagListAllUrl = '/tag/list/all';
export function getTagListAll() {
    return request({
        url: getTagListAllUrl,
        method: 'get'
    })
}

const getTagDetailUrl = '/tag';
export function getTagDetail(data) {
    return request({
        url: getTagDetailUrl,
        method: 'get',
        params: data
    })
}

const updateTagUrl = '/tag/update';
export function updateTag(data) {
    return request({
        url: updateTagUrl,
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        data
    })
}

const addTagUrl = '/tag/add';
export function addTag(data) {
    return request({
        url: addTagUrl,
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        data
    })
}

const deleteTagUrl = '/tag/delete';
export function deleteTag(data) {
    return request({
        url: deleteTagUrl,
        method: 'get',
        params: data
    })
}

const contentListUrl = '/items/list';
export function contentList(data) {
    return request({
        url: contentListUrl,
        method: 'get',
        params: data
    })
}

const getContentDetailUrl = '/items/count';
export function getContentDetail(data) {
    return request({
        url: getContentDetailUrl,
        method: 'get',
        params: data
    })
}

const updateContentUrl = '/item/update';
export function updateContent(data) {
    return request({
        url: updateContentUrl,
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        data
    })
}

const addContentUrl = '/item/add';
export function addContent(data) {
    return request({
        url: addContentUrl,
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        data
    })
}

const deleteContentUrl = '/item/delete';
export function deleteContent(data) {
    return request({
        url: deleteContentUrl,
        method: 'get',
        params: data
    })
}

const getUserPublishListUrl = '/user/publish';
export function getUserPublishList() {
    return request({
        url: getUserPublishListUrl,
        method: 'get'
    })
}

const addBlogUrl = '/item/blog/add';
export function addBlog(data) {
    return request({
        url: addBlogUrl,
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        data
    })
}

const blogListUrl = '/items/blog/list';
export function blogList(data) {
    return request({
        url: blogListUrl,
        method: 'get',
        params: data
    })
}

const updateBlogUrl = '/item/blog/update';
export function updateBlog(data) {
    return request({
        url: updateBlogUrl,
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        data
    })
}

const deleteBlogUrl = '/item/blog/delete';
export function deleteBlog(data) {
    return request({
        url: deleteBlogUrl,
        method: 'get',
        params: data
    })
}