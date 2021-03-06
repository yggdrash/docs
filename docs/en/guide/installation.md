# Install Guide
::: warning
The YGGDRASH project is an active project to provide the best protocol, and the progress and output of the guide may be slightly different. 

Please check the README document for each project for the latest update.
:::
## Install Java
You must install at least 1.8 JDKs to build the smart contract source included in the branch build process.
It is recommended to download from the site below or use SDKMAN to use Open JDK.

[https://www.oracle.com/technetwork/java/javase/overview/index.html](https://www.oracle.com/technetwork/java/javase/overview/index.html)
### Install SDKMAN (recomended)
```bash
curl -s "https://get.sdkman.io" | bash
source "$HOME/.sdkman/bin/sdkman-init.sh"
```
### Install JAVA
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
```bash
javac -version
javac 1.8.0_192
```

## Install NodeJS
CLI is developed in JavaScript and has a dependency on Node.
The environment for installing and operating CLI is as follows.
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
The Node Version Manager tool is the recommended tool for node version management. Information about nvm (preferences, etc.) can be found in [nvm] (https://formulae.brew.sh/formula/nvm).
```bash
sudo curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash
nvm install 10.12.0
```
### Install yarn
[Yarn installl](https://yarnpkg.com/lang/en/docs/install/)

```bash
brew install yarn
$ yarn -v
```

## Install YGGDRASH CLI
YGGDRASH CLI is a tool that helps developers to easily develop. 
The next step, Getting Started, explains how to use Commander to scaffold, build, and deploy a branch-chain project.
In the terminal, type the following command to install the executable commander.
```bash
yarn global add @yggdrash/cli # or npm install -g @yggdrash/cli
```

To check whether it is installed correctly, check the version with the following command.
```bash
ygg --version
```

## Start
Finally, before you create the branch chain, create your project folder and place it there. In the future, we will create the Currency branch chain called Meta coin.
Create project folder:

```bash
mkdir metacoin
cd metacoin
```
Create new user account
```bash
ygg account new
```
<p align="center">
<img src="https://media.giphy.com/media/PMipLUnbPAGOcqyWhs/giphy.gif" width="80%"/>
</p>

