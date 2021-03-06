# Test Network Guide
::: warning WARNING
**The test net branch address and data may be changed or deleted.**   
:::


## YGGDRASH TEST NET URL 
[TEST NET Explorer](https://testnet.yggdrash.io)

## Wallet Guide
### YGGDRASH WEB Wallet
- TBD

### YGGDRASH Javascript SDK
- [javascript sdk](https://github.com/yggdrash/yggdrash-sdk-js)


### YGGDRASH CLI
- [YGGDRASH CLI](https://github.com/yggdrash/yggdrash-cli)
- For more information, see [Install YGGDRASH CLI](installation.md#Install-YGGDRASH-CLI).
- YGGDRASH CLI In 0.3.3 or later version, the command is applied.

### Create New Account (Wallet)
Create a new account to take advantage of YEED.

```bash
ygg account new

? Password: [hidden]
  0798f7581C432Ce611c96bCA93Aa1734D183651F

```

### Node Network Connection
```bash
ygg node set -r http://localhost:8080


remote Address is http://localhost:8080
```

::: tip USE YGGDRASH TEST NODES
If you have difficult to sync node, use yggdrash test node

```bash
ygg node set -r http://testnode.yggdrash.io
```
:::


### Check Node Status
```bash
ygg node remoteStatus

```

``` JSON
{ address: 'http://localhost:8080',
  branch:
   { '3b898581ef0a6f172d31740c9de024101f1293a6':
      { name: 'YGGDRASH',
        symbol: 'YGGDRASH',
        property: 'platform',
        description: 'TRUST-based Multi-dimensional Blockchain',
        contracts: [Array],
        timestamp: '000001674dc56231',
        consensus: [Object] } } }
```

### Check YEED Balance
```bash
ygg query balanceOf
  ==> Balance : 0
```

### Request a Test YEED on YGGDRASH Network
::: tip NOTE
You will generate a faucet transaction on the YEED contract, and you will get a test YEED.

Install the CLI at the top, create an account, and use the following command.
:::

>**If you enter the password as below, YEED request transaction will be sent.**
```bash
ygg invoke faucet

? 691af5cbc92d8f4e5683246d27d199ccfa2548d6 password: [input is hidden]
==> Transaction Hash : {Transaction hash}
```

::: warning NOTE
One address can be requested only once and 1000 is given.

If the address has an YEED, it will not be requested.
:::


### Send YEED Transfer 
```bash
ygg tx transfer -t {Address} -v {Amount}

ygg tx transfer -t 31e46b23c147f1276df3f3ed82d08a81fb679422 -v 100

---
ygg ygg invoke transfer -p '{"to":"{Address}","amount":{Amount}}'

ygg invoke transfer -p '{"to":"31e46b23c147f1276df3f3ed82d08a81fb679422","amount":100}'
```

### Query YEED Balance
```bash
ygg query balanceOf
  ==> Balance : 1000
```

::: tip Your transaction lookup
Look in the EXPLORER for transaction information.

- TEST NET
[https://testnet.yggdrash.io/](https://testnet.yggdrash.io/)

Transaction for CLI
```bash
ygg tx get -i {Transaction hash}
```

Transaction Receipt for CLI
```bash
ygg tx receipt -i {Transaction hash}
```


:::

<iframe width="600" height="400" src="https://www.youtube.com/embed/NAll2fPU6zw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>


## Node Sync Guide

[Install Guide](installation.md#install-java)


[Download Node Tools](http://store.yggdrash.io/node/akashic-yggdrash-0.8.0.tar.gz)

### Install & Run Node
```bash

curl -O http://store.yggdrash.io/node/akashic-yggdrash-0.8.0.tar.gz

tar xvf akashic-yggdrash-0.8.0.tar.gz

cd akashic-yggdrash-0.8.0/bin

./yggdrash start
```


### Check node status
```bash
./yggdrash status
```


### View node logs
```bash
./yggdrash log

^C
```

### Stop the node
```bash
./yggdrash stop
```
