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
  
### Faucet
::: tip NOTE
You will generate a faucet transaction on the YEED contract, and you will get a test YEED.

Install the CLI at the top, create an account, and use the following command.
:::

```bash
ygg invoke faucet
```
    

>**If you enter the password as below, YEED request transaction will be sent.**
```bash
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

ex) ygg tx transfer -t 31e46b23c147f1276df3f3ed82d08a81fb679422 -v 100

---
ygg ygg invoke transfer -p '{"to":"{Address}","amount":{Amount}}'

ex) ygg invoke transfer -p '{"to":"31e46b23c147f1276df3f3ed82d08a81fb679422","amount":100}'
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

:::

## Node Sync Guide
- TBD
