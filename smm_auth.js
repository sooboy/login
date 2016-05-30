/**
 * Created by nixiaoqi on 16/5/30.
 */
(function ($) {
    $.fn.extend({
        SmmAuth:function (sc) {
            console.log($(this))
            this.AuthURL={
                base:"",
                login:"",
                regist:"",
                resetpassword:"",
                checkexist:""
            }
            this.sc=sc
            this.Login =function (user_name,password) {
            //     TODO
                console.log("login")

            }
            this.Regist=function (user_name,verify_code) {
            //    TODO
                console.log("regist");
                this.Ajax()
            }
            this.CheckExist=function () {
            //    TODO
                console.log("checkExist")
            }
            this.ResetPassWord=function () {
            //    TODO
                console.log("ResetPassword")
            }
            this.Ajax=function (url,type,data,successfn,errorfn) {
                $.ajax({
                    url:url,
                    type:type,
                    data:data,
                    dataType:"json",
                    success:successfn,
                    error:errorfn
                })
            }
        }
    })
})(jQuery)