

var ActivitiesID = 201507151;
var url = "";
$(document).ready(function () {
    var focusstus = false;
    $(':input').focus(function () {
        focusstus = true;
    });
    document.onkeydown = function (event) {
        var e = event || window.event || arguments.callee.caller.arguments[0];

        if (e && e.keyCode == 13) { // enter 键
            if (focusstus) {
                submitLogin();
            }
        }
    };
});


$(document).ready(function () {
    
     BindProvinces();
     BindDealerInfo();

     loadSty();
    $('#provs').change(function () {
        BindDealerInfo($('#provs').find("option:selected").text());
        loadSty();
    });
    url = BitautoMarketSk.webapiCommonurl + "Api/Handler1.ashx";
    $('.buy_btn').bind("click", function () {
        $('#chexing').val($(this).attr("payid"));
    });

});
function loadSty() {
    $(".cont_dealer tr").each(function () {
        $(this).find("td").eq(0).addClass("tl")
        $(this).find("td").eq(1).addClass("tl")
        $(this).find("td").eq(4).addClass("tr")
    })
}
function BindProvinces() {
    if (JSonDatas && JSonDatas.Information.length > 0) {
        var str = "<option value=\"" + "-1" + "\">" + "请选择" + "</option>";
        for (var i = 0; i < JSonDatas.Information.length; i++) {
            if (str.indexOf(JSonDatas.Information[i].prov) < 0) {
                str += "<option value=\"" + JSonDatas.Information[i].prov + "\">" + JSonDatas.Information[i].prov + "</option>";
            }
        }
        jQuery('#provs').html(str);
    }
}
function BindDealerInfo(prov) {
    var delStr = '<tr><th width="260" class="tl">经销商及分销名称</th><th class="tl">公司地址</th><th width="100">省份</th><th width="100">城市</th><th class="tr">销售热线</th></tr>';
    if (prov == null || prov == "" || prov == undefined) {
        for (var i = 0; i < JSonDatas.Information.length; i++) {
            delStr += '<tr><td>' + JSonDatas.Information[i].dealer + '</td><td>' + JSonDatas.Information[i].address + '</td><td>' + JSonDatas.Information[i].prov + '</td><td>' + JSonDatas.Information[i].city + '</td><td>' + JSonDatas.Information[i].phone + '</td></tr>';
        }
    } else {
        for (var i = 0; i < JSonDatas.Information.length; i++) {
            if (JSonDatas.Information[i].prov == prov) {
                delStr += '<tr><td>' + JSonDatas.Information[i].dealer + '</td><td>' + JSonDatas.Information[i].address + '</td><td>' + JSonDatas.Information[i].prov + '</td><td>' + JSonDatas.Information[i].city + '</td><td>' + JSonDatas.Information[i].phone + '</td></tr>';
            }
        }
    }
    jQuery('#dealerInfo').html(delStr);

}
//解析参数
function request(paras) {
    var url = location.href;
    var paraString = url.substring(url.indexOf("?") + 1, url.length).split("&");
    var paraObj = {}
    for (i = 0; j = paraString[i]; i++) {
        paraObj[j.substring(0, j.indexOf("=")).toLowerCase()] = j.substring(j.indexOf("=") + 1, j.length);
    }
    var returnValue = paraObj[paras.toLowerCase()];
    if (typeof (returnValue) == "undefined") {
        return "";
    } else {
        return returnValue;
    }
}
function isMobile(mobile) {
    return (/^(?:13\d|15\d|17\d|18\d|145|147)-?\d{5}(\d{3}|\*{3})$/.test(mobile));
}
function isMail(mail) {
    return (/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(mail));
}

function is15sfz(sfz) {
    return (/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/.test(sfz));
}
function is18sfz(sfz) {
    return (/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(sfz));
}
function GetStringRealLength(str) {
    var bytesCount = 0;
    if (str) {
        for (var i = 0; i < str.length; i++) {
            var c = str.charAt(i);
            if (/^[\u0000-\u00ff]$/.test(c))   //匹配双字节
            {
                bytesCount += 1;
            }
            else {
                bytesCount += 2;
            }
        }
    }
    return bytesCount;
}


