import React from 'react'
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'
import {useState} from "react";

export default async function Recover(FromAddress:String,ToAddress:String) {
const API_KEY = process.env.NEXT_PUBLIC_MAINNET;

const mainnet_provider = createPublicClient({
    chain: mainnet,
    transport: http(API_KEY)
})

let balance = (await mainnet_provider.getBalance({
    address: FromAddress.toString(),
}))

let nonce = await mainnet_provider.getTransactionCount({
    address: FromAddress.toString(),
})

let gasPrice = await mainnet_provider.getGasPrice();
console.log("gasPrice",gasPrice);

console.log("nonce",nonce);

const bundle = `
import { serializeTransaction } from 'viem'
const mainnet_provider = createPublicClient({
    chain: mainnet,
    transport: http(API_KEY)
})

let balance = (await mainnet_provider.getBalance({
    address: Address.toString(),
}))

const serialized = serializeTransaction({
    chainId: 1,
    gas: 21001n,
    maxFeePerGas: parseGwei('20'),
    maxPriorityFeePerGas: parseGwei('2'),
    nonce: ${nonce},
    to: ${ToAddress},
    value: ${balance},
  })
`;

return {bundle,balance,FromAddress};

}

