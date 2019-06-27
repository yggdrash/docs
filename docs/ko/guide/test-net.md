# 테스트넷 가이드
::: warning NOTE
    
    테스트넷 브랜치 주소와 데이터는 변경되거나 삭제 될 수 있습니다.   
:::


## 테스트넷 정보
- 배포일 : 2019-06-28
- 브랜치 정보 : 63589382e2e183e2a6969ebf57bd784dcb29bd43
- 컨트렉트 정보
    - STEM 178b44b22d8c6d5bb08175fa2fcab15122ca8d1e
    - YEED 6a2371e34b780dd39bd56002b1d96c23689cc5dc
    - DPoA 30783a1311b9c68dd3a92596d650ae6914b01658
       
## URL 
[TEST NET Explorer](https://testnet.yggdrash.io)

## Wallet Guide
### YGGDRASH WEB Wallet (준비중)
- URL

### Yggdrash Javascript Sdk
- [javascript sdk](https://github.com/yggdrash/yggdrash-sdk-js)


### YGGDRASH cli
- [cli](https://github.com/yggdrash/yggdrash-cli)
- 자세한내용은 [이그드라시 커맨더 설치](installation.md) 항목을 봐주세요.
  
  
#### Faucet
::: tip NOTE
    YEED 컨트렉트에 faucet 트랜잭션을 발생시켜, 테스트 이드를 얻게 됩니다.
    상단의 cli를 설치하고, 계정을 생성후 아래명령어로 테스트 이드를 얻으세요. 
:::

    ygg invoke faucet

### YEED 전송
    ygg tx transfer -t {주소} -v {수량}
    ex ) ygg tx transfer -t 31e46b23c147f1276df3f3ed82d08a81fb679422 -v 1000


## Node Sync Guide
- [노드 동기화 방법](https://github.com/yggdrash/yggdrash#-yggdrash)
- TBD

## Transaction 전송
- TBD
