# 시작하기 전에

::: warning
이그드라시 프로젝트는 최적의 프로토콜 제공을 위해 활발히 개발중인 프로젝트로 가이드 내 진행 방법과 아웃풋이 다소 상이할 수 있습니다. 최신 업데이트는 각 프로젝트에 README 문서를 확인하세요.
:::
## 자바 설치

## 도커 설치

우리는 이그드라시 플랫폼 위에서 비즈니스를 하려는 사용자 혹은 개발자가 개발 환경 설정보다는 비즈니스 개발에 집중하길 원합니다. 따라서 노드가 동작하기 위한 모든 환경이 갖춰진 도커 컨테이너 이미지를 제공합니다. 우리는 프로젝트가 릴리즈 될 때마다 이미지를 도커 허브에 배포합니다.

직접 소스를 가지고 제어하기를 원한다면, 깃허브 레포지토리에 소스와 가이드가 있으니 참고하세요. (추천하지 않습니다.)

## 노드JS 설치

커맨더는 자바스크립트로 개발되었으며, Node 에 의존성을 가지고 있습니다. 

커맨더를 설치하고 동작하기 위한 환경은 다음과 같습니다.

- Node.js ≥ v10.12.0
- Npm ≥ v6.4.1
- Yarn ≥ 1.12.3

### Install Homebrew
```bash
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

### Install node
```bash
$ brew install node
$ node -v
```

### Install yarn
```bash
$ brew install yarn --without-node
$ yarn -v
```

## 이그드라시 커맨더 설치
이그드라시 커맨더는 이그드라시를 활용하고자 하는 개발자들이 손쉽게 개발할 수 있도록 도움을 주는 Command Line Interface 도구 입니다. 다음 단계인 시작하기에서는 커맨더를 사용하여 브랜치 체인 프로젝트를 스캐폴딩하고 빌드하고 배포하는 방법을 설명합니다.

터미널에서 아래 명령어를 입력하여 이그드라시 커맨더를 설치합니다.
```bash
yarn global add @yggdrash/cli # or npm install -g @yggdrash/cli
```

정상적으로 설치되었는지 확인하기 위해서 아래 명령어를 통해 버전을 확인합니다.
```bash
ygg --version
```
## 시작 지점 설정

마지막으로 브랜치체인을 만들기 전에 당신의 프로젝트 폴더를 만들어서 그 곳에 위치합니다. 앞으로 우리는 메타코인이라는 Currency 브랜치체인을 만들 것입니다. 

프로젝트 폴더 생성:
```bash
mkdir metacoin
cd metacoin
```
조금 더 나아가서 커맨더를 사용해서 계정을 생성해봅시다.

이그드라시 계정 생성:
```bash
ygg account new
```
<p align="center">
<img src="https://media.giphy.com/media/PMipLUnbPAGOcqyWhs/giphy.gif" width="80%"/>
</p>