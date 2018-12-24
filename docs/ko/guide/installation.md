# 환경구성
::: warning
이그드라시 프로젝트는 최적의 프로토콜 제공을 위해 활발히 개발중인 프로젝트로 가이드 내 진행 방법과 아웃풋이 다소 상이할 수 있습니다. 최신 업데이트는 각 프로젝트에 README 문서를 확인하세요.
:::
## 자바 설치
브랜치를 빌드하는 과정에 포함된 스마트 컨트랙트 소스빌드를 위해서는 최소 1.8 이상의 JDK 를 설치해야 합니다.
오라클 공식 홈페이지에서 [다운로드](https://www.oracle.com/technetwork/java/javase/overview/index.html) 받거나 Open JDK를 사용하기 위해 SDKMAN을 사용하는 것을 권장합니다.

### SDKMAN를 사용한 Java 설치 (추천)
**SDKMAN 설치**
```bash
curl -s "https://get.sdkman.io" | bash
source "$HOME/.sdkman/bin/sdkman-init.sh"
```

**JAVA 설치**
```bash
sdk ls java
================================================================================
Available Java Versions
================================================================================
     12.ea.17-open
     11.0.1-zulu
     11.0.1-open
     10.0.2-zulu
     10.0.2-open
     9.0.7-zulu
     9.0.4-open
     8.0.192-zulu
     8.0.191-oracle
    ...
sdk install java 8.0.192-zulu
```
**JAVA 버전 확인**
```bash
javac -version
javac 1.8.0_192
```
## 도커 설치
우리는 이그드라시 플랫폼 위에서 비즈니스를 하려는 사용자 혹은 개발자가 개발 환경 설정보다는 비즈니스 개발에 집중하길 원합니다. 따라서 노드가 동작하기 위한 모든 환경이 갖춰진 도커 컨테이너 이미지를 제공합니다. 우리는 프로젝트가 릴리즈 될 때마다 이미지를 도커 허브에 배포합니다.
직접 소스를 가지고 제어하기를 원한다면, 깃허브 레포지토리에 소스와 가이드가 있으니 참고하세요. (추천하지 않습니다.)
### Install Docker (OS X)
Mac OS X 버전을 다운로드 받아 설치 합니다. [https://download.docker.com/mac/stable/Docker.dmg](https://download.docker.com/mac/stable/Docker.dmg)
다른 OS에서 도커를 설치하려면 다음 사이트를 방문하세요. [https://docs.docker.com/install](https://docs.docker.com/install)
```bash
docker version
Client: Docker Engine - Community
 Version:           18.09.0
 API version:       1.39
 Go version:        go1.10.4
 Git commit:        4d60db4
 Built:             Wed Nov  7 00:47:43 2018
 OS/Arch:           darwin/amd64
 Experimental:      false
Server: Docker Engine - Community
 Engine:
  Version:          18.09.0
  API version:      1.39 (minimum version 1.12)
  Go version:       go1.10.4
  Git commit:       4d60db4
  Built:            Wed Nov  7 00:55:00 2018
  OS/Arch:          linux/amd64
  Experimental:     true
```
## 노드JS 설치
커맨더는 자바스크립트로 개발되었으며, Node 에 의존성을 가지고 있습니다. 
커맨더를 설치하고 동작하기 위한 환경은 다음과 같습니다.
- Node.js ≥ v10.12.0
- Npm ≥ v6.4.1
- Yarn ≥ 1.12.3
### Install Homebrew (OS X)
```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
### Install node
```bash
brew install node
node -v
```
### Install nvm (recommended)
노드 버전 관리자(Node Version Manager) 도구로 노드 버전관리에 추천하는 도구입니다. nvm에 관한 정보(환경설정 등)는 [nvm](https://formulae.brew.sh/formula/nvm) 에서 확인 하실 수 있습니다.
```bash
sudo curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash
nvm install 10.12.0
```
### Install yarn
```bash
brew install yarn
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
