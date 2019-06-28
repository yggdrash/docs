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
  
### Faucet
::: tip NOTE
YEED 컨트렉트에 faucet 트랜잭션을 발생시켜, 테스트 이드를 얻게 됩니다.

상단의 CLI를 설치하고, 계정을 생성후 아래 명령어로 테스트 이드를 얻으세요. 
:::

```$xslt
ygg invoke faucet
```
    

>**아래 같이 패스워드를 입력 하면 이드요청 트랜잭션이 발송됩니다.**
```$xslt
? 691af5cbc92d8f4e5683246d27d199ccfa2548d6 password: [input is hidden]
==> Transaction Hash : {트랜잭션 hash}

```

::: warning NOTE
하나의 어드레스는 한번만 요청 가능 하며, 1000 씩 부여 됩니다.

해당 어드레스에 이드가 있으면 요청되지 않습니다.
:::


### YEED 전송
```bash
ygg tx transfer -t {주소} -v {수량}

ex) ygg tx transfer -t 31e46b23c147f1276df3f3ed82d08a81fb679422 -v 100

---
ygg ygg invoke transfer -p '{"to":"{주소}","amount":{수량}}'

ex) ygg invoke transfer -p '{"to":"31e46b23c147f1276df3f3ed82d08a81fb679422","amount":100}'
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
> ygg tx get -i {트랜잭션 hash}
```

트랜잭션 리십 조회
```bash
> ygg tx receipt -i {트랜잭션 hash}
```


:::

## Node Sync Guide
- [노드 동기화 방법](https://github.com/yggdrash/yggdrash#-yggdrash)
- TBD
