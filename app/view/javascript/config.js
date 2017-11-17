var token = "TzgzNTA4NkQxOA=="

var login = {
   redirectTarget: "/app/view/html/index.html",
   expiry:6,
   loginTarget: "/app/view/html/login.html",
   anonymousToken: token
};

var wssConfig = ["wsClientProvider",function (wsClientProvider) {
    wsClientProvider.setBaseUrl("wss://kitchen-sink.scriptrapps.io");
    wsClientProvider.setPublishChannel("requestChannel");
    wsClientProvider.setSubscribeChannel("responseChannel_"+JSON.parse($.cookie('user')).groups);
}];

var httpsConfig = ["httpClientProvider",function (httpClientProvider) {
    httpClientProvider.setBaseUrl("https://kitchen-sink.scriptrapps.io");
    httpClientProvider.setToken(token);
}]
