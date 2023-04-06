
/*        
// GET ERC20 TOKENS ON THE CONNECTED WALLET AND LIST THEM

const TokenRegistry = require("@uniswap/token-lists").TokenRegistry;

const ERC20_ABI = require("../artifacts/contracts/ZartToken.sol/IERC20.json");

const web3 = new Web3(window.ethereum);

async function getConnectedAccount() {
  const accounts = await web3.eth.getAccounts();
  if (accounts.length > 0) {
    return accounts[0];
  } else {
    throw new Error("No accounts found");
  }
}

async function getERC20TokenBalances() {
  const account = await getConnectedAccount();
  const tokenRegistry = new TokenRegistry({ provider: web3.currentProvider });
  const tokens = await tokenRegistry.getTokens();

  const balances = await Promise.all(
    tokens.map(async (token) => {
      const tokenContract = new web3.eth.Contract(ERC20_ABI, token.address);
      const balance = await tokenContract.methods.balanceOf(account).call();
      return { symbol: token.symbol, balance: balance };
    })
  );

  console.log("ERC20 token balances for account", account);
  console.log(balances);
}

getERC20TokenBalances().catch((err) => console.error(err));

*/
