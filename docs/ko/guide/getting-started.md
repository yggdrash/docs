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
    			}
    		}
    	},
    	"timestamp": "000001672fdf8eba",
    	"owner": "d7f2f3791a92d69fa63f350468202e4a972e84de",
    	"signature": "1b2749f902ffa7eec6a029e3d4bf8679f66553933578fc8ef74922166688e6afdc39fa102362055a01d7f1da26e6b3684fa6835bf0426ef15cf514e78ea0235ce1"
    }

시드파일과 비교해서 timestamp, owner, signature이 추가된 것을 확인하실 수 있습니다.

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
브랜치가 등록된 응답 결과 보여주기

## 앞으로 해야 할 일

우리가 개발하고 배포한 메타코인 컨트랙트는 이그드라시에서 할 수 있는 아주 작은 부분입니다. 컨트랙트 파일을 자신에 비즈니스에 맞게 개발하고 네트워크를 형성하여, 자신만의 블록체인 거버넌스로 비즈니스를 운영할 수 있습니다.

::: tip
곧 여러분이 생성한 브랜치체인을 스탬에 등록하는 프로세스를 공개할 예정입니다. 이게되면 이그드라시 참여자들은 이그드라시 브라우저를 통해 스탬에 등록된 당신의 브랜치체인을 조회하고 노드에 싱크하여 당신의 블록체인이 더 탄탄한 네트워크 위에서 동작할 수 있도록 도움을 줄 것 입니다.
:::