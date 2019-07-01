---
home: true
heroImage: /favicon.png
actionText: Get Started →
actionLink: /en/guide/getting-started
features:
- title: Extendability
  details: We can extend unlimited chains with branch chains.
- title: Speed
  details: We can solve the speed problem with DPOA.
- title: Data Capacity
  details: We can generate unlimited block data with the akashic block.
footer: MIT Licensed | Copyright © 2017-present AKASHIC
---
## Getting Started
Install YGGDRASH Commander:
```bash
yarn global add @yggdrash/cli # or npm install -g @yggdrash/cli
```

Build Your BranchChain:
```bash
ygg branch init
ygg branch build
ygg branch deploy
```

Running Node:
```bash
docker run --rm -p 8080:8080 -v $HOME/.yggdrash:/.yggdrash yggdrash/yggdrash-node
```
