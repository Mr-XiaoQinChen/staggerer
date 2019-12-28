// 这里存放用户的登陆、推出、会员信息

var user = {
    //用户登陆
    logIn:function (userName,password) {
        $.ajax({
            type: 'POST',
            url: userUrl + '/admin/login',
            data: {
                user_name: userName,
                password: password
            },
            success: function(res) {
                // console.log(res);
                if(res.code === 200) {
                    alert(res.msg);
                    location.href = "index.html"
                }
                
            }
        })
    },
    // 用户退出
    logOut:function () {
        $.post(
            userUrl + '/admin/logout',
            function(res) {
                // console.log(res);
                if (res.code === 200) {
                    alert(res.msg);
                    location.href = 'login.html'
                }
                
            }
        )
    },
    // 获取用户头像信息
    getUser: function () {
        $.get(userUrl + '/admin/getuser',function(res) {
            if (res.code === 200) {
                // console.log(1);
                $('.user_info').find('img').prop('src',res.data.user_pic).next('span').html('欢迎:&nbsp;&nbsp;'+res.data.nickname);
                $('.user_center_link').find('img').prop('src',res.data.user_pic);
            }  
        })
    }
}