(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{222:function(a,t,s){"use strict";s.r(t);var r=s(0),e=Object(r.a)({},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"테스트넷-가이드"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#테스트넷-가이드","aria-hidden":"true"}},[a._v("#")]),a._v(" 테스트넷 가이드")]),a._v(" "),s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[a._v("WARNING")]),a._v(" "),s("p",[s("strong",[a._v("테스트넷 브랜치 주소와 데이터는 변경되거나 삭제 될 수 있습니다.")])])]),a._v(" "),s("h2",{attrs:{id:"yggdrash-test-net-url"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#yggdrash-test-net-url","aria-hidden":"true"}},[a._v("#")]),a._v(" YGGDRASH TEST NET URL")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://testnet.yggdrash.io",target:"_blank",rel:"noopener noreferrer"}},[a._v("TEST NET Explorer"),s("OutboundLink")],1)]),a._v(" "),s("h2",{attrs:{id:"wallet-guide"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wallet-guide","aria-hidden":"true"}},[a._v("#")]),a._v(" Wallet Guide")]),a._v(" "),s("h3",{attrs:{id:"yggdrash-web-wallet-준비중"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#yggdrash-web-wallet-준비중","aria-hidden":"true"}},[a._v("#")]),a._v(" YGGDRASH WEB Wallet (준비중)")]),a._v(" "),s("ul",[s("li",[a._v("TBD")])]),a._v(" "),s("h3",{attrs:{id:"yggdrash-javascript-sdk"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#yggdrash-javascript-sdk","aria-hidden":"true"}},[a._v("#")]),a._v(" YGGDRASH Javascript SDK")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/yggdrash/yggdrash-sdk-js",target:"_blank",rel:"noopener noreferrer"}},[a._v("javascript sdk"),s("OutboundLink")],1)])]),a._v(" "),s("h3",{attrs:{id:"yggdrash-cli"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#yggdrash-cli","aria-hidden":"true"}},[a._v("#")]),a._v(" YGGDRASH CLI")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/yggdrash/yggdrash-cli",target:"_blank",rel:"noopener noreferrer"}},[a._v("YGGDRASH CLI"),s("OutboundLink")],1)]),a._v(" "),s("li",[a._v("자세한내용은 "),s("router-link",{attrs:{to:"/ko/guide/installation.html#이그드라시-커맨더-설치"}},[a._v("이그드라시 커맨더 설치")]),a._v(" 항목을 봐주세요.")],1),a._v(" "),s("li",[a._v("cli 0.3.3 이상 버젼에서 해당 명령어가 적용 됩니다.")])]),a._v(" "),s("h3",{attrs:{id:"신규-계정-생성"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#신규-계정-생성","aria-hidden":"true"}},[a._v("#")]),a._v(" 신규 계정 생성")]),a._v(" "),s("p",[a._v("이드를 활용할 신규 계정을 생성 합니다.")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("ygg account new\n\n? Password: "),s("span",{attrs:{class:"token punctuation"}},[a._v("[")]),a._v("hidden"),s("span",{attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n  0798f7581C432Ce611c96bCA93Aa1734D183651F\n\n")])])]),s("h3",{attrs:{id:"노드-네트워크-연결"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#노드-네트워크-연결","aria-hidden":"true"}},[a._v("#")]),a._v(" 노드 네트워크 연결")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("ygg node "),s("span",{attrs:{class:"token keyword"}},[a._v("set")]),a._v(" -r http://localhost:8080\n\nremote Address is http://localhost:8080\n")])])]),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[a._v("TEST NODES")]),a._v(" "),s("p",[a._v("NODE 싱크가 어려운 상황에서 YGGDRASH TEST NODE 를 활용 합니다.")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("ygg node "),s("span",{attrs:{class:"token keyword"}},[a._v("set")]),a._v(" -r http://testnode.yggdrash.io\n")])])])]),a._v(" "),s("h3",{attrs:{id:"노드-상태-확인"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#노드-상태-확인","aria-hidden":"true"}},[a._v("#")]),a._v(" 노드 상태 확인")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("ygg node remoteStatus\n\n")])])]),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" address"),s("span",{attrs:{class:"token operator"}},[a._v(":")]),a._v(" 'http"),s("span",{attrs:{class:"token operator"}},[a._v(":")]),a._v("//localhost"),s("span",{attrs:{class:"token operator"}},[a._v(":")]),s("span",{attrs:{class:"token number"}},[a._v("8080")]),a._v("'"),s("span",{attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  branch"),s("span",{attrs:{class:"token operator"}},[a._v(":")]),a._v("\n   "),s("span",{attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" '"),s("span",{attrs:{class:"token number"}},[a._v("3")]),a._v("b898581ef0a6f172d31740c9de024101f1293a6'"),s("span",{attrs:{class:"token operator"}},[a._v(":")]),a._v("\n      "),s("span",{attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" name"),s("span",{attrs:{class:"token operator"}},[a._v(":")]),a._v(" 'YGGDRASH'"),s("span",{attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n        symbol"),s("span",{attrs:{class:"token operator"}},[a._v(":")]),a._v(" 'YGGDRASH'"),s("span",{attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n        property"),s("span",{attrs:{class:"token operator"}},[a._v(":")]),a._v(" 'platform'"),s("span",{attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n        description"),s("span",{attrs:{class:"token operator"}},[a._v(":")]),a._v(" 'TRUST-based Multi-dimensional Blockchain'"),s("span",{attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n        contracts"),s("span",{attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{attrs:{class:"token punctuation"}},[a._v("[")]),a._v("Array"),s("span",{attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n        timestamp"),s("span",{attrs:{class:"token operator"}},[a._v(":")]),a._v(" '"),s("span",{attrs:{class:"token number"}},[a._v("000001674")]),a._v("dc56231'"),s("span",{attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n        consensus"),s("span",{attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{attrs:{class:"token punctuation"}},[a._v("[")]),a._v("Object"),s("span",{attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),s("span",{attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),s("span",{attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h3",{attrs:{id:"이드-잔액-확인"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#이드-잔액-확인","aria-hidden":"true"}},[a._v("#")]),a._v(" 이드 잔액 확인")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("ygg query balanceOf\n  "),s("span",{attrs:{class:"token operator"}},[a._v("==")]),s("span",{attrs:{class:"token operator"}},[a._v(">")]),a._v(" Balance "),s("span",{attrs:{class:"token keyword"}},[a._v(":")]),a._v(" 0\n")])])]),s("h3",{attrs:{id:"테스트-이드-요청"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#테스트-이드-요청","aria-hidden":"true"}},[a._v("#")]),a._v(" 테스트 이드 요청")]),a._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[a._v("NOTE")]),a._v(" "),s("p",[a._v("YEED 컨트렉트에 faucet 트랜잭션을 발생시켜, 테스트 이드를 얻게 됩니다.")]),a._v(" "),s("p",[a._v("상단의 CLI를 설치하고, 계정을 생성후 아래 명령어로 테스트 이드를 얻으세요.")])]),a._v(" "),s("blockquote",[s("p",[s("strong",[a._v("아래 같이 패스워드를 입력 하면 이드요청 트랜잭션이 발송됩니다.")])])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("ygg invoke faucet\n\n? 4a2febcaca95d8bc4e1437e4507669fc73ce1e9f password: "),s("span",{attrs:{class:"token punctuation"}},[a._v("[")]),a._v("hidden"),s("span",{attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n "),s("span",{attrs:{class:"token operator"}},[a._v("==")]),s("span",{attrs:{class:"token operator"}},[a._v(">")]),a._v(" Transaction Hash "),s("span",{attrs:{class:"token keyword"}},[a._v(":")]),a._v(" 322ad25fdbfb4ae12cb051d82f3b1265baf4eeb774610ead5db3fb678366e067\n")])])]),s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[a._v("NOTE")]),a._v(" "),s("p",[a._v("하나의 어드레스는 한번만 요청 가능 하며, 1000 씩 부여 됩니다.")]),a._v(" "),s("p",[a._v("해당 어드레스에 이드가 있으면 요청되지 않습니다.")])]),a._v(" "),s("h3",{attrs:{id:"yeed-전송"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#yeed-전송","aria-hidden":"true"}},[a._v("#")]),a._v(" YEED 전송")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("ygg tx transfer -t "),s("span",{attrs:{class:"token punctuation"}},[a._v("{")]),a._v("주소"),s("span",{attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" -v "),s("span",{attrs:{class:"token punctuation"}},[a._v("{")]),a._v("수량"),s("span",{attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\nygg tx transfer -t 31e46b23c147f1276df3f3ed82d08a81fb679422 -v 100\n\n---\nygg ygg invoke transfer -p "),s("span",{attrs:{class:"token string"}},[a._v('\'{"to":"{주소}","amount":{수량}}\'')]),a._v("\n\nygg invoke transfer -p "),s("span",{attrs:{class:"token string"}},[a._v('\'{"to":"31e46b23c147f1276df3f3ed82d08a81fb679422","amount":100}\'')]),a._v("\n")])])]),s("h3",{attrs:{id:"yeed-조회"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#yeed-조회","aria-hidden":"true"}},[a._v("#")]),a._v(" YEED 조회")]),a._v(" "),s("div",{staticClass:"language-$bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("ygg query balanceOf\n  ==> Balance : 1000\n")])])]),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[a._v("트랜잭션 조회")]),a._v(" "),s("p",[a._v("트랜잭션의 정보를 Explorer 에서 조회해 보세요.\n"),s("a",{attrs:{href:"https://testnet.yggdrash.io/",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://testnet.yggdrash.io/"),s("OutboundLink")],1)]),a._v(" "),s("p",[a._v("트랜잭션 조회")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("ygg tx get -i "),s("span",{attrs:{class:"token punctuation"}},[a._v("{")]),a._v("트랜잭션 hash"),s("span",{attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("트랜잭션 리십 조회")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("ygg tx receipt -i "),s("span",{attrs:{class:"token punctuation"}},[a._v("{")]),a._v("트랜잭션 hash"),s("span",{attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])])]),a._v(" "),s("h2",{attrs:{id:"node-sync-guide"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node-sync-guide","aria-hidden":"true"}},[a._v("#")]),a._v(" Node Sync Guide")]),a._v(" "),s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[a._v("WARNING JAVA SDK VERSION")]),a._v(" "),s("p",[a._v("USE JAVASDK 1.8")]),a._v(" "),s("p",[s("router-link",{attrs:{to:"/ko/guide/installation.html#install-java"}},[a._v("설치 가이드")])],1)]),a._v(" "),s("p",[s("a",{attrs:{href:"http://store.yggdrash.io/node/yggdrash-testnet-v0.5.1.tar",target:"_blank",rel:"noopener noreferrer"}},[a._v("노드 실행 툴 다운로드"),s("OutboundLink")],1)]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" testnet\n\n"),s("span",{attrs:{class:"token comment"}},[a._v("# curl -O http://store.yggdrash.io/node/yggdrash-testnet-v0.5.1.tar")]),a._v("\n\n"),s("span",{attrs:{class:"token function"}},[a._v("cd")]),a._v(" testnet\n\n"),s("span",{attrs:{class:"token function"}},[a._v("tar")]),a._v(" xvf yggdrash-testnet-v0.5.1.tar\n\n"),s("span",{attrs:{class:"token function"}},[a._v("cd")]),a._v(" bin\n./yggdrash init\n\n"),s("span",{attrs:{class:"token operator"}},[a._v("==")]),s("span",{attrs:{class:"token operator"}},[a._v("==")]),s("span",{attrs:{class:"token operator"}},[a._v("==")]),s("span",{attrs:{class:"token operator"}},[a._v("==")]),s("span",{attrs:{class:"token operator"}},[a._v("==")]),s("span",{attrs:{class:"token operator"}},[a._v("==")]),s("span",{attrs:{class:"token operator"}},[a._v("==")]),s("span",{attrs:{class:"token operator"}},[a._v("==")]),s("span",{attrs:{class:"token operator"}},[a._v("==")]),s("span",{attrs:{class:"token operator"}},[a._v("==")]),s("span",{attrs:{class:"token operator"}},[a._v("==")]),s("span",{attrs:{class:"token operator"}},[a._v("==")]),s("span",{attrs:{class:"token operator"}},[a._v("==")]),s("span",{attrs:{class:"token operator"}},[a._v("==")]),s("span",{attrs:{class:"token operator"}},[a._v("==")]),s("span",{attrs:{class:"token operator"}},[a._v("==")]),s("span",{attrs:{class:"token operator"}},[a._v("==")]),s("span",{attrs:{class:"token operator"}},[a._v("==")]),s("span",{attrs:{class:"token operator"}},[a._v("==")]),s("span",{attrs:{class:"token operator"}},[a._v("==")]),s("span",{attrs:{class:"token operator"}},[a._v("==")]),s("span",{attrs:{class:"token operator"}},[a._v("==")]),s("span",{attrs:{class:"token operator"}},[a._v("==")]),s("span",{attrs:{class:"token operator"}},[a._v("==")]),s("span",{attrs:{class:"token operator"}},[a._v("==")]),s("span",{attrs:{class:"token operator"}},[a._v("==")]),s("span",{attrs:{class:"token operator"}},[a._v("==")]),s("span",{attrs:{class:"token operator"}},[a._v("==")]),s("span",{attrs:{class:"token operator"}},[a._v("==")]),s("span",{attrs:{class:"token operator"}},[a._v("==")]),s("span",{attrs:{class:"token operator"}},[a._v("==")]),s("span",{attrs:{class:"token operator"}},[a._v("==")]),s("span",{attrs:{class:"token operator"}},[a._v("==")]),s("span",{attrs:{class:"token operator"}},[a._v("==")]),s("span",{attrs:{class:"token operator"}},[a._v("==")]),s("span",{attrs:{class:"token operator"}},[a._v("==")]),s("span",{attrs:{class:"token operator"}},[a._v("==")]),s("span",{attrs:{class:"token operator"}},[a._v("==")]),s("span",{attrs:{class:"token operator"}},[a._v("==")]),s("span",{attrs:{class:"token operator"}},[a._v("==")]),a._v("\nYou must "),s("span",{attrs:{class:"token keyword"}},[a._v("set")]),a._v(" the environment YGGDRASH_HOME\nYGGDRASH_HOME is NOW "),s("span",{attrs:{class:"token variable"}},[a._v("${pwd}")]),a._v("\nYGGDRASH REPOSITORY INIT\nYGGDRASH FILE DOWNLOAD\n  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current\n                                 Dload  Upload   Total   Spent    Left  Speed\n100 66.2M  100 66.2M    0     0  12.0M      0  0:00:05  0:00:05 --:--:-- 13.2M\n"),s("span",{attrs:{class:"token operator"}},[a._v("==")]),s("span",{attrs:{class:"token operator"}},[a._v("==")]),s("span",{attrs:{class:"token operator"}},[a._v("==")]),s("span",{attrs:{class:"token operator"}},[a._v("==")]),s("span",{attrs:{class:"token operator"}},[a._v("==")]),s("span",{attrs:{class:"token operator"}},[a._v("==")]),s("span",{attrs:{class:"token operator"}},[a._v("==")]),s("span",{attrs:{class:"token operator"}},[a._v("==")]),s("span",{attrs:{class:"token operator"}},[a._v("==")]),s("span",{attrs:{class:"token operator"}},[a._v("==")]),s("span",{attrs:{class:"token operator"}},[a._v("==")]),s("span",{attrs:{class:"token operator"}},[a._v("==")]),s("span",{attrs:{class:"token operator"}},[a._v("==")]),s("span",{attrs:{class:"token operator"}},[a._v("==")]),s("span",{attrs:{class:"token operator"}},[a._v("==")]),s("span",{attrs:{class:"token operator"}},[a._v("==")]),s("span",{attrs:{class:"token operator"}},[a._v("==")]),s("span",{attrs:{class:"token operator"}},[a._v("==")]),s("span",{attrs:{class:"token operator"}},[a._v("==")]),s("span",{attrs:{class:"token operator"}},[a._v("==")]),s("span",{attrs:{class:"token operator"}},[a._v("==")]),s("span",{attrs:{class:"token operator"}},[a._v("==")]),s("span",{attrs:{class:"token operator"}},[a._v("==")]),s("span",{attrs:{class:"token operator"}},[a._v("==")]),s("span",{attrs:{class:"token operator"}},[a._v("==")]),s("span",{attrs:{class:"token operator"}},[a._v("==")]),s("span",{attrs:{class:"token operator"}},[a._v("==")]),s("span",{attrs:{class:"token operator"}},[a._v("==")]),s("span",{attrs:{class:"token operator"}},[a._v("==")]),s("span",{attrs:{class:"token operator"}},[a._v("==")]),s("span",{attrs:{class:"token operator"}},[a._v("==")]),s("span",{attrs:{class:"token operator"}},[a._v("==")]),s("span",{attrs:{class:"token operator"}},[a._v("==")]),s("span",{attrs:{class:"token operator"}},[a._v("==")]),s("span",{attrs:{class:"token operator"}},[a._v("==")]),s("span",{attrs:{class:"token operator"}},[a._v("==")]),s("span",{attrs:{class:"token operator"}},[a._v("==")]),s("span",{attrs:{class:"token operator"}},[a._v("==")]),s("span",{attrs:{class:"token operator"}},[a._v("==")]),s("span",{attrs:{class:"token operator"}},[a._v("==")]),a._v("\n\n"),s("span",{attrs:{class:"token comment"}},[a._v("# all done")]),a._v("\n")])])]),s("h3",{attrs:{id:"node-실행"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node-실행","aria-hidden":"true"}},[a._v("#")]),a._v(" NODE 실행")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("./yggdrash start\n")])])]),s("h3",{attrs:{id:"node-중지"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node-중지","aria-hidden":"true"}},[a._v("#")]),a._v(" NODE 중지")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("./yggdrash stop\n\n")])])]),s("h3",{attrs:{id:"node-상태확인"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node-상태확인","aria-hidden":"true"}},[a._v("#")]),a._v(" NODE 상태확인")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("./yggdrash status\n")])])]),s("h3",{attrs:{id:"node-log-확인"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node-log-확인","aria-hidden":"true"}},[a._v("#")]),a._v(" NODE log 확인")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("./yggdrash log\n")])])]),s("p",[s("a",{attrs:{href:"http://store.yggdrash.io/node/v0.5.0-190702/yggdrash-node.jar",target:"_blank",rel:"noopener noreferrer"}},[a._v("DOWN LOAD TEST NET NODE 190702"),s("OutboundLink")],1)])])},[],!1,null,null,null);e.options.__file="test-net.md";t.default=e.exports}}]);