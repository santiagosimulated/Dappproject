const { ethers } = require("hardhat");

const Web3 = require('web3');


//the code below is for connecting wallet and handling connection display
const connectButton = document.getElementById("connect001");
const connectButton2 = document.getElementById("connect002");
const connected = document.getElementById("connected");

async function connect() {
  try {
    if (typeof window.ethereum !== "undefined") {
      const accounts = await ethereum.request({ method: "eth_requestAccounts" });
      const address = accounts[0];
      connected.innerHTML = `Connected: ${address}`;
      connectButton.style.display = "none";
      connectButton2.style.display = "none";
    }
  } catch (error) {
    console.error(error);
  }
}

ethereum.on("accountsChanged", (accounts) => {
  if (accounts.length > 0) {
    const address = accounts[0];
    connected.innerHTML = `Connected: ${address}`;
    connected.style.display = "block";
    connectButton.style.display = "none";
  } else {
    connected.style.display = "none";
    connectButton.style.display = "block";
  }
});

// get balance of a single ERC20 token
const tokenAddress = "0x08215664c52F9ea125a702F15C650Cf514009923";
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

async function getTokenBalance(tokenAddress) {
  const account = await getConnectedAccount();
  const tokenContract = new web3.eth.Contract(ERC20_ABI, tokenAddress);
  const balance = await tokenContract.methods.balanceOf(account).call();
  console.log(`Token balance for account: ${account} is ${balance}`);
  return balance;
}

getTokenBalance(tokenAddress).catch((err) => {
  console.error(err);
});


module.exports = {
    getTokenBalance,
    getConnectedAccount,
}