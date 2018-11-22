# 시작하기

이제 본격적으로 브랜치체인을 만들어봅시다. 우리가 사용할 명령어는 단 세 개 뿐입니다.

- branch init
- branch build
- branch deploy

## 새로운 브랜치체인 프로젝트 만들기

아래 명령어를 통해 바로 브랜치체인 개발을 할 수 있는 환경을 만들 수 있습니다.
```bash
ygg branch init
```
<p align="center">
<img src="https://media.giphy.com/media/t6cooF2MdaOeawIM9S/giphy.gif" width="80%"/>
</p>

**어떻게 동작하나요?**

`branch init` 명령어는 두 가지 일을 합니다.

- 브랜치체인 컨트랙트 스캐폴딩
- 브랜치체인의 정체성을 나타내는 시드파일 생성

컨트랙트 폴더 구조:

    .
    ├── contracts
    │   ├── build.gradle
    │   ├── gradle
    │   │   └── wrapper
    │   │       ├── gradle-wrapper.jar
    │   │       └── gradle-wrapper.properties
    │   ├── gradlew
    │   ├── gradlew.bat
    │   ├── libs
    │   │   └── yggdrash-core.jar
    │   └── src
    │       ├── main
    │       │   └── java
    │       │       └── MetaCoinContract.java
    │       └── test
    │           └── java
    │               └── MetaCoinContractTest.java
    └── meta.seed.json

seed.json:

    {
    	"name": "metacoin",
    	"symbol": "META",
    	"property": "currency",
    	"description": "metacoin",
    	"contractId": "",
    	"genesis": {
    		"alloc": {
    			"d7f2f3791a92d69fa63f350468202e4a972e84de": {
    				"balance": "10000000"
    			}
    		}
    	}
    }

시드는 브랜치체인의 정체성을 나타내는 중요한 파일입니다. 각 프로퍼티별 설명은 해당 가이드의 논점을 벗어나니 제외합니다. 각 프로퍼티는 에디터를 통해서 수정해도 무방합니다. alloc 은 최초 코인을 보유하는 프론티어이며, 비즈니스에 정책에 따라 얼마든지 수정할 수 있습니다.

::: warning
branch.json 이 아니라 seed.json 이라는 점에 유의하세요. branch.json에 포함되는 서명값은 seed.json의 속성들을 활용하여 만들기 때문에 수정해서는 안됩니다.
:::

스캐폴딩에서 기본적으로 제공하는 자바파일은 `CoinContract` 클래스를 확장하도록 되어있습니다. 컨트랙트를 수정함으로서 코인에 기능을 추가하고 원하는 정책을 구현할 수 있습니다. 

컨트랙트 자바 파일:
```java
import com.google.gson.JsonArray;
import io.yggdrash.core.contract.CoinContract;
import io.yggdrash.core.contract.TransactionReceipt;

public class CoinContractTemplate extends CoinContract {

    public TransactionReceipt hello(JsonArray params) {
        TransactionReceipt txReceipt = new TransactionReceipt();
        txReceipt.putLog("hello", params.toString());
        txReceipt.setStatus(TransactionReceipt.SUCCESS);
        log.info(txReceipt.toString());
        return txReceipt;
    }
}

```

화폐 브랜치체인이 아닌 종류에 브랜치체인을 개발하고 싶다면 `CoinContract` 가 확장하고 있는 `BaseContract<T>` 클래스를 직접 확장함으로서 가능합니다. 이에 대한 자세한 방법은 추후 컨트랙트 개발 고급 가이드를 통해 안내하겠습니다.

## 브랜치체인 빌드

노드가 읽을 수 있도록 자바 파일을 컴파일하고 시드 파일을 개인키로 서명합니다.
```bash
ygg branch build
```

<p align="center">
<img src="https://media.giphy.com/media/5SAPh7JnvyCIcskpfU/giphy.gif" width="80%"/>
</p>

빌드 후 프로젝트 폴더 구조:

    .
    ├── contracts
    │   ├── build
    │   │   ├── classes
    │   │   │   └── java
    │   │   │       ├── main
    │   │   │       │   └── MetaCoinContract.class
    │   │   │       └── test
    │   │   │           └── MetaCoinContractTest.class
    ...
    ...
    ├── meta.branch.json
    └── meta.seed.json

