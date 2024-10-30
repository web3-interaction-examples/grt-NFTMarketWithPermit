
## Install deps
```
npm install -g @graphprotocol/graph-cli
```


## Init the project(no need in this repo)
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

## Depoly to the graph
```
graph deploy --studio tstnftmarket
```


## Deployed API
- https://api.studio.thegraph.com/query/93100/tstnftmarket/v0.0.2/graphql?query=query+MyQuery+%7B%0A++filledOrders+%7B%0A++++id%0A++%7D%0A++orderBooks+%7B%0A++++id%0A++++nftAddress%0A++++deadline%0A++++blockTimestamp%0A++++price%0A++++seller%0A++++tokenId%0A++++transactionHash%0A++++blockNumber%0A++%7D%0A%7D
