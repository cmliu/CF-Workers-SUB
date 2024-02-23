
// 部署完成后在网址后面加上这个，获取自建节点和机场聚合节点，/?token=xxoo&tag=jichang
// 部署完成后在网址后面加上这个，只获取自建节点，/?token=xxoo


const mytoken = 'xxoo'; //可以随便取，或者uuid生成，https://1024tools.com/uuid
const tgbottoken =''; //可以为空，或者@BotFather中输入/start，/newbot，并关注机器人
const tgchatid =''; //可以为空，或者@userinfobot中获取，/start

//自建节点
const MainData = `
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpleGFtcGxlLmNvbQ@example1.com:443#example1
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpleGFtcGxlLmNvbQ@example2.com:443#example2
`

//机场信息，可多个，也可为0
const urls = [
	'https://mareep.netlify.app/sub/shadowrocket_base64.txt',
	'https://mareep.netlify.app/sub/shadowrocket_base64.txt'
	// 添加更多订阅,支持base64
];

//addEventListener('fetch', event => { event.respondWith(handleRequest(event.request)) })

export default {
	async fetch (request) {
		const url = new URL(request.url);
		const tag = url.searchParams.get('tag');
		const token = url.searchParams.get('token'); // Get the token from the URL

		if (token !== mytoken) {
			//await sendMessage("#Token错误信息", request.headers.get('CF-Connecting-IP'), `Invalid Token: ${token}`);
			return new Response('Invalid token???', { status: 403 });
		}

		let req_data = "";
		req_data += MainData
		if (tag) {
			switch (tag) {
			case 'jichang':
				const responses = await Promise.all(urls.map(url => fetch(url)));
		
				for (const response of responses) {
					if (response.ok) {
						const content = await response.text();
						req_data += atob(content) + '\n';
					}
				}
				
				break;
		
			default:
				
				break;
			}
		} 

		await sendMessage("#获取订阅", request.headers.get('CF-Connecting-IP'), `UA: ${userAgent}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);
		
		//修复中文错误
		const utf8Encoder = new TextEncoder();
		const encodedData = utf8Encoder.encode(req_data);
		const base64Data = btoa(String.fromCharCode.apply(null, encodedData));
		return new Response(base64Data);
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
