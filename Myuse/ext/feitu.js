/**
 * 影视TV 超連結跳轉支持
 * https://t.me/fongmi_offical/
 * https://github.com/FongMi/Release/tree/main/apk
 */

var rule = {
	title: '飞兔',
	host: 'https://www.feitu.tv/',
	homeUrl: '',//网站的首页链接,用于分类获取和推荐获取
	// url:'/api/crumb/list?area=0&category_id=fyclass&page=fypage&type=0&limit=24&fyfilter',
	url: '/category/fyfilter',

	class_name: '电影&电视剧&综艺&动漫&超爽短剧&篮球&足球',     // 筛选 /api/term/ad_fenlei?limit=10&page=1
	class_url: '1&2&3&4&110&78&77',
//	https://www.feitu.tv/detail/{vid}
	detailUrl: '/detail/fyid',//二级详情拼接链接(json格式用)
	searchUrl: '/search/{wd}-/page=fypage',
	searchable: 2,
	quickSearch: 0,
	filterable: 1,
	filter: {
                "1": [
                  {
                    "key": "cateId",
                    "name": "类型",
                    "value": [
                      {
                        "n": "全部",
                        "v": ""
                      },
                      {
                        "n": "剧情",
                        "v": "11"
                      },
                      {
                        "n": "动作",
                        "v": "6"
                      },
                      {
                        "n": "喜剧",
                        "v": "7"
                      },
                      {
                        "n": "科幻",
                        "v": "9"
                      },
                      {
                        "n": "爱情",
                        "v": "8"
                      },
                      {
                        "n": "恐怖",
                        "v": "10"
                      },
                      {
                        "n": "惊悚",
                        "v": "25"
                      },
                      {
                        "n": "战争",
                        "v": "12"
                      },
                      {
                        "n": "动画电影",
                        "v": "21"
                      },
                      {
                        "n": "网络电影",
                        "v": "30"
                      }
                    ]
                  },
                  {
                    "key": "area",
                    "name": "地区",
                    "value": [
                      {
                        "n": "全部",
                        "v": ""
                      },
                      {
                        "n": "大陆",
                        "v": "大陆"
                      },
                      {
                        "n": "欧美",
                        "v": "欧美"
                      },
                      {
                        "n": "日本",
                        "v": "日本"
                      },
                      {
                        "n": "韩国",
                        "v": "韩国"
                      },
                      {
                        "n": "香港",
                        "v": "香港"
                      },
                      {
                        "n": "台湾",
                        "v": "台湾"
                      },
                      {
                        "n": "其它",
                        "v": "其它"
                      }
                    ]
                  },
                  {
                    "key": "year",
                    "name": "年份",
                    "value": [
                      {
                        "n": "全部",
                        "v": ""
                      },
                      {
                        "n": "2024",
                        "v": "2024"
                      },
                      {
                        "n": "2023",
                        "v": "2023"
                      },
                      {
                        "n": "2022",
                        "v": "2022"
                      },
                      {
                        "n": "2021",
                        "v": "2021"
                      },
                      {
                        "n": "2020",
                        "v": "2020"
                      },
                      {
                        "n": "2019",
                        "v": "2019"
                      },
                      {
                        "n": "2018",
                        "v": "2018"
                      },
                      {
                        "n": "2017",
                        "v": "2017"
                      },
                      {
                        "n": "2016",
                        "v": "2016"
                      },
                      {
                        "n": "2015",
                        "v": "2015"
                      },
                      {
                        "n": "2014",
                        "v": "2014"
                      },
                      {
                        "n": "2013",
                        "v": "2013"
                      },
                      {
                        "n": "2012",
                        "v": "2012"
                      },
                      {
                        "n": "2011",
                        "v": "2011"
                      },
                      {
                        "n": "2010",
                        "v": "2010"
                      }
                    ]
                  },
                  {
                    "key": "by",
                    "name": "排序",
                    "value": [
                      {
                        "n": "按最新",
                        "v": "time"
                      },
                      {
                        "n": "按最热",
                        "v": "hits"
                      },
                      {
                        "n": "按评分",
                        "v": "score"
                      }
                    ]
                  }
                ],
                "2": [
                  {
                    "key": "cateId",
                    "name": "类型",
                    "value": [
                      {
                        "n": "全部",
                        "v": ""
                      },
                      {
                        "n": "国产剧",
                        "v": "13"
                      },
                      {
                        "n": "欧美剧",
                        "v": "16"
                      },
                      {
                        "n": "港剧",
                        "v": "14"
                      },
                      {
                        "n": "日本剧",
                        "v": "23"
                      },
                      {
                        "n": "韩剧",
                        "v": "31"
                      },
                      {
                        "n": "台剧",
                        "v": "33"
                      },
                      {
                        "n": "泰剧",
                        "v": "32"
                      },
                      {
                        "n": "其它剧",
                        "v": "35"
                      }
                    ]
                  },
                  {
                    "key": "class",
                    "name": "剧情",
                    "value": [
                      {
                        "n": "全部",
                        "v": ""
                      },
                      {
                        "n": "古装",
                        "v": "古装"
                      },
                      {
                        "n": "战争",
                        "v": "战争"
                      },
                      {
                        "n": "青春偶像",
                        "v": "青春偶像"
                      },
                      {
                        "n": "喜剧",
                        "v": "喜剧"
                      },
                      {
                        "n": "家庭",
                        "v": "家庭"
                      },
                      {
                        "n": "剧情",
                        "v": "剧情"
                      },
                      {
                        "n": "犯罪",
                        "v": "犯罪"
                      },
                      {
                        "n": "动作",
                        "v": "动作"
                      },
                      {
                        "n": "奇幻",
                        "v": "奇幻"
                      },
                      {
                        "n": "剧情",
                        "v": "剧情"
                      },
                      {
                        "n": "历史",
                        "v": "历史"
                      },
                      {
                        "n": "经典",
                        "v": "经典"
                      },
                      {
                        "n": "乡村",
                        "v": "乡村"
                      },
                      {
                        "n": "情景",
                        "v": "情景"
                      },
                      {
                        "n": "商战",
                        "v": "商战"
                      },
                      {
                        "n": "网剧",
                        "v": "网剧"
                      },
                      {
                        "n": "其他",
                        "v": "其他"
                      }
                    ]
                  },
                  {
                    "key": "year",
                    "name": "年份",
                    "value": [
                      {
                        "n": "全部",
                        "v": ""
                      },
                      {
                        "n": "2024",
                        "v": "2024"
                      },
                      {
                        "n": "2023",
                        "v": "2023"
                      },
                      {
                        "n": "2022",
                        "v": "2022"
                      },
                      {
                        "n": "2021",
                        "v": "2021"
                      },
                      {
                        "n": "2020",
                        "v": "2020"
                      },
                      {
                        "n": "2019",
                        "v": "2019"
                      },
                      {
                        "n": "2018",
                        "v": "2018"
                      },
                      {
                        "n": "2017",
                        "v": "2017"
                      },
                      {
                        "n": "2016",
                        "v": "2016"
                      },
                      {
                        "n": "2015",
                        "v": "2015"
                      },
                      {
                        "n": "2014",
                        "v": "2014"
                      },
                      {
                        "n": "2013",
                        "v": "2013"
                      },
                      {
                        "n": "2012",
                        "v": "2012"
                      },
                      {
                        "n": "2011",
                        "v": "2011"
                      },
                      {
                        "n": "2010",
                        "v": "2010"
                      },
                      {
                        "n": "2009",
                        "v": "2009"
                      },
                      {
                        "n": "2008",
                        "v": "2008"
                      },
                      {
                        "n": "2006",
                        "v": "2006"
                      },
                      {
                        "n": "2005",
                        "v": "2005"
                      },
                      {
                        "n": "2004",
                        "v": "2004"
                      }
                    ]
                  },
                  {
                    "key": "by",
                    "name": "排序",
                    "value": [
                      {
                        "n": "时间",
                        "v": "time"
                      },
                      {
                        "n": "人气",
                        "v": "hits"
                      },
                      {
                        "n": "评分",
                        "v": "score"
                      }
                    ]
                  }
                ],
                "3": [
                  {
                    "key": "cateId",
                    "name": "类型",
                    "value": [
                      {
                        "n": "全部",
                        "v": ""
                      },
                      {
                        "n": "国产综艺",
                        "v": "39"
                      },
                      {
                        "n": "韩国综艺",
                        "v": "38"
                      },
                      {
                        "n": "欧美综艺",
                        "v": "36"
                      },
                      {
                        "n": "日本综艺",
                        "v": "37"
                      },
                      {
                        "n": "港台综艺",
                        "v": "41"
                      },
                      {
                        "n": "演唱会",
                        "v": "122"
                      },
                      {
                        "n": "其它综艺",
                        "v": "42"
                      },
                      {
                        "n": "音乐MV",
                        "v": "125"
                      }
                    ]
                  },
                  {
                    "key": "year",
                    "name": "年份",
                    "value": [
                      {
                        "n": "全部",
                        "v": ""
                      },
                      {
                        "n": "2024",
                        "v": "2024"
                      },
                      {
                        "n": "2023",
                        "v": "2023"
                      },
                      {
                        "n": "2022",
                        "v": "2022"
                      },
                      {
                        "n": "2021",
                        "v": "2021"
                      },
                      {
                        "n": "2020",
                        "v": "2020"
                      },
                      {
                        "n": "2019",
                        "v": "2019"
                      },
                      {
                        "n": "2018",
                        "v": "2018"
                      },
                      {
                        "n": "2017",
                        "v": "2017"
                      },
                      {
                        "n": "2016",
                        "v": "2016"
                      },
                      {
                        "n": "2015",
                        "v": "2015"
                      },
                      {
                        "n": "2014",
                        "v": "2014"
                      },
                      {
                        "n": "2013",
                        "v": "2013"
                      },
                      {
                        "n": "2012",
                        "v": "2012"
                      },
                      {
                        "n": "2011",
                        "v": "2011"
                      },
                      {
                        "n": "2010",
                        "v": "2010"
                      },
                      {
                        "n": "2009",
                        "v": "2009"
                      },
                      {
                        "n": "2008",
                        "v": "2008"
                      },
                      {
                        "n": "2006",
                        "v": "2006"
                      },
                      {
                        "n": "2005",
                        "v": "2005"
                      },
                      {
                        "n": "2004",
                        "v": "2004"
                      }
                    ]
                  },
                  {
                    "key": "by",
                    "name": "排序",
                    "value": [
                      {
                        "n": "时间",
                        "v": "time"
                      },
                      {
                        "n": "人气",
                        "v": "hits"
                      },
                      {
                        "n": "评分",
                        "v": "score"
                      }
                    ]
                  }
                ],
                "4": [
                  {
                    "key": "cateId",
                    "name": "类型",
                    "value": [
                      {
                        "n": "全部",
                        "v": ""
                      },
                      {
                        "n": "欧美动漫",
                        "v": "43"
                      },
                      {
                        "n": "日本动漫",
                        "v": "44"
                      },
                      {
                        "n": "国产动漫",
                        "v": "45"
                      },
                      {
                        "n": "港台动漫",
                        "v": "48"
                      },
                      {
                        "n": "其它动漫",
                        "v": "49"
                      }
                    ,
                      {
                        "n": "韩国动漫",
                        "v": "46"
                      }
                    ]
                  },
                  {
                    "key": "year",
                    "name": "年份",
                    "value": [
                      {
                        "n": "全部",
                        "v": ""
                      },
                      {
                        "n": "2024",
                        "v": "2024"
                      },
                      {
                        "n": "2023",
                        "v": "2023"
                      },
                      {
                        "n": "2022",
                        "v": "2022"
                      },
                      {
                        "n": "2021",
                        "v": "2021"
                      },
                      {
                        "n": "2020",
                        "v": "2020"
                      },
                      {
                        "n": "2019",
                        "v": "2019"
                      },
                      {
                        "n": "2018",
                        "v": "2018"
                      },
                      {
                        "n": "2017",
                        "v": "2017"
                      },
                      {
                        "n": "2016",
                        "v": "2016"
                      },
                      {
                        "n": "2015",
                        "v": "2015"
                      },
                      {
                        "n": "2014",
                        "v": "2014"
                      },
                      {
                        "n": "2013",
                        "v": "2013"
                      },
                      {
                        "n": "2012",
                        "v": "2012"
                      },
                      {
                        "n": "2011",
                        "v": "2011"
                      },
                      {
                        "n": "2010",
                        "v": "2010"
                      },
                      {
                        "n": "2009",
                        "v": "2009"
                      },
                      {
                        "n": "2008",
                        "v": "2008"
                      },
                      {
                        "n": "2006",
                        "v": "2006"
                      },
                      {
                        "n": "2005",
                        "v": "2005"
                      },
                      {
                        "n": "2004",
                        "v": "2004"
                      }
                    ]
                  },
                  {
                    "key": "by",
                    "name": "排序",
                    "value": [
                      {
                        "n": "时间",
                        "v": "time"
                      },
                      {
                        "n": "人气",
                        "v": "hits"
                      },
                      {
                        "n": "评分",
                        "v": "score"
                      }
                    ]
                  }
                ]
              },

	filter_url: 'area={{fl.area or "0"}}&sort={{fl.sort or "update"}}&year={{fl.year or "0"}}&category_id={{fl.cateId}}  ',
	filter_def: {
		1:{cateId:'1'},
		2:{cateId:'2'},
		3:{cateId:'3'},
		4:{cateId:'4'}
	},
	headers: {
		'User-Agent': 'jianpian-android/350',
		'JPAUTH': 'y261ow7kF2dtzlxh1GS9EB8nbTxNmaK/QQIAjctlKiEv'
	},
	timeout: 5000,
	limit: 8,
	play_parse: true,
	play_json: [{
		re: '*',
		json: {
			parse: 0,
			jx: 0
		}
	}],
	lazy: '',
	图片来源: '@Referer=www.jianpianapp.com@User-Agent=jianpian-version353',
	// 推荐:'json:.video;*;*;*;*',
	推荐: `js:
        var d = [];
        let html = request(input);
        html = JSON.parse(html).data[0].video;
        html.forEach(it => {
            d.push({
                title: it.title,
                img: it.path,
                desc: it.playlist.title + ' ⭐' + it.score,
                url: it.id
            })
        });
        setResult(d);
    `,
	// 一级:'json:data;title;path;playlist.title;id',
	一级: `js:
        if (cateObj.tid.endsWith('_clicklink')) {
            cateObj.tid = cateObj.tid.split('_')[0];
            input = HOST + 'filter/' + cateObj.tid + '/page/' + + MY_PAGE;
        }
        var d = [];
        let html = request(input);
        html = JSON.parse(html).data;
        html.forEach(it => {
            d.push({
                title: it.title,
                img: it.thumbnail||it.path,
                desc: (it.mask || it.playlist.title) + ' ⭐' + it.score,
                url: it.id
            })
        });
        setResult(d);
    `,
	二级: `js:
        function getLink(data) {
            let link = data.map(it => {
                return '[a=cr:' + JSON.stringify({'id':it.name+'_clicklink','name':it.name}) + '/]' + it.name + '[/a]'
            }).join(', ');
            return link
        }
		try {
            let html = request(input);
            html = JSON.parse(html);
            let node = html.data;
            VOD = {
                vod_id: node.id,
                vod_name: node.title,
                vod_pic: node.thumbnail,
                type_name: node.types[0].name,
                vod_year: node.year.title,
                vod_area: node.area.title,
                vod_remarks: node.score,
                vod_actor: getLink(node.actors),
                vod_director: getLink(node.directors),
                vod_content: node.description.strip()
            };
            if (typeof play_url === 'undefined') {
                var play_url = ''
            }
            let playMap = {};
			if (node.have_ftp_ur == 1) {
				playMap["边下边播超清版"] = node.new_ftp_list.map(it => {
					return it.title + "$" + (/m3u8/.test(it.url) ? play_url + it.url : "tvbox-xg:" + it.url)
				}).join('#');
			}
			if (node.have_m3u8_ur == 1) {
				playMap["在线点播普清版"] = node.new_m3u8_list.map(it => {
					return it.title + "$" + (/m3u8/.test(it.url) ? play_url + it.url : "tvbox-xg:" + it.url)
				}).join('#');
			}
            let playFrom = [];
            let playList = [];
            Object.keys(playMap).forEach(key => {
                playFrom.append(key);
                playList.append(playMap[key])
            });
            VOD.vod_play_from = playFrom.join('$$$');
            VOD.vod_play_url = playList.join('$$$');
        } catch (e) {
            log("获取二级详情页发生错误:" + e.message);
        }
	`,
	// 搜索:'json:data;*;thumbnail;mask;*',
	搜索: `js:
        var d = [];
        let html = request(input);
        html = JSON.parse(html).data;
        html.forEach(it => {
            d.push({
                title: it.title,
                img: it.thumbnail,
                desc: it.mask + ' ⭐' + it.score,
                url: it.id
            })
        });
        setResult(d);
    `,
}