//写cookies函数
function SetCookie(name, value)//两个参数，一个是cookie的名子，一个是值
{
    var Days = 1;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escapeStr(value) + ";expires=" + exp.toGMTString() + ';domain=bitauto.com;path=/;';
}

//写cookies函数
function SetCookie2(name, value)//两个参数，一个是cookie的名子，一个是值
{
    var Days = 1;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 1 * 1 * 60 * 1000);
    document.cookie = name + "=" + escapeStr(value) + ";expires=" + exp.toGMTString() + ';domain=bitauto.com;path=/;';
}
function GetCookie(name)//取cookies函数        
{
    var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
    if (arr != null) return unescape(arr[2]); return null;

}
function DelCookie(name)//删除cookie
{
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = GetCookie(name);
    if (cval != null) document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString() + ";domain=bitauto.com;path=/;";
}

function escapeStr(str) {
    return escape(str).replace(/\+/g, '%2B').replace(/\"/g, '%22').replace(/\'/g, '%27').replace(/\//g, '%2F');
}


function exist(id) {
    var s = document.getElementById(id);

    if (s) {
        return true;
    }
}



function VerifyLogin() {
    var LoginName = $.trim($('#LoginName').val());
    var LoginPhone = $.trim($('#LoginPhone').val());
    var prov = $.trim($('#prov').val());
    var city = $.trim($('#city').val());
    var dealer = $.trim($('#dealer').val());
    var Sex = $.trim($('#Sex').val());
    var chexing = $.trim($('#chexing').val());
    var Email = $.trim($('#Email').val());
    var buytime = $.trim($('#buytime').val());

    if (exist("LoginName")) {
        if (LoginName == "") {
            alert('请填写姓名');
            return false;
        } else {
            if (GetStringRealLength(LoginName) > 20) {
                alert('请输入正确的姓名');
                return false;
            }
        }

    }

    if (exist("LoginPhone")) {
        if (LoginPhone == "") {
            alert('请填写手机号');
            return false;
        }
        else {
            if (!isMobile(LoginPhone)) {
                alert('请填写正确的手机号，如:13012345678');
                return false;
            }
        }
    }

    if (exist("prov")) {
        if (prov == "-1") {
            alert('请选择省份');
            return false;
        }

    }

    if (exist("city")) {
        if (city == "-1") {
            alert('请选择城市');
            return false;
        }

    }
    if (exist("dealer")) {
        if (dealer == "-1") {
            alert('请选择经销商');
            return false;
        }

    }

    if (exist("Sex")) {
        if (Sex == "-1") {
            alert('请选择性别');
            return false;
        }

    }

    if (exist("chexing")) {
        if (chexing == "-1") {
            alert('请选择车型');
            return false;
        }

    }
    if (exist("Email")) {
        if (Email == "") {
            alert('请填写邮箱');
            return false;
        }
        else {
            if (!isMail(Email)) {
                alert('请填写正确的邮箱');
                return false;
            }
        }

    }
    if (exist("buytime")) {
        if (buytime == "-1") {
            alert('请选择意向购车时间');
            return false;
        }

    }

    return true;
}
function Empty() {
    $('#LoginName').val('');
    $('#Email').val('');
    $('#LoginPhone').val('');
    $('#dealer').val('-1');
    $('#prov').val('-1');
    $('#city').val('-1');
    $('#chexing').val('-1');
    $('#buytime').val('-1');
    $('#Sex').val('-1');
}


function submitLogin() {
    if (VerifyLogin()) {


        var YOrderTypeID = 1; //订单类型
        var YDealerID = 0; //经销商ID 销售提供
        var YLocationID = ""; //地区id
        var YUserIP = ""; //用户IP
        var YCarSerialId = 0;  //车型ID 销售提供
        var YCarId = 0; //车款ID 销售提供

        //消息推送参数开始
        var msgUserId = 0; //易车会员ID
        var msgAddress = 0;  //地址
        var msgbsid = "18"; //车型品牌
        var msgcsid = ""; //车型
        try {
            if (Bitauto.Login.result.isLogined == true) {
                msgUserId = Bitauto.Login.result.userId;
            }
        } catch (err) {

        }

        try {
            YLocationID = bit_locationInfo.cityId
        } catch (e) {

        }
        try {
            YUserIP = bit_locationInfo.IP;
        } catch (e1) {

        }
        var xcweblog = "";
        try {
            xcweblog = XCWEBLOG_ID;
        } catch (err1)
        { }



        //  alert(msgAddress);

        var LoginName = jQuery('#LoginName').val() == undefined ? "" : jQuery('#LoginName').val();
        var LoginPhone = jQuery('#LoginPhone').val() == undefined ? "" : jQuery('#LoginPhone').val();
        var prov = jQuery('#prov').find("option:selected").text() == undefined ? "" : jQuery('#prov').find("option:selected").text();
        var city = jQuery('#city').find("option:selected").text() == undefined ? "" : jQuery('#city').find("option:selected").text();
        var dealer = jQuery('#dealer').find("option:selected").text() == undefined ? "" : jQuery('#dealer').find("option:selected").text();
        var chexing = jQuery('#chexing').find("option:selected").text() == undefined ? "" : jQuery('#chexing').find("option:selected").text();
        var Email = jQuery('#Email').val() == undefined ? "" : jQuery('#Email').val();
        var buytime = jQuery('#buytime').find("option:selected").text() == undefined ? "" : jQuery('#buytime').find("option:selected").text();
        var sex = "";
        sex = jQuery(':input[name="Sex"][checked]').val() == undefined ? "" : jQuery(':input[name="Sex"][checked]').val(); //radio形式
        if (sex != "") {

        }
        else {
            sex = jQuery('#Sex').find("option:selected").text() == undefined ? "" : jQuery('#Sex').find("option:selected").text(); //selected 形式
        }
        var filedgstr = "";
        var marketfromad = request("marketfromad");
        try {
            var fgcx = request("fgcx");
            if (fgcx == "yes") {
                if (filedgstr == "") {
                    filedgstr = "6";
                }
                else {
                    filedgstr += "(6)";
                }
            }
        } catch (err2) {

        }

        if (marketfromad == "") {
            filedgstr += marketfromad;
        }
        else {
            filedgstr += "(" + marketfromad + ")";
        }


        var SMARTCODE = request("SMARTCODE");


        //        var provid = "17";
        //        var cityid = jQuery('#dealer').find("option:selected").attr("cityid");
        //        var dealerid = $('#dealer').val();

        var cityName = "";
        try {
            cityName = bit_locationInfo.cityName;
        } catch (e) {

        }
        //var str = escapeStr(',' + LoginName + ',' + LoginPhone + ',' + prov + ',' + city + ',' + dealer + ',' + filedgstr + ',' + sex + ',' + chexing + ',' + Email + ',' + buytime + ',' + ',' + ',,,' + xcweblog + ',' + provid + ',' + cityid + ',' + dealerid);                      //生成以","为分隔符的字符串
        //var str = escapeStr(',' + LoginName + ',' + LoginPhone + ',' + prov + ',' + city + ',' + dealer + ',' + filedgstr + ',' + sex + ',' + chexing + ',' + Email + ',' + buytime + ',' + ',' + ',,,' + xcweblog);

        var str = escapeStr(',' + LoginName + ',' + LoginPhone + ',' + ',' + ',' + ',' + filedgstr + ',' + ',' + ',' + ',' + ',' + ',' + ',,,' + xcweblog);

        var body = "isonlyphone=3&istdata=1&SMARTCODE=" + escapeStr(SMARTCODE) + "&strC=" + escapeStr(cityName); //常规参数
        body += "&isPostYiPai=0&YOrderTypeID=" + YOrderTypeID + "&YDealerID=" + YDealerID + "&YLocationID=" + YLocationID + "&YUserIP=" + YUserIP + "&YCarSerialId=" + YCarSerialId + "&YCarId=" + YCarId + ""; //易湃订单参数
        //消息推送传参开始
        body += "&isPushMsg=1&msgUserId=" + msgUserId + "&msgIP=" + YUserIP + "&msgAddress=" + msgAddress + "&msgCityId=" + YLocationID + "&msgbsid=" + msgbsid + "&msgcsid=" + msgcsid + ""; //发送消息参数
        //消息推送传参结束
        body += "&action=insert&actid=" + ActivitiesID + "&data=" + str; //报名参数
        $('#denging').removeAttr("href");
        // $('#denging').unbind();

        $('#actid').val(ActivitiesID);
        $('#productid').val($('#chexing').val());
        $('#customernamehistory').val(LoginName);
        $('#url').val("http://www.bitauto.com/zhuanti/adtopic/qirui_h/");
        $('#info').val(prov + "-" + city + "-" + chexing);


        $.getJSON(url + "?callback=?", body, function (data) {
            if (data.success) {
                //alert('报名成功！');

                $('#customerid').val(data.result); //---------注意---
                $('#payOrder').submit();
                Empty();
            }
            else {
                //alert(data.message);
                if (data.result == '-2') {
                    // alert('此手机号已报过名，无法再参加');
                    var body1 = "action=checkByFieldBFieldC&actid=" + ActivitiesID + "&fb=" + escapeStr(LoginName) + "&fc=" + LoginPhone; //报名参数

                    $.getJSON(url + "?callback=?", body1, function (data1) {
                        if (data1.success) {
                            $('#customerid').val(data1.result); //---------注意---                                                     
                            $('#payOrder').submit();
                        }
                    });
                }
                else
                { alert('提交失败'); }
            }
            $('#denging').attr("href", "javascript:submitLogin();");
            // $('#denging').bind("click", submitLogin);
        });


    }
}




function BindProvince() {
    if (JSonData && JSonData.Information.length > 0) {
        var Infobj = document.getElementById("prov")
        var s = "";
        var str = "<option value=\"" + "-1" + "\">" + "请选择" + "</option>";

        for (var i = 0; i < JSonData.Information.length; i++) {
            if (str.indexOf(JSonData.Information[i].prov) < 0) {
                str += "<option value=\"" + JSonData.Information[i].prov + "\">" + JSonData.Information[i].prov + "</option>";
            }
        }
        jQuery('#prov').html(str);
    }
}

function BindCity() {

    var province = jQuery('#prov').find("option:selected").text();
    var city = document.getElementById("city");
    city.options.length = 0;
    var s = "";
    var str = "<option value=\"" + "-1" + "\">" + "请选择" + "</option>";

    for (var i = 0; i < JSonData.Information.length; i++) {

        if (JSonData.Information[i].prov == province) {
            if (str.indexOf(JSonData.Information[i].city) < 0) {
                str += "<option value=\"" + JSonData.Information[i].city + "\">" + JSonData.Information[i].city + "</option>";

            }
        }
    }
    jQuery('#city').html(str);
}






function BindDealer() {
    var str = "<option value=\"" + "-1" + "\">" + "请选择" + "</option>";
    var city = jQuery('#city').find("option:selected").text();
    var province = jQuery('#prov').find("option:selected").text();
    var dealer = document.getElementById("dealer");
    dealer.options.length = 0;
    for (var i = 0; i < JSonData.Information.length; i++) {

        if (JSonData.Information[i].city == city && province == JSonData.Information[i].prov) {
            str += "<option value=\"" + JSonData.Information[i].dealerID + "\">" + JSonData.Information[i].dealer + "</option>";
        }
    }
    jQuery('#dealer').html(str);
}

