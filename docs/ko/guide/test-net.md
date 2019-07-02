# 테스트넷 가이드
::: warning WARNING
**테스트넷 브랜치 주소와 데이터는 변경되거나 삭제 될 수 있습니다.**   
:::


## YGGDRASH TEST NET URL 
[TEST NET Explorer](https://testnet.yggdrash.io)

## Wallet Guide
### YGGDRASH WEB Wallet (준비중)
- TBD

### Yggdrash Javascript Sdk
- [javascript sdk](https://github.com/yggdrash/yggdrash-sdk-js)


### YGGDRASH CLI
- [YGGDRASH CLI](https://github.com/yggdrash/yggdrash-cli)
- 자세한내용은 [이그드라시 커맨더 설치](installation.md#이그드라시-커맨더-설치) 항목을 봐주세요.
- cli 0.3.3 이상 버젼에서 해당 명령어가 적용 됩니다.
  
### 신규 계정 생성
이드를 활용할 신규 계정을 생성 합니다.

```bash
ygg account new

? Password: [hidden]
  0798f7581C432Ce611c96bCA93Aa1734D183651F

```

### 노드 네트워크 연결
```bash
ygg node set -r http://localhost:8080

remote Address is http://localhost:8080
```

::: tip TEST NODES
NODE 싱크가 어려운 상황에서 YGGDRASH TEST NODE 를 활용 합니다.
http://testnode.yggdrash.io

:::


### 노드 상태 확인
```bash
ygg node remoteStatus

```

```json
{ address: 'http://localhost:8080',
  branch:
   { '3b898581ef0a6f172d31740c9de024101f1293a6':
      { name: 'YGGDRASH',
        symbol: 'YGGDRASH',
        property: 'platform',
        description: 'TRUST-based Multi-dimensional Blockchains',
        contracts: [Array],
        timestamp: '000001674dc56231',
        consensus: [Object] } } }
```

### 이드 잔액 확인
```bash
ygg query balanceOf
  ==> Balance : 0
```

### 테스트 이드 요청
::: tip NOTE
YEED 컨트렉트에 faucet 트랜잭션을 발생시켜, 테스트 이드를 얻게 됩니다.

상단의 CLI를 설치하고, 계정을 생성후 아래 명령어로 테스트 이드를 얻으세요. 
:::

>**아래 같이 패스워드를 입력 하면 이드요청 트랜잭션이 발송됩니다.**
```bash
ygg invoke faucet

? 4a2febcaca95d8bc4e1437e4507669fc73ce1e9f password: [hidden]
 ==> Transaction Hash : 322ad25fdbfb4ae12cb051d82f3b1265baf4eeb774610ead5db3fb678366e067
```

::: warning NOTE
하나의 어드레스는 한번만 요청 가능 하며, 1000 씩 부여 됩니다.

해당 어드레스에 이드가 있으면 요청되지 않습니다.
:::


### YEED 전송
```bash
ygg tx transfer -t {주소} -v {수량}

ygg tx transfer -t 31e46b23c147f1276df3f3ed82d08a81fb679422 -v 100

---
ygg ygg invoke transfer -p '{"to":"{주소}","amount":{수량}}'

ygg invoke transfer -p '{"to":"31e46b23c147f1276df3f3ed82d08a81fb679422","amount":100}'
```

### YEED 조회
```$bash
ygg query balanceOf
  ==> Balance : 1000
```

::: tip 트랜잭션 조회 
트랜잭션의 정보를 Explorer 에서 조회해 보세요.
[https://testnet.yggdrash.io/](https://testnet.yggdrash.io/)

트랜잭션 조회
```bash
ygg tx get -i {트랜잭션 hash}
```

트랜잭션 리십 조회
```bash
ygg tx receipt -i {트랜잭션 hash}
```


:::

## Node Sync Guide
::: warning  WARNING JAVA SDK VERSION 
USE JAVASDK 1.8 

[설치 가이드](installation.md#install-java)
:::
[노드 실행 툴 다운로드](http://store.yggdrash.io/node/yggdrash-testnet-v0.5.1.tar)

```bash
mkdir testnet

# curl -O http://store.yggdrash.io/node/yggdrash-testnet-v0.5.1.tar

cd testnet

tar xvf yggdrash-testnet-v0.5.1.tar

cd bin
./yggdrash init

================================================================================
You must set the environment YGGDRASH_HOME
YGGDRASH_HOME is NOW ${pwd}
YGGDRASH REPOSITORY INIT
YGGDRASH FILE DOWNLOAD
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100 66.2M  100 66.2M    0     0  12.0M      0  0:00:05  0:00:05 --:--:-- 13.2M
================================================================================

# all done
```

### NODE 실행
```bash
./yggdrash start
```

### NODE 중지
```bash
./yggdrash stop

```

### NODE 상태확인
```bash
./yggdrash status
```


### NODE log 확인
```bash
./yggdrash log
```


[DOWN LOAD TEST NET NODE 190702](http://store.yggdrash.io/node/v0.5.0-190702/yggdrash-node.jar)


