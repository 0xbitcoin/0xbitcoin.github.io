module.exports = {
  root: {
    RPC: "https://mainnet.infura.io/v3/ff7c8dd5cc424fc1b78b5509d033dea2",
    DERC20: "0xb6ed7644c69416d67b522e20bc294a9a9b405b31",  // ROOT ADDRESS https://etherscan.io/token/0xb6ed7644c69416d67b522e20bc294a9a9b405b31
  },
  child: {
    RPC: "https://rpc-mainnet.matic.network",
    DERC20: "0x71B821aa52a49F32EEd535fCA6Eb5aa130085978",  // CHILD ADDRESS https://explorer.matic.network/address/0x71B821aa52a49F32EEd535fCA6Eb5aa130085978/contracts
  },
  user: {
    privateKey:
      "YOUR PK HERE",
    address: "0x123ABC_YOUR_ADDRESS_HERE",
    amount: "100000000000", // Transfer 1000 0xBTC - CHANGE THIS
    amount1: "2300000000000000", // Approve 23m 0xBTC - NO NEED TO CHANGE
  },
};