`branch.json` 파일은 `seed.json` 파일을 서명한 파일로 각 브랜치체인에 제네시스 역할을 합니다. 모든 데이터를 직렬화하여 서명하므로 공백 하나도 수정되어서는 안됩니다.

branch.json:

    {
    	"name": "metacoin",
    	"symbol": "META",
    	"property": "currency",
    	"description": "metacoin",
    	"contractId": "090f9863fde49c8ec8d1b0924269e7af24702cf5",
    	"genesis": {
    		"alloc": {
    			"d7f2f3791a92d69fa63f350468202e4a972e84de": {
    				"balance": "10000000"
    			},
                "f350468202e4a972e84ded7f2f3791a92d69fa63": {
    				"balance": "10000000"
    			}
    		}
    	},
    	"timestamp": "000001672fdf8eba",
    	"owner": "d7f2f3791a92d69fa63f350468202e4a972e84de",
    	"signature": "1b2749f902ffa7eec6a029e3d4bf8679f66553933578fc8ef74922166688e6afdc39fa102362055a01d7f1da26e6b3684fa6835bf0426ef15cf514e78ea0235ce1"
    }

시드파일과 비교해서 timestamp, owner, signature이 추가된 것을 확인하실 수 있습니다.
* 브랜치 빌드 전 시드파일에 frontier들을 추가 하여 빌드 시킬 수 있으며, contract id는 사전에 만들어진 contract id를 사용해도 무방합니다.

## 브랜치체인 배포

앞서 만든 브랜치체인 컨트랙트를 노드가 읽을 수 있도록 아래 명령어를 통해 배포해야 합니다. 
```bash
ygg branch deploy
```
<p align="center">
<img src="https://media.giphy.com/media/clOTsMKYkqXgL95koK/giphy.gif" width="80%"/>
</p>

**어떻게 동작하나요?**

노드가 동작할 때 이그드라시 홈 폴더 (기본적으로 $USER_HOME/.yggdrash 에 위치) 에 있는 리소스를 다이나믹하게 로딩하여 체인을 부트스트랩 합니다.

이전 빌드 작업을 통해 생성된 컨트랙트에 클래스 파일과 개인키로 서명된 branch.json 을 해당 위치로 이동하여 생성된 브랜치체인이 동작할 수 있도록 합니다.

`$HOME/.yggdrash` structure:

    .
    ├── branch
    │   └── b12a251fdced2ed5b810747dbfd09ab89de51b9a
    │       └── branch.json
    ├── contract
    │   └── 09
    │       └── 090f9863fde49c8ec8d1b0924269e7af24702cf5.class
    ├── db
    │   ├── b4e639d48bea1c26b7c72a9db94371c376779694
    │   │   ├── blocks
    │   │   │   ├── 000003.log
    ...

## 노드 실행

노드를 실행하여 우리가 개발한 브랜치체인이 정상적으로 동작하는지 확인합니다.
```bash
docker run --rm -p 8080:8080 -v $HOME/.yggdrash:/.yggdrash yggdrash/yggdrash-node
```
<p align="center">
<img src="https://media.giphy.com/media/9GIF5KiW07xLgjprIY/giphy.gif" width="80%" height="400"/>
</p>

확인을 위해서 편리하게 사용할 수 있는 REST API 를 활용해봅시다.
```bash
curl http://localhost:8080/branches
```
**브랜치체인이 등록된 응답 결과**

<p align="center">
<img src="https://media.giphy.com/media/1ZmYiI8kwDtGWUs29I/giphy.gif" width="80%" height="400"/>
</p>

## 앞으로 해야 할 일

우리가 개발하고 배포한 메타코인 컨트랙트는 이그드라시에서 할 수 있는 아주 작은 부분입니다. 컨트랙트 파일을 자신에 비즈니스에 맞게 개발하고 네트워크를 형성하여, 자신만의 블록체인 거버넌스로 비즈니스를 운영할 수 있습니다.

곧 여러분이 생성한 브랜치체인을 스탬에 등록하는 프로세스를 공개할 예정입니다. 이게되면 이그드라시 참여자들은 이그드라시 브라우저를 통해 스탬에 등록된 당신의 브랜치체인을 조회하고 노드에 싱크하여 당신의 블록체인이 더 탄탄한 네트워크 위에서 동작할 수 있도록 도움을 줄 것 입니다.