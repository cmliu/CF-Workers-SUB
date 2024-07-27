
// 部署完成后在网址后面加上这个，获取自建节点和机场聚合节点，/?token=auto或/auto或

let mytoken = 'auto'; //可以随便取，或者uuid生成，https://1024tools.com/uuid
let BotToken =''; //可以为空，或者@BotFather中输入/start，/newbot，并关注机器人
let ChatID =''; //可以为空，或者@userinfobot中获取，/start
let TG = 0; //小白勿动， 开发者专用，1 为推送所有的访问信息，0 为不推送订阅转换后端的访问信息与异常访问
let FileName = 'SUBLINK';
let SUBUpdateTime = 6; //自定义订阅更新时间，单位小时
let total = 99;//TB
let timestamp = 4102329600000;//2099-12-31

//节点链接 + 订阅链接
let MainData = `
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmN2Y5ZmJmOC1mOTQ3LTRhMmEtYWQ1ZC04YWMzNWQzZWUwZjU=@hk01.ssyhi.xyz:50200#%F0%9F%87%AD%F0%9F%87%B0%20%E9%A6%99%E6%B8%AF-01_%E8%A7%A3%E9%94%81
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmN2Y5ZmJmOC1mOTQ3LTRhMmEtYWQ1ZC04YWMzNWQzZWUwZjU=@hk02.ssyhi.xyz:50201#%F0%9F%87%AD%F0%9F%87%B0%20%E9%A6%99%E6%B8%AF-02_%E8%A7%A3%E9%94%81
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmN2Y5ZmJmOC1mOTQ3LTRhMmEtYWQ1ZC04YWMzNWQzZWUwZjU=@hk03.ssyhi.xyz:50202#%F0%9F%87%AD%F0%9F%87%B0%20%E9%A6%99%E6%B8%AF-03_%E8%A7%A3%E9%94%81
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmN2Y5ZmJmOC1mOTQ3LTRhMmEtYWQ1ZC04YWMzNWQzZWUwZjU=@hk04.ssyhi.xyz:50203#%F0%9F%87%AD%F0%9F%87%B0%20%E9%A6%99%E6%B8%AF-04_%E8%A7%A3%E9%94%81
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmN2Y5ZmJmOC1mOTQ3LTRhMmEtYWQ1ZC04YWMzNWQzZWUwZjU=@hk05.ssyhi.xyz:50204#%F0%9F%87%AD%F0%9F%87%B0%20%E9%A6%99%E6%B8%AF-05_%E8%A7%A3%E9%94%81
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmN2Y5ZmJmOC1mOTQ3LTRhMmEtYWQ1ZC04YWMzNWQzZWUwZjU=@hk06.ssyhi.xyz:50205#%F0%9F%87%AD%F0%9F%87%B0%20%E9%A6%99%E6%B8%AF-06_%E8%A7%A3%E9%94%81
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmN2Y5ZmJmOC1mOTQ3LTRhMmEtYWQ1ZC04YWMzNWQzZWUwZjU=@hk07.ssyhi.xyz:50206#%F0%9F%87%AD%F0%9F%87%B0%20%E9%A6%99%E6%B8%AF-07_%E8%A7%A3%E9%94%81
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmN2Y5ZmJmOC1mOTQ3LTRhMmEtYWQ1ZC04YWMzNWQzZWUwZjU=@hk08.ssyhi.xyz:50207#%F0%9F%87%AD%F0%9F%87%B0%20%E9%A6%99%E6%B8%AF-08_%E8%A7%A3%E9%94%81
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmN2Y5ZmJmOC1mOTQ3LTRhMmEtYWQ1ZC04YWMzNWQzZWUwZjU=@hk09.ssyhi.xyz:50208#%F0%9F%87%AD%F0%9F%87%B0%20%E9%A6%99%E6%B8%AF-09_%E8%A7%A3%E9%94%81
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmN2Y5ZmJmOC1mOTQ3LTRhMmEtYWQ1ZC04YWMzNWQzZWUwZjU=@hk10.ssyhi.xyz:50209#%F0%9F%87%AD%F0%9F%87%B0%20%E9%A6%99%E6%B8%AF-10_%E8%A7%A3%E9%94%81
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmN2Y5ZmJmOC1mOTQ3LTRhMmEtYWQ1ZC04YWMzNWQzZWUwZjU=@hk11.ssyhi.xyz:58456#%F0%9F%87%AD%F0%9F%87%B0%20%E9%A6%99%E6%B8%AF-11_%E8%A7%A3%E9%94%81
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmN2Y5ZmJmOC1mOTQ3LTRhMmEtYWQ1ZC04YWMzNWQzZWUwZjU=@hk12.ssyhi.xyz:50251#%F0%9F%87%AD%F0%9F%87%B0%20%E9%A6%99%E6%B8%AF-12_%E8%A7%A3%E9%94%81
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmN2Y5ZmJmOC1mOTQ3LTRhMmEtYWQ1ZC04YWMzNWQzZWUwZjU=@hk13.ssyhi.xyz:50252#%F0%9F%87%AD%F0%9F%87%B0%20%E9%A6%99%E6%B8%AF-13_%E8%A7%A3%E9%94%81
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmN2Y5ZmJmOC1mOTQ3LTRhMmEtYWQ1ZC04YWMzNWQzZWUwZjU=@hk14.ssyhi.xyz:50253#%F0%9F%87%AD%F0%9F%87%B0%20%E9%A6%99%E6%B8%AF-14_%E8%A7%A3%E9%94%81
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmN2Y5ZmJmOC1mOTQ3LTRhMmEtYWQ1ZC04YWMzNWQzZWUwZjU=@hk15.ssyhi.xyz:50254#%F0%9F%87%AD%F0%9F%87%B0%20%E9%A6%99%E6%B8%AF-15_%E8%A7%A3%E9%94%81
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmN2Y5ZmJmOC1mOTQ3LTRhMmEtYWQ1ZC04YWMzNWQzZWUwZjU=@hk16.ssyhi.xyz:50255#%F0%9F%87%AD%F0%9F%87%B0%20%E9%A6%99%E6%B8%AF-16_%E8%A7%A3%E9%94%81
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmN2Y5ZmJmOC1mOTQ3LTRhMmEtYWQ1ZC04YWMzNWQzZWUwZjU=@jp01.ssyhi.xyz:50210#%F0%9F%87%AF%F0%9F%87%B5%20%E6%97%A5%E6%9C%AC-01_%E8%A7%A3%E9%94%81
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmN2Y5ZmJmOC1mOTQ3LTRhMmEtYWQ1ZC04YWMzNWQzZWUwZjU=@jp02.ssyhi.xyz:50211#%F0%9F%87%AF%F0%9F%87%B5%20%E6%97%A5%E6%9C%AC-02_%E8%A7%A3%E9%94%81
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmN2Y5ZmJmOC1mOTQ3LTRhMmEtYWQ1ZC04YWMzNWQzZWUwZjU=@jp03.ssyhi.xyz:50212#%F0%9F%87%AF%F0%9F%87%B5%20%E6%97%A5%E6%9C%AC-03_%E8%A7%A3%E9%94%81
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmN2Y5ZmJmOC1mOTQ3LTRhMmEtYWQ1ZC04YWMzNWQzZWUwZjU=@jp04.ssyhi.xyz:50213#%F0%9F%87%AF%F0%9F%87%B5%20%E6%97%A5%E6%9C%AC-04_%E8%A7%A3%E9%94%81
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmN2Y5ZmJmOC1mOTQ3LTRhMmEtYWQ1ZC04YWMzNWQzZWUwZjU=@jp05.ssyhi.xyz:50214#%F0%9F%87%AF%F0%9F%87%B5%20%E6%97%A5%E6%9C%AC-05_%E8%A7%A3%E9%94%81
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmN2Y5ZmJmOC1mOTQ3LTRhMmEtYWQ1ZC04YWMzNWQzZWUwZjU=@jp06.ssyhi.xyz:50215#%F0%9F%87%AF%F0%9F%87%B5%20%E6%97%A5%E6%9C%AC-06_%E8%A7%A3%E9%94%81
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmN2Y5ZmJmOC1mOTQ3LTRhMmEtYWQ1ZC04YWMzNWQzZWUwZjU=@jp07.ssyhi.xyz:50216#%F0%9F%87%AF%F0%9F%87%B5%20%E6%97%A5%E6%9C%AC-07_%E8%A7%A3%E9%94%81
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmN2Y5ZmJmOC1mOTQ3LTRhMmEtYWQ1ZC04YWMzNWQzZWUwZjU=@jp08.ssyhi.xyz:50217#%F0%9F%87%AF%F0%9F%87%B5%20%E6%97%A5%E6%9C%AC-08_%E8%A7%A3%E9%94%81
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmN2Y5ZmJmOC1mOTQ3LTRhMmEtYWQ1ZC04YWMzNWQzZWUwZjU=@sg01.ssyhi.xyz:50218#%F0%9F%87%B8%F0%9F%87%AC%20%E6%96%B0%E5%8A%A0%E5%9D%A1-01_%E8%A7%A3%E9%94%81
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmN2Y5ZmJmOC1mOTQ3LTRhMmEtYWQ1ZC04YWMzNWQzZWUwZjU=@sg02.ssyhi.xyz:50219#%F0%9F%87%B8%F0%9F%87%AC%20%E6%96%B0%E5%8A%A0%E5%9D%A1-02_%E8%A7%A3%E9%94%81
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmN2Y5ZmJmOC1mOTQ3LTRhMmEtYWQ1ZC04YWMzNWQzZWUwZjU=@sg03.ssyhi.xyz:50220#%F0%9F%87%B8%F0%9F%87%AC%20%E6%96%B0%E5%8A%A0%E5%9D%A1-03_%E8%A7%A3%E9%94%81
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmN2Y5ZmJmOC1mOTQ3LTRhMmEtYWQ1ZC04YWMzNWQzZWUwZjU=@sg04.ssyhi.xyz:50221#%F0%9F%87%B8%F0%9F%87%AC%20%E6%96%B0%E5%8A%A0%E5%9D%A1-04_%E8%A7%A3%E9%94%81
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmN2Y5ZmJmOC1mOTQ3LTRhMmEtYWQ1ZC04YWMzNWQzZWUwZjU=@sg05.ssyhi.xyz:50222#%F0%9F%87%B8%F0%9F%87%AC%20%E6%96%B0%E5%8A%A0%E5%9D%A1-05_%E8%A7%A3%E9%94%81
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmN2Y5ZmJmOC1mOTQ3LTRhMmEtYWQ1ZC04YWMzNWQzZWUwZjU=@sg06.ssyhi.xyz:50223#%F0%9F%87%B8%F0%9F%87%AC%20%E6%96%B0%E5%8A%A0%E5%9D%A1-06_%E8%A7%A3%E9%94%81
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmN2Y5ZmJmOC1mOTQ3LTRhMmEtYWQ1ZC04YWMzNWQzZWUwZjU=@sg07.ssyhi.xyz:50224#%F0%9F%87%B8%F0%9F%87%AC%20%E6%96%B0%E5%8A%A0%E5%9D%A1-07_%E8%A7%A3%E9%94%81
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmN2Y5ZmJmOC1mOTQ3LTRhMmEtYWQ1ZC04YWMzNWQzZWUwZjU=@sg08.ssyhi.xyz:50225#%F0%9F%87%B8%F0%9F%87%AC%20%E6%96%B0%E5%8A%A0%E5%9D%A1-08_%E8%A7%A3%E9%94%81
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmN2Y5ZmJmOC1mOTQ3LTRhMmEtYWQ1ZC04YWMzNWQzZWUwZjU=@sg09.ssyhi.xyz:50226#%F0%9F%87%B8%F0%9F%87%AC%20%E6%96%B0%E5%8A%A0%E5%9D%A1-09_%E8%A7%A3%E9%94%81
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmN2Y5ZmJmOC1mOTQ3LTRhMmEtYWQ1ZC04YWMzNWQzZWUwZjU=@sg10.ssyhi.xyz:50227#%F0%9F%87%B8%F0%9F%87%AC%20%E6%96%B0%E5%8A%A0%E5%9D%A1-10_%E8%A7%A3%E9%94%81
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmN2Y5ZmJmOC1mOTQ3LTRhMmEtYWQ1ZC04YWMzNWQzZWUwZjU=@us03.ssyhi.xyz:50230#%F0%9F%87%BA%F0%9F%87%B8%20%E7%BE%8E%E5%9B%BD-03_%E8%A7%A3%E9%94%81
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmN2Y5ZmJmOC1mOTQ3LTRhMmEtYWQ1ZC04YWMzNWQzZWUwZjU=@us04.ssyhi.xyz:50231#%F0%9F%87%BA%F0%9F%87%B8%20%E7%BE%8E%E5%9B%BD-04_%E8%A7%A3%E9%94%81
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmN2Y5ZmJmOC1mOTQ3LTRhMmEtYWQ1ZC04YWMzNWQzZWUwZjU=@us05.ssyhi.xyz:50232#%F0%9F%87%BA%F0%9F%87%B8%20%E7%BE%8E%E5%9B%BD-05_%E8%A7%A3%E9%94%81
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmN2Y5ZmJmOC1mOTQ3LTRhMmEtYWQ1ZC04YWMzNWQzZWUwZjU=@kr01.ssyhi.xyz:50246#%F0%9F%87%B0%F0%9F%87%B7%20%E9%9F%A9%E5%9B%BD
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmN2Y5ZmJmOC1mOTQ3LTRhMmEtYWQ1ZC04YWMzNWQzZWUwZjU=@vn01.ssyhi.xyz:50233#%F0%9F%87%BB%F0%9F%87%B3%20%E8%B6%8A%E5%8D%97
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmN2Y5ZmJmOC1mOTQ3LTRhMmEtYWQ1ZC04YWMzNWQzZWUwZjU=@tw01.ssyhi.xyz:50234#%F0%9F%87%B9%F0%9F%87%BC%20%E5%8F%B0%E6%B9%BE1
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmN2Y5ZmJmOC1mOTQ3LTRhMmEtYWQ1ZC04YWMzNWQzZWUwZjU=@tw02.ssyhi.xyz:50235#%F0%9F%87%B9%F0%9F%87%BC%20%E5%8F%B0%E6%B9%BE2
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmN2Y5ZmJmOC1mOTQ3LTRhMmEtYWQ1ZC04YWMzNWQzZWUwZjU=@ca01.ssyhi.xyz:50236#%F0%9F%87%A8%F0%9F%87%A6%20%E5%8A%A0%E6%8B%BF%E5%A4%A7
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmN2Y5ZmJmOC1mOTQ3LTRhMmEtYWQ1ZC04YWMzNWQzZWUwZjU=@in01.ssyhi.xyz:50237#%F0%9F%87%AE%F0%9F%87%B3%20%E5%8D%B0%E5%BA%A6
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmN2Y5ZmJmOC1mOTQ3LTRhMmEtYWQ1ZC04YWMzNWQzZWUwZjU=@id01.ssyhi.xyz:50238#%F0%9F%87%AE%F0%9F%87%A9%20%E5%8D%B0%E5%B0%BC
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmN2Y5ZmJmOC1mOTQ3LTRhMmEtYWQ1ZC04YWMzNWQzZWUwZjU=@se01.ssyhi.xyz:50239#%F0%9F%87%B8%F0%9F%87%AA%20%E7%91%9E%E5%85%B8
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmN2Y5ZmJmOC1mOTQ3LTRhMmEtYWQ1ZC04YWMzNWQzZWUwZjU=@nl01.ssyhi.xyz:50240#%F0%9F%87%B3%F0%9F%87%B1%20%E8%8D%B7%E5%85%B0
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmN2Y5ZmJmOC1mOTQ3LTRhMmEtYWQ1ZC04YWMzNWQzZWUwZjU=@it01.ssyhi.xyz:50241#%F0%9F%87%AE%F0%9F%87%B9%20%E6%84%8F%E5%A4%A7%E5%88%A9
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmN2Y5ZmJmOC1mOTQ3LTRhMmEtYWQ1ZC04YWMzNWQzZWUwZjU=@fr01.ssyhi.xyz:50242#%F0%9F%87%AB%F0%9F%87%B7%20%E6%B3%95%E5%9B%BD
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmN2Y5ZmJmOC1mOTQ3LTRhMmEtYWQ1ZC04YWMzNWQzZWUwZjU=@es01.ssyhi.xyz:50243#%F0%9F%87%AA%F0%9F%87%B8%20%E8%A5%BF%E7%8F%AD%E7%89%99
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmN2Y5ZmJmOC1mOTQ3LTRhMmEtYWQ1ZC04YWMzNWQzZWUwZjU=@br01.ssyhi.xyz:50245#%F0%9F%87%A7%F0%9F%87%B7%20%E5%B7%B4%E8%A5%BF
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmN2Y5ZmJmOC1mOTQ3LTRhMmEtYWQ1ZC04YWMzNWQzZWUwZjU=@my01.ssyhi.xyz:53898#%F0%9F%87%B2%F0%9F%87%BE%20%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9A
`

