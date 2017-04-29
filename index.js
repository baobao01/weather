/**
 * Created by Samsung on 2017/4/29.
 */
$(function(){
    $(".btn").on("click",function(){
        var cityName = $(".city>input").val();
        if(cityName==""){
            alert("请输入城市名！")
        }else {
            console.log(typeof (cityName));
            $.ajax({
                type:"get",
                url:"http://api.jisuapi.com/weather/query",
                data:{
                    "appkey":"极速数据",
                    "city":cityName
                },
                dataType:"jsonp",
                jsonp:"callback",
                success:function(data){
                    console.log(data.result);
                    data = data.result;
                    var cont = '<div class="now">'+
                    '<p>'+ data.city +'</p><p>'+ data.weather +'</p><p>'+ data.temp +'&deg;</p></div>'+
                        '<div class="main">'+
                        '<p>'+
                        '<span>'+ data.week +'</span><span>最高温：'+ data.temphigh +'&nbsp;最低温：'+ data.templow +'</span>'+
                    '</p></div>'
                    $(".content").html(cont);

                }
            })
        }
    })
})