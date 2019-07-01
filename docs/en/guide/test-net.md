# Test Network Guide
::: warning WARNING
**The test net branch address and data may be changed or deleted.**   
:::


## YGGDRASH TEST NET URL 
[TEST NET Explorer](https://testnet.yggdrash.io)

## Wallet Guide
### YGGDRASH WEB Wallet
- TBD

### Yggdrash Javascript Sdk
- [javascript sdk](https://github.com/yggdrash/yggdrash-sdk-js)


### YGGDRASH CLI
- [YGGDRASH CLI](https://github.com/yggdrash/yggdrash-cli)
- For more information, see [Install YGGDRASH CLI](installation.md#Install-YGGDRASH-CLI).
- YGGDRASH CLI In 0.3.3 or later version, the command is applied.

### Create new Account (Wallet)
Create a new account to take advantage of YEED.

```bash
ygg account new

? Password: [hidden]
  0798f7581C432Ce611c96bCA93Aa1734D183651F

```

### Node network connection
```bash
ygg node set -r http://localhost:8080


remote Address is http://localhost:8080
```

### Check node status
```bash
ygg node remoteStatus

```

```json
{ address: 'http://localhost:8080',
  branch:
   { '3b898581ef0a6f172d31740c9de024101f1293a6':
      { name: 'YGGDRASH',
        symbol: 'YGGDRASH',
        property: 'platform',
        description: 'TRUST-based Multi-dimensional Blockchains',
        contracts: [Array],
        timestamp: '000001674dc56231',
        consensus: [Object] } } }
```

### Check YEED balance
```bash
ygg query balanceOf
  ==> Balance : 0
```

### Request a Test YEED on YGGDRASH network
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

### Query YEED balance
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
> ygg tx get -i {Transaction hash}
```

Transaction Receipt for CLI
```bash
> ygg tx receipt -i {Transaction hash}
```


:::

## Node Sync Guide
- TBD
