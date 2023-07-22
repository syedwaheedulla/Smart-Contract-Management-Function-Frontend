import { useState, useEffect } from "react";
import { ethers } from "ethers";
import atm_abi from "../artifacts/contracts/Assessment.sol/Assessment.json";

export default function WebPage() {
    const [ethWallet, setEthWallet] = useState(undefined);
    const [account, setAccount] = useState(undefined);
    const [atm, setATM] = useState(undefined);
    const [balance, setBalance] = useState(undefined);
    const [isConnected, setIsConnected] = useState(false);

    const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
    const atmABI = atm_abi.abi;

    const getWallet = async() => {
        if (window.ethereum) {
            setEthWallet(window.ethereum);
        }

        if (ethWallet) {
            const accounts = await ethWallet.request({ method: "eth_accounts" });
            handleAccount(accounts);
        }
    };

    const handleAccount = (accounts) => {
        if (accounts.length > 0) {
            console.log("Account connected: ", accounts[0]);
            setAccount(accounts[0]);
            setIsConnected(true);
        } else {
            console.log("No account found");
            setAccount(undefined);
            setIsConnected(false);
        }
    };

    const connectAccount = async() => {
        if (!ethWallet) {
            alert("MetaMask wallet is required to connect");
            return;
        }

        const accounts = await ethWallet.request({ method: "eth_requestAccounts" });
        handleAccount(accounts);
        getATMContract();
    };

    const getATMContract = () => {
        const provider = new ethers.providers.Web3Provider(ethWallet);
        const signer = provider.getSigner();
        const atmContract = new ethers.Contract(contractAddress, atmABI, signer);
        setATM(atmContract);
    };

    const getBalance = async () => {
        if (atm) {
          try {
            const balanceBigNumber = await atm.getBalance();
            const balanceString = balanceBigNumber.toString();
            // Get the first digit of the balance
            const firstDigit = balanceString.charAt(0); // or balanceString[0]
            setBalance(firstDigit);
          } catch (error) {
            console.error("Error retrieving balance:", error);
          }
        }
      };

    const deposit = async() => {
        if (atm) {
            try {
                setTransactionStatus("Transaction Pending...");
                let tx = await atm.deposit(ethers.utils.parseEther(depositAmount.toString()));
                await tx.wait();
                getBalance();
                setTransactionStatus("Transaction Successful!");
                setErrorMessage("");
            } catch (error) {
                console.error("Error depositing funds:", error);
                setTransactionStatus("");
                setErrorMessage("Error depositing funds. Please try again.");
            }
        }
    };

    const withdraw = async() => {
        if (atm) {
            try {
                setTransactionStatus("Transaction Pending...");
                let tx = await atm.withdraw(ethers.utils.parseEther(withdrawAmount.toString()));
                await tx.wait();
                getBalance();
                setTransactionStatus("Transaction Successful!");
                setErrorMessage("");
            } catch (error) {
                console.error("Error withdrawing funds:", error);
                setTransactionStatus("");
                setErrorMessage("Error withdrawing funds. Please try again.");
            }
        }
    };

    const checkWalletStatus = () => {
        if (!ethWallet) {
            return "Wallet not connected. Please install MetaMask.";
        } else if (!isConnected) {
            return "Wallet connected but not authorized. Please connect your wallet.";
        } else {
            return "Wallet connected and authorized.";
        }
    };

    const [depositAmount, setDepositAmount] = useState(0);
    const [withdrawAmount, setWithdrawAmount] = useState(0);
    const [transactionStatus, setTransactionStatus] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        getWallet();
    }, []);

    return ( <
            main className = "container" >
            <
            header >
            <h1 > Welcome to the SCFM! < /h1>
            <h1 > ******************** < /h1>  <
            /header> { checkWalletStatus() } {
                isConnected ? ( <
                    div >
                    <
                    p > Your Account: { account } < /p> <
                    p > Your Balance: { balance } < /p> <
                    div className = "actions" >
                    <
                    label > Deposit Amount(ETH): < /label> <
                    input type = "number"
                    value = { depositAmount }
                    onChange = {
                        (e) => setDepositAmount(parseFloat(e.target.value)) }
                    /> <
                    button className = "action-button"
                    onClick = { deposit } >
                    Deposit <
                    /button> <
                    /div> <
                    div className = "actions" >
                    <
                    label > Withdraw Amount(ETH): < /label> <
                    input type = "number"
                    value = { withdrawAmount }
                    onChange = {
                        (e) => setWithdrawAmount(parseFloat(e.target.value)) }
                    /> <
                    button className = "action-button"
                    onClick = { withdraw } >
                    Withdraw <
                    /button> <
                    /div> {
                        transactionStatus && < p className = "status-message" > { transactionStatus } < /p>} {
                            errorMessage && < p className = "error-message" > { errorMessage } < /p>} <
                                /div>
                        ): ( <
                            button onClick = { connectAccount } > Connect Wallet < /button>
                        )
                    } <
                    style jsx > { `
        .container {
          text-align: center;
          padding: 20px;
        }
        .header-box {
            background-color: blue;
            color: white;
            padding: 10px;
            margin-bottom: 20px;
            border-radius: 5px;
          }

        .actions {
          margin-bottom: 10px;
        }

        .action-button {
          background-color: #4caf50;
          color: white;
          padding: 10px;
          border: none;
          cursor: pointer;
          font-size: 16px;
          border-radius: 5px;
          margin-left: 10px;
        }

        .action-button:hover {
          background-color: #45a049;
        }

        .status-message {
          color: green;
        }

        .error-message {
          color: red;
        }
      ` } < /style> <
                    /main>
                );
            }
