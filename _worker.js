
// 部署完成后在网址后面加上这个，获取自建节点和机场聚合节点，/?token=xxoo

const mytoken = 'xxoo'; //可以随便取，或者uuid生成，https://1024tools.com/uuid
let BotToken =''; //可以为空，或者@BotFather中输入/start，/newbot，并关注机器人
let ChatID =''; //可以为空，或者@userinfobot中获取，/start

//自建节点
const MainData = `
vless://30e9c5c8-ed28-4cd9-b008-dc67277f8b02@cf.090227.xyz:8443?encryption=none&security=tls&sni=tg.cmliussss.xxuz.com&fp=random&type=ws&host=tg.cmliussss.xxuz.com&path=%2FproxyIP%3Dproxyip.fxxk.dedyn.io#%E5%8A%A0%E5%85%A5%E6%88%91%E7%9A%84%E9%A2%91%E9%81%93%20t.me%2FCMLiussss%20%E8%A7%A3%E9%94%81%E6%9B%B4%E5%A4%9A%E4%BC%98%E9%80%89%E8%8A%82%E7%82%B9
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIkNoYW5uZWwgdC5tZS9DTUxpdXNzc3Mg6Kej6ZSB5LyY6YCJ6IqC54K5PuiNt+WFsCDpmL/lp4bmlq/nibnkuLkiLA0KICAiYWRkIjogImNmLjA5MDIyNy54eXoiLA0KICAicG9ydCI6ICI4NDQzIiwNCiAgImlkIjogIjA2MTk1YjViLTM4MTUtNGEwNy05NmY3LTQ3ZWVmYmIxYjE0MyIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAid3MiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAiODU4MmI2ZjItNzE5Mi00ZGE4LWE0Y2ItYzQ4MGI3MWU2YzU4LmU4ZTU0ZTBmLTYzMTctNDQ4YS05OTk5LTk1ZjZlMTZmNzExNy5vb2d1eS5jb20iLA0KICAicGF0aCI6ICIvdXJueGV3enZoLnNpdGU6NDQzL2t3aG12d3MiLA0KICAidGxzIjogInRscyIsDQogICJzbmkiOiAiODU4MmI2ZjItNzE5Mi00ZGE4LWE0Y2ItYzQ4MGI3MWU2YzU4LmU4ZTU0ZTBmLTYzMTctNDQ4YS05OTk5LTk1ZjZlMTZmNzExNy5vb2d1eS5jb20iLA0KICAiYWxwbiI6ICIiLA0KICAiZnAiOiAiIg0KfQ==
`

//机场信息，可多个，也可为0
const urls = [
	'https://mareep.netlify.app/sub/shadowrocket_base64.txt',
	'https://mareep.netlify.app/sub/shadowrocket_base64.txt',
	// 添加更多订阅,支持base64
];

let subconverter = "api.v1.mk"; //在线订阅转换后端，目前使用肥羊的订阅转换功能。支持自建psub 可自行搭建https://github.com/bulianglin/psub
let subconfig = "https://raw.githubusercontent.com/cmliu/edgetunnel/main/Clash/config/ACL4SSR_Online_Full.ini"; //订阅配置文件

//addEventListener('fetch', event => { event.respondWith(handleRequest(event.request)) })

export default {
	async fetch (request) {
		const userAgentHeader = request.headers.get('User-Agent');
		const userAgent = userAgentHeader ? userAgentHeader.toLowerCase() : "null";
		const url = new URL(request.url);
		//const tag = url.searchParams.get('tag');
		const token = url.searchParams.get('token'); // Get the token from the URL

		if (token !== mytoken) {
			//await sendMessage("#Token错误信息", request.headers.get('CF-Connecting-IP'), `Invalid Token: ${token}`);
			return new Response('Invalid token???', { status: 403 });
		}

		let req_data = "";
		req_data += MainData
		const responses = await Promise.all(urls.map(url => fetch(url,{
			method: 'get',
			headers: {
				'Accept': 'text/html,application/xhtml+xml,application/xml;',
				'User-Agent': 'CF-Workers-SUB/cmliu'
			}
		})));
			
		for (const response of responses) {
			if (response.ok) {
				const content = await response.text();
				req_data += atob(content) + '\n';
			}
		}

		await sendMessage("#获取订阅", request.headers.get('CF-Connecting-IP'), `UA: ${userAgent}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);

		if (userAgent.includes('clash')) {
			const subconverterUrl = `https://${subconverter}/sub?target=clash&url=${encodeURIComponent(request.url)}&insert=false&config=${encodeURIComponent(subconfig)}&emoji=true&list=false&tfo=false&scv=false&fdn=false&sort=false&new_name=true`;

			try {
				const subconverterResponse = await fetch(subconverterUrl);
				
				if (!subconverterResponse.ok) {
					throw new Error(`Error fetching subconverterUrl: ${subconverterResponse.status} ${subconverterResponse.statusText}`);
				}
				
				const subconverterContent = await subconverterResponse.text();
				
				return new Response(subconverterContent, {
					headers: { 'content-type': 'text/plain; charset=utf-8' },
				});
			} catch (error) {
				return new Response(`Error: ${error.message}`, {
					status: 500,
					headers: { 'content-type': 'text/plain; charset=utf-8' },
				});
			}
		} else if (userAgent.includes('sing-box') || userAgent.includes('singbox')) {
			const subconverterUrl = `https://${subconverter}/sub?target=singbox&url=${encodeURIComponent(request.url)}&insert=false&config=${encodeURIComponent(subconfig)}&emoji=true&list=false&tfo=false&scv=false&fdn=false&sort=false&new_name=true`;

			try {
				const subconverterResponse = await fetch(subconverterUrl);
				
				if (!subconverterResponse.ok) {
					throw new Error(`Error fetching subconverterUrl: ${subconverterResponse.status} ${subconverterResponse.statusText}`);
				}
				
				const subconverterContent = await subconverterResponse.text();
				
				return new Response(subconverterContent, {
					headers: { 'content-type': 'text/plain; charset=utf-8' },
				});
			} catch (error) {
				return new Response(`Error: ${error.message}`, {
					status: 500,
					headers: { 'content-type': 'text/plain; charset=utf-8' },
				});
			}
		} else {
			//修复中文错误
			const utf8Encoder = new TextEncoder();
			const encodedData = utf8Encoder.encode(req_data);
			const base64Data = btoa(String.fromCharCode.apply(null, encodedData));
			return new Response(base64Data);
		}
	}
};

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
