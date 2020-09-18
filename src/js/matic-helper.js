

  const MaticPOSClient = require("@maticnetwork/maticjs").MaticPOSClient;
  const config =require("./config-0xbtc")
  var Web3 = require('web3');

var helper = {

  //readonly
   getMaticPOSClient (ethProvider,userAddress) {
    return new MaticPOSClient({
      network: "mainnet", // For testnet change this to testnet
      version: "v1", // For testnet change this to mumbai
      parentProvider: ethProvider,
      maticProvider:  new Web3.providers.HttpProvider(config.child.RPC) , //<network.Matic.RPC> OR new Web3.providers.HttpProvide(<network.Matic.RPC>)
      parentDefaultOptions: { from: userAddress }, // optional, can also be sent as last param while sending tx
      maticDefaultOptions: { from: userAddress }, // optional, can also be sent as last param while sending tx
    });
  },
  getMaticPOSConnection(maticProvider,userAddress) {
   return new MaticPOSClient({
     network: "mainnet", // For testnet change this to testnet
     version: "v1", // For testnet change this to mumbai
     parentProvider: new Web3.providers.HttpProvider(config.root.RPC),
     maticProvider: maticProvider  , //<network.Matic.RPC> OR new Web3.providers.HttpProvide(<network.Matic.RPC>)
     parentDefaultOptions: { from: userAddress }, // optional, can also be sent as last param while sending tx
     maticDefaultOptions: { from: userAddress }, // optional, can also be sent as last param while sending tx
   });
 }

}


export default helper



/*


// Approve ERC20 tokens for deposit using POS Portal
await maticPOSClient.approveERC20ForDeposit(
  rootToken, // RootToken address,
  amount, // Amount for approval (in wei)
  options // transaction fields, can be skipped if default options are set
)

// Deposit tokens into Matic chain using POS Portal.
// Remember to call `approveERC20ForDeposit` before this
await maticPOSClient.depositERC20ForUser(
  rootToken, // RootToken address
  user, // User address (in most cases, this will be sender's address),
  amount, // Amount for deposit (in wei)
  options // transaction fields, can be skipped if default options are set
)



// Burn ERC20 tokens(deposited using POS Portal) on Matic chain and retrieve the Transaction hash
    await maticPOSClient.burnERC20(
      childToken, // ChildToken address
      amount, // Amount to burn (in wei)
      options // transaction fields, can be skipped if default options are set
    )

    // Exit funds from the POS Portal using the Transaction hash generated from the 'burnERC20' method
    // Can be called after checkpoint has been submitted for the block containing burn tx.
    await maticPOSClient.exitERC20(
      txHash, // Transaction hash generated from the 'burnERC20' method
      options // transaction fields, can be skipped if default options are set
    )
*/
