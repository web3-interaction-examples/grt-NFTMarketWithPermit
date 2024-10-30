import { Address, BigInt } from "@graphprotocol/graph-ts"
import {
  NFTListed as NFTListedEvent,
  NFTSold as NFTSoldEvent,
} from "../generated/NFTMarketWithPermit/NFTMarketWithPermit"
import {
  OrderBook,
  FilledOrder
} from "../generated/schema"

export function handleNFTListed(event: NFTListedEvent): void {
  let entity = new OrderBook(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tokenId = event.params.tokenId
  entity.seller = event.params.seller
  entity.price = event.params.price
  entity.nftAddress = Address.fromString("0x32eCC13478b2d03b212AE7b371F5f3C18490Bc9d")
  // timestamp + 1 hour
  entity.deadline = event.block.timestamp.plus(BigInt.fromI32(3600))

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNFTSold(event: NFTSoldEvent): void {
  let entity = new FilledOrder(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tokenId = event.params.tokenId
  entity.seller = event.params.seller
  entity.buyer = event.params.buyer
  entity.price = event.params.price
  entity.nftAddress = Address.fromString("0x32eCC13478b2d03b212AE7b371F5f3C18490Bc9d")

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
