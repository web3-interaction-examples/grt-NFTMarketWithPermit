
## Install deps
```
npm install -g @graphprotocol/graph-cli
```


## Init project(no need in this repo)
```
graph init tstnftmarket --contract-name NFTMarketWithPermit --product subgraph-studio --protocol ethereum --start-block 90951146 --from-contract 0x98A566801FF66d156971ADa3f6D729eFBABD67Ca --network arbitrum-sepolia --abi './NFTMarketWithPermit_api.json'
```

## Codegen
```
graph codegen
```

## Build
```
graph build
```

## Authenticate in CLI
```
graph auth --studio {KEY}
```
