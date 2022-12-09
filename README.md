# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```
frontend: https://github.com/shaddylangton/reactfront



POLYGON BASED NAME SERVICE
INTRODUCTION
This polygon based name service is based on ethereum name service
The Ethereum Name Service (ENS) is a distributed, open, and extensible naming system based on the Ethereum block chain.
ENS’s job is to map human-readable names like ‘alice.eth’ to machine-readable identifiers such as Ethereum addresses, other cryptocurrency addresses, content hashes, and metadata. ENS also supports ‘reverse resolution’, making it possible to associate metadata such as canonical names or interface descriptions with Ethereum addresses.
ENS has similar goals to DNS, the Internet’s Domain Name Service, but has significantly different architecture due to the capabilities and constraints provided by the Ethereum block chain. Like DNS, ENS operates on a system of dot-separated hierarchical names called domains, with the owner of a domain having full control over subdomains.
Top-level domains, like ‘.eth’ and ‘.test’, are owned by smart contracts called registrars, which specify rules governing the allocation of their subdomains. Anyone may, by following the rules imposed by these registrar contracts, obtain ownership of a domain for their own use. ENS also supports importing in DNS names already owned by the user for use on ENS.
Because of the hierarchal nature of ENS, anyone who owns a domain at any level may configure subdomains - for themselves or others - as desired. For instance, if Alice owns 'alice.eth', she can create 'pay. Alice.eth' and configure it as she wishes.
ENS is deployed on the Ethereum main network and on several test networks. If you use a library such as the ensjs JavaScript library, or an end-user application, it will automatically detect the network you are interacting with and use the ENS deployment on that network.
PROBLEM STATEMENT.
Gas fees. The biggest issue with ENS is the transaction fees. To register a name, you need to pay gas fees to the Ethereum block chain. The Ethereum block chain is referred to as a “layer 1” block chain because we can build other block chains on top of it. That’s exactly what the Polygon PoS chain is: it’s a block chain built on top of Ethereum that runs in parallel, making it the second layer (hence, layer 2). To avoid or save on the gas fees that later be used to implement other transactions we can make use of polygon name service. The polygon chain is EVM compatible. This makes it super easy to move contracts to Polygon so you don’t have to sell your kidneys to pay transaction fees. For most dApps, Polygon just makes a lot more sense because of how much faster and cheaper it is. All the popular Ethereum tools such as Hardhat, Remix, Truffle and Web3js work on Polygon; all you need to do is change the network you’re on



PROPOSED SOLUTION
Making use of polygon based naming service.
This has been developed using solidity and JavaScript. The contract functions written in solidity and the frontend making use of react a JavaScript framework.

USE CASES
I like to think of name services like global APIs.
Everyone can access them and you can store data that can be queried. ENS lets you store a bunch of things examples: usernames for various services, email address, website, and even an NFT. This data can then be accessed from any point within the webspace.


