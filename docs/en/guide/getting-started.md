# Getting Started

### Install YGGDRASH Commander
```bash
yarn global add @yggdrash/cli # or npm install -g @yggdrash/cli
```

## Create Your Account

    ygg account new
    Address - 0x61327b1323e92cc0ee5fd8a2f5df5bf43aef3543

## Create Your BranchChain
```bash
mkdir metacoin
cd metacoin
#
ygg branch init
#
ygg branch build
    $ ygg branch deploy
```    

## Running Node

    $ docker run --rm -p 8080:8080 -v $HOME/.yggdrash:/.yggdrash yggdrash/yggdrash-node
