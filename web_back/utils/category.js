// category.js 处理文章类别的查询、新增、删除、修改工作
var category = {
    // 查询文章类别方法
    show : function (callback) {
        $.get(userUrl+ '/admin/category_search',function (res) {
            callback(res);
        })
    },
    // 新增文章类别方法
    add: function () {
        
    },
    //删除文章类别方法
    delete:function () {
        
    },
    //修改文章类别方法
    update:function () {
        
    }
}