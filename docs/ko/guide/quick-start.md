# 빠르게 시작하기
이 문서는 최소한의 과정으로 브랜치체인을 생성 후 배포하고 브랜치가 배포된 노드에 트랜잭션과 쿼리를 전송해보는 것을 목적으로 작성되었습니다. 아래 과정은 [환경구성](./installation.md)이 되었다는 가정하에 진행합니다.

## 계정 생성
```bash
# Create Test Account
ygg account new
ygg account new
ygg account list
    1215e19d654edf9331b3d81b01cb065db411fdbf
    e4b1c96315b8755646fd5a4a0ab589aa0097faba
```

## 브랜치 생성 및 배포
```bash
# Meta Coin 브랜치 배포
mkdir metacoin
cd metacoin
ygg branch init
ygg branch build
ygg branch deploy
```

## 브랜치 사용
```bash
# Starting Node
docker run --rm -p 8080:8080 -v $HOME/.yggdrash:/.yggdrash yggdrash/yggdrash-node

# Setting branchchain of MetaCoin
ygg branch set

# Execution Contract of CoinStandard
ygg query totalSupply
    ==> totalSupply : 100000000
ygg query balanceOf --address 1215e19d654edf9331b3d81b01cb065db411fdbf
    ==> Balance : 100000000
ygg tx transfer --to e4b1c96315b8755646fd5a4a0ab589aa0097faba --value 100
ygg query balanceOf --address e4b1c96315b8755646fd5a4a0ab589aa0097faba
    ==> Balance : 100
```

만약 위 과정을 진행하다가 예기치 않은 문제가 발생했다면, 깃허브에 [이슈를 등록](https://github.com/yggdrash/yggdrash/issues)하거나, [환경구성](./installation.md)이 제대로 되었는지 확인하세요. 전제조건이 누락되었을 수 있습니다.

## 다음 단계
우리는 [YGGDRASH Commander](https://github.com/yggdrash/yggdrash-cli)를 사용하여 브랜치체인을 만들고 사용하는 과정에 대해서 간략하게 소개했습니다. 이 가이드의 나머지 부분에서 더 자세한 세부 내용이 포함된 다른 고급 기능에 대해 다룰 예정이므로 꼭 읽어보시기 바랍니다.