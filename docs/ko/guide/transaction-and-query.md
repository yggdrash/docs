# 트랜잭선과 쿼리
## 브랜치체인 사용
이제 노드에서 동작하고 있는 우리가 만든 체인을 사용해봅시다. 노드는 JSON-RPC API 를 제공하고 있으므로 [YGGDRASH Json Rpc Reference](https://github.com/yggdrash/yggdrash/blob/develop/docs/api/jsonrpc-api.md#json-rpc-api-reference)를 참고하여 직접 Json Rpc 를 호출하여 노드와 상호작용하거나, YGGDRASH Commander 를 사용하여 더욱 간단하게 트랙잰션을 전송하고 브랜치체인이 가진 상태를 조회할 수 있습니다.

우리가 위에서 만들어 본 CoinContract는 범용성을 위해 ERC20 인터페이스를 준수하여 구현된 Contract 입니다. 구현 코드는 [여기](https://github.com/yggdrash/yggdrash/blob/develop/yggdrash-core/src/main/java/io/yggdrash/core/contract/CoinContract.java) 에서 확인할 수 있습니다.

먼저 Commander 에서 기본적으로 사용할 
### metacoin 전송
```
명령어.
```




### 코인 전송