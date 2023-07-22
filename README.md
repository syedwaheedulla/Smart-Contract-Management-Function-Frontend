# Ethereum Smart Contract Interaction with React

This project is a web application that allows users to interact with an Ethereum smart contract named "Assessment." Users can connect their Ethereum wallets (e.g., MetaMask) to the application, view their account balance, deposit funds to the smart contract, and withdraw funds from it.

## Features

- Connect Ethereum Wallet: Users can connect their Ethereum wallets to the web application to interact with the "Assessment" smart contract.
- Account Balance: The application displays the user's connected Ethereum account address and account balance retrieved from the smart contract.
- Deposit Funds: Users can deposit funds to the smart contract using the provided input field and the "Deposit" button.
- Withdraw Funds: Users can withdraw funds from the smart contract using the provided input field and the "Withdraw" button.
- Transaction Status: The application provides real-time transaction status updates to inform users about the outcome of their deposit and withdrawal actions.
- Error Handling: In case of any errors during transactions, appropriate error messages are displayed to guide users.

## Prerequisites

To use this application, you need the following:

- A web browser with a MetaMask extension installed (or any other Ethereum wallet that supports Ethereum provider APIs).
- A test network or local Ethereum node to deploy and interact with the "Assessment" smart contract.

## Getting Started

1. Clone this repository to your local machine.

```bash
git clone https://github.com/your-username/ethereum-react-smart-contract-interaction.git
cd ethereum-react-smart-contract-interaction
```

2. Install the project dependencies.

```bash
npm install
```

3. Deploy the "Assessment" smart contract to your chosen Ethereum network or local node.

4. Update the `contractAddress` variable in `HomePage.js` with the deployed smart contract address.

5. Run the development server.

```bash
npm start
```

6. Open your web browser and navigate to `http://localhost:3000` to access the application.

## How to Use

1. Connect Wallet: Click the "Connect Wallet" button to connect your Ethereum wallet (e.g., MetaMask) and authorize it to interact with the application.

2. Account Information: After connecting your wallet, you will see your connected Ethereum account address and account balance fetched from the smart contract.

3. Deposit: Enter the amount of Ether you want to deposit in the "Deposit Amount(ETH)" input field and click the "Deposit" button. The transaction status will be displayed, and the account balance will be updated after a successful deposit.

4. Withdraw: Enter the amount of Ether you want to withdraw in the "Withdraw Amount(ETH)" input field and click the "Withdraw" button. The transaction status will be displayed, and the account balance will be updated after a successful withdrawal.

## Troubleshooting

If you encounter any issues while using the application, please make sure:

- You have an active internet connection.
- Your Ethereum wallet (e.g., MetaMask) is properly configured and connected to the desired network.
- The "Assessment" smart contract is deployed to the correct address and is accessible from your connected wallet.
