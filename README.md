
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

## My query
```
query MyQuery {
  filledOrders {
    id
  }
  orderBooks {
    id
    nftAddress
    deadline
    blockTimestamp
    price
    seller
    tokenId
    transactionHash
    blockNumber
  }
}
```

## Result of "My query"
```
{
  "data": {
    "filledOrders": [
      {
        "id": "0xa2e7f2021c79de9b8fa2c5ee4b9bc01811221d6d0e8a3d1b7bb24d679777da5902000000"
      }
    ],
    "orderBooks": [
      {
        "id": "0x23b15bce21238da83cd3ebafd5572a1a3a838959a30c0330d4df4916a2eabdd400000000",
        "nftAddress": "0x32ecc13478b2d03b212ae7b371f5f3c18490bc9d",
        "deadline": "1729677718",
        "blockTimestamp": "1729674118",
        "price": "100000000000000000000",
        "seller": "0x059dc4eee9328a9f163a7e813b2f5b4a52add4df",
        "tokenId": "1",
        "transactionHash": "0x23b15bce21238da83cd3ebafd5572a1a3a838959a30c0330d4df4916a2eabdd4",
        "blockNumber": "90961409"
      },
      {
        "id": "0x493c3956855f627f850cb4083329569167e152fd558b7ecd2ac42f7f9d6a37be00000000",
        "nftAddress": "0x32ecc13478b2d03b212ae7b371f5f3c18490bc9d",
        "deadline": "1729674771",
        "blockTimestamp": "1729671171",
        "price": "100000000000000000000",
        "seller": "0x059dc4eee9328a9f163a7e813b2f5b4a52add4df",
        "tokenId": "0",
        "transactionHash": "0x493c3956855f627f850cb4083329569167e152fd558b7ecd2ac42f7f9d6a37be",
        "blockNumber": "90951438"
      }
    ]
  }
}
```
