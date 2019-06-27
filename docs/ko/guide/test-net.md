# 테스트넷 가이드
::: warning NOTE
    
    테스트넷 브랜치 주소와 데이터는 변경되거나 삭제 될 수 있습니다.   
:::


## 테스트넷 정보
- 배포일 : 2019-06-28
- 브랜치 정보 : 3b898581ef0a6f172d31740c9de024101f1293a6
- 컨트렉트 정보
    - STEM 178b44b22d8c6d5bb08175fa2fcab15122ca8d1e
    - YEED 19b9710dc8f0442d09a1b5e632f7200afe751d60
    - DPoA 30783a1311b9c68dd3a92596d650ae6914b01658
       
## URL 
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
  
### Faucet
::: tip NOTE
YEED 컨트렉트에 faucet 트랜잭션을 발생시켜, 테스트 이드를 얻게 됩니다.

상단의 CLI를 설치하고, 계정을 생성후 아래명령어로 테스트 이드를 얻으세요. 
:::

    ygg invoke faucet

>**아래 같은 결과를 얻으세요.**

    ? 691af5cbc92d8f4e5683246d27d199ccfa2548d6 password: [input is hidden]
    ==> Transaction Hash : {트랜잭션 hash}

### YEED 전송
    ygg tx transfer -t {주소} -v {수량}
    ex) ygg tx transfer -t 31e46b23c147f1276df3f3ed82d08a81fb679422 -v 1000

### YEED 조회
    ygg query balanceOf

::: tip 트랜잭션 조회 
트랜잭션의 정보를 Explorer 에서 조회해 보세요.

[https://testnet.yggdrash.io/](https://testnet.yggdrash.io/)

혹은 node 
    
:::

## Node Sync Guide
- [노드 동기화 방법](https://github.com/yggdrash/yggdrash#-yggdrash)
- TBD