let urls = [];
let subconverter = "subapi-loadbalancing.pages.dev"; //在线订阅转换后端，目前使用CM的订阅转换功能。支持自建psub 可自行搭建https://github.com/bulianglin/psub
let subconfig = "https://raw.githubusercontent.com/cmliu/ACL4SSR/main/Clash/config/ACL4SSR_Online_MultiCountry.ini"; //订阅配置文件
let subProtocol = 'https';

export default {
	async fetch (request,env) {
		const userAgentHeader = request.headers.get('User-Agent');
		const userAgent = userAgentHeader ? userAgentHeader.toLowerCase() : "null";
		const url = new URL(request.url);
		const token = url.searchParams.get('token');
		mytoken = env.TOKEN || mytoken;
		BotToken = env.TGTOKEN || BotToken;
		ChatID = env.TGID || ChatID; 
		TG =  env.TG || TG; 
		subconverter = env.SUBAPI || subconverter;
		if( subconverter.includes("http://") ){
			subconverter = subconverter.split("//")[1];
			subProtocol = 'http';
		} else {
			subconverter = subconverter.split("//")[1] || subconverter;
		}
		subconfig = env.SUBCONFIG || subconfig;
		FileName = env.SUBNAME || FileName;
		MainData = env.LINK || MainData;
		if(env.LINKSUB) urls = await ADD(env.LINKSUB);

		const currentDate = new Date();
		currentDate.setHours(0, 0, 0, 0); 
		const timeTemp = Math.ceil(currentDate.getTime() / 1000);
		const fakeToken = await MD5MD5(`${mytoken}${timeTemp}`);
		//console.log(`${fakeUserID}\n${fakeHostName}`); // 打印fakeID

		let UD = Math.floor(((timestamp - Date.now())/timestamp * total * 1099511627776 )/2);
		total = total * 1099511627776 ;
		let expire= Math.floor(timestamp / 1000) ;
		SUBUpdateTime = env.SUBUPTIME || SUBUpdateTime;

		let 重新汇总所有链接 = await ADD(MainData + '\n' + urls.join('\n'));
		let 自建节点 ="";
		let 订阅链接 ="";
		for (let x of 重新汇总所有链接) {
			if (x.toLowerCase().startsWith('http')) {
				订阅链接 += x + '\n';
			} else {
				自建节点 += x + '\n';
			}
		}
		MainData = 自建节点;
		urls = await ADD(订阅链接);

		if ( !(token == mytoken || token == fakeToken || url.pathname == ("/"+ mytoken) || url.pathname.includes("/"+ mytoken + "?")) ) {
			if ( TG == 1 && url.pathname !== "/" && url.pathname !== "/favicon.ico" ) await sendMessage(`#异常访问 ${FileName}`, request.headers.get('CF-Connecting-IP'), `UA: ${userAgent}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);
			const envKey = env.URL302 ? 'URL302' : (env.URL ? 'URL' : null);
			if (envKey) {
				const URLs = await ADD(env[envKey]);
				const URL = URLs[Math.floor(Math.random() * URLs.length)];
				return envKey === 'URL302' ? Response.redirect(URL, 302) : fetch(new Request(URL, request));
			}
			return new Response(await nginx(), { 
				status: 200 ,
				headers: {
					'Content-Type': 'text/html; charset=UTF-8',
				},
			});
		} else {
			await sendMessage(`#获取订阅 ${FileName}`, request.headers.get('CF-Connecting-IP'), `UA: ${userAgentHeader}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);
			let 订阅格式 = 'base64';
			if (userAgent.includes('null') || userAgent.includes('subconverter') || userAgent.includes('nekobox') || userAgent.includes(('CF-Workers-SUB').toLowerCase())){
				订阅格式 = 'base64';
			} else if (userAgent.includes('clash') || ( url.searchParams.has('clash') && !userAgent.includes('subconverter'))){
				订阅格式 = 'clash';
			} else if (userAgent.includes('sing-box') || userAgent.includes('singbox') || ( (url.searchParams.has('sb') || url.searchParams.has('singbox')) && !userAgent.includes('subconverter'))){
				订阅格式 = 'singbox';
			} else if (userAgent.includes('surge') || ( url.searchParams.has('surge') && !userAgent.includes('subconverter'))){
				订阅格式 = 'surge';
			}

			let subconverterUrl ;
			let 订阅转换URL = `${url.origin}/${await MD5MD5(fakeToken)}?token=${fakeToken}`;
			//console.log(订阅转换URL);
			let req_data = MainData;
			// 创建一个AbortController对象，用于控制fetch请求的取消
			const controller = new AbortController();
	
			const timeout = setTimeout(() => {
				controller.abort(); // 取消所有请求
			}, 2000); // 2秒后触发
	

			let 追加UA = 'v2rayn';
			if (url.searchParams.has('clash')){
				追加UA = 'clash';
			} else if(url.searchParams.has('singbox')){
				追加UA = 'singbox';
			} else if(url.searchParams.has('surge')){
				追加UA = 'surge';
			}
			
			try {
				const responses = await Promise.allSettled(urls.map(url =>
					fetch(url, {
						method: 'get',
						headers: {
							'Accept': 'text/html,application/xhtml+xml,application/xml;',
							'User-Agent': `${追加UA} cmliu/CF-Workers-SUB ${userAgentHeader}`
						},
						signal: controller.signal // 将AbortController的信号量添加到fetch请求中，以便于需要时可以取消请求
					}).then(response => {
						if (response.ok) {
							return response.text().then(content => {
								// 这里可以顺便做内容检查
								if (content.includes('dns') && content.includes('proxies') && content.includes('proxy-groups')) {
									//console.log("clashsub: " + url);
									订阅转换URL += "|" + url;
								} else if (content.includes('dns') && content.includes('outbounds') && content.includes('inbounds')){
									//console.log("singboxsub: " + url);
									订阅转换URL += "|" + url;
								} else {
									//console.log("未识别" + url);
									return content; // 保证链式调用中的下一个then可以接收到文本内容
								}
								//console.log(content);
							});
						} else {
							return ""; // 如果response.ok为false，返回空字符串
						}
					})
				));	
			
				for (const response of responses) {
					if (response.status === 'fulfilled' && response.value) {
						const content = response.value;
						req_data += base64Decode(content) + '\n';
					}
				}
			
			} catch (error) {
				//console.error(error);
			} finally {
				// 无论成功或失败，最后都清除设置的超时定时器
				clearTimeout(timeout);
			}

			//修复中文错误
			const utf8Encoder = new TextEncoder();
			const encodedData = utf8Encoder.encode(req_data);
			const text = String.fromCharCode.apply(null, encodedData);
			
			//去重
			const uniqueLines = new Set(text.split('\n'));
			const result = [...uniqueLines].join('\n');
			console.log(result);
			
			const base64Data = btoa(result);

			if (订阅格式 == 'base64' || token == fakeToken){
				return new Response(base64Data ,{
					headers: { 
						"content-type": "text/plain; charset=utf-8",
						"Profile-Update-Interval": `${SUBUpdateTime}`,
						"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,
					}
				});
			} else if (订阅格式 == 'clash'){
				subconverterUrl = `${subProtocol}://${subconverter}/sub?target=clash&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subconfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
			} else if (订阅格式 == 'singbox'){
				subconverterUrl = `${subProtocol}://${subconverter}/sub?target=singbox&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subconfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
			} else if (订阅格式 == 'surge'){
				subconverterUrl = `${subProtocol}://${subconverter}/sub?target=surge&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subconfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
			}
			console.log(订阅转换URL);
			try {
				const subconverterResponse = await fetch(subconverterUrl);
				
				if (!subconverterResponse.ok) {
					return new Response(base64Data ,{
						headers: { 
							"content-type": "text/plain; charset=utf-8",
							"Profile-Update-Interval": `${SUBUpdateTime}`,
							"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,
						}
					});
					//throw new Error(`Error fetching subconverterUrl: ${subconverterResponse.status} ${subconverterResponse.statusText}`);
				}
				let subconverterContent = await subconverterResponse.text();
				if (订阅格式 == 'clash') subconverterContent =await clashFix(subconverterContent);
				return new Response(subconverterContent, {
					headers: { 
						"Content-Disposition": `attachment; filename*=utf-8''${encodeURIComponent(FileName)}; filename=${FileName}`,
						"content-type": "text/plain; charset=utf-8",
						"Profile-Update-Interval": `${SUBUpdateTime}`,
						"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,

					},
				});
			} catch (error) {
				return new Response(base64Data ,{
					headers: { 
						"content-type": "text/plain; charset=utf-8",
						"Profile-Update-Interval": `${SUBUpdateTime}`,
						"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,
					}
				});
			}
		}
	}
};

async function ADD(envadd) {
	var addtext = envadd.replace(/[	"'|\r\n]+/g, ',').replace(/,+/g, ',');  // 将空格、双引号、单引号和换行符替换为逗号
	//console.log(addtext);
	if (addtext.charAt(0) == ',') addtext = addtext.slice(1);
	if (addtext.charAt(addtext.length -1) == ',') addtext = addtext.slice(0, addtext.length - 1);
	const add = addtext.split(',');
	//console.log(add);
	return add ;
}

async function nginx() {
	const text = `
	<!DOCTYPE html>
	<html>
	<head>
	<title>Welcome to nginx!</title>
	<style>
		body {
			width: 35em;
			margin: 0 auto;
			font-family: Tahoma, Verdana, Arial, sans-serif;
		}
	</style>
	</head>
	<body>
	<h1>Welcome to nginx!</h1>
	<p>If you see this page, the nginx web server is successfully installed and
	working. Further configuration is required.</p>
	
	<p>For online documentation and support please refer to
	<a href="http://nginx.org/">nginx.org</a>.<br/>
	Commercial support is available at
	<a href="http://nginx.com/">nginx.com</a>.</p>
	
	<p><em>Thank you for using nginx.</em></p>
	</body>
	</html>
	`
	return text ;
}

async function sendMessage(type, ip, add_data = "") {
	if ( BotToken !== '' && ChatID !== ''){
		let msg = "";
		const response = await fetch(`http://ip-api.com/json/${ip}?lang=zh-CN`);
		if (response.status == 200) {
			const ipInfo = await response.json();
			msg = `${type}\nIP: ${ip}\n国家: ${ipInfo.country}\n<tg-spoiler>城市: ${ipInfo.city}\n组织: ${ipInfo.org}\nASN: ${ipInfo.as}\n${add_data}`;
		} else {
			msg = `${type}\nIP: ${ip}\n<tg-spoiler>${add_data}`;
		}
	
		let url = "https://api.telegram.org/bot"+ BotToken +"/sendMessage?chat_id=" + ChatID + "&parse_mode=HTML&text=" + encodeURIComponent(msg);
		return fetch(url, {
			method: 'get',
			headers: {
				'Accept': 'text/html,application/xhtml+xml,application/xml;',
				'Accept-Encoding': 'gzip, deflate, br',
				'User-Agent': 'Mozilla/5.0 Chrome/90.0.4430.72'
			}
		});
	}
}

function base64Decode(str) {
	const bytes = new Uint8Array(atob(str).split('').map(c => c.charCodeAt(0)));
	const decoder = new TextDecoder('utf-8');
	return decoder.decode(bytes);
}

async function MD5MD5(text) {
	const encoder = new TextEncoder();
  
	const firstPass = await crypto.subtle.digest('MD5', encoder.encode(text));
	const firstPassArray = Array.from(new Uint8Array(firstPass));
	const firstHex = firstPassArray.map(b => b.toString(16).padStart(2, '0')).join('');

	const secondPass = await crypto.subtle.digest('MD5', encoder.encode(firstHex.slice(7, 27)));
	const secondPassArray = Array.from(new Uint8Array(secondPass));
	const secondHex = secondPassArray.map(b => b.toString(16).padStart(2, '0')).join('');
  
	return secondHex.toLowerCase();
}

function clashFix(content) {
	if(content.includes('wireguard') && !content.includes('remote-dns-resolve')){
		let lines;
		if (content.includes('\r\n')){
			lines = content.split('\r\n');
		} else {
			lines = content.split('\n');
		}
	
		let result = "";
		for (let line of lines) {
			if (line.includes('type: wireguard')) {
				const 备改内容 = `, mtu: 1280, udp: true`;
				const 正确内容 = `, mtu: 1280, remote-dns-resolve: true, udp: true`;
				result += line.replace(new RegExp(备改内容, 'g'), 正确内容) + '\n';
			} else {
				result += line + '\n';
			}
		}

		content = result;
	}
	return content;
}
