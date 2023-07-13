# Assessment Contract

This is a Solidity smart contract named "Assessment" that allows an owner to manage a balance and perform deposit and withdrawal operations.

## License

This project is licensed under the SPDX-License-Identifier: UNLICENSED.

## Prerequisites

- Solidity version: ^0.8.9

## Contract Details

The `Assessment` contract has the following features:

### State Variables

- `owner`: An `address` variable representing the owner of the contract.
- `balance`: A `uint256` variable representing the current balance of the contract.

### Events

- `Deposit(uint256 amount)`: An event emitted when a deposit is made. It includes the deposited amount as a parameter.
- `Withdraw(uint256 amount)`: An event emitted when a withdrawal is made. It includes the withdrawn amount as a parameter.

### Constructor

The constructor function initializes the contract with an initial balance. It takes a `uint256` parameter `initBalance` and assigns it to the `balance` variable. The sender of the transaction is set as the `owner`.

### Functions

- `getBalance()`: A public view function that returns the current balance of the contract.

- `deposit(uint256 _amount)`: A public payable function that allows the owner to deposit additional funds to the contract. It takes a `uint256` parameter `_amount` representing the amount to be deposited. The function increases the balance by the deposited amount and emits a `Deposit` event.

- `withdraw(uint256 _withdrawAmount)`: A public function that allows the owner to withdraw funds from the contract. It takes a `uint256` parameter `_withdrawAmount` representing the amount to be withdrawn. If the balance is insufficient, it reverts the transaction with an `InsufficientBalance` error. Otherwise, it subtracts the withdrawal amount from the balance, emits a `Withdraw` event, and asserts that the balance is updated correctly.

### Custom Error

- `InsufficientBalance(uint256 balance, uint256 withdrawAmount)`: A custom error used in the `withdraw` function to revert the transaction when the balance is insufficient for the requested withdrawal amount. The error includes the current balance and the requested withdrawal amount.

## Usage

To use this contract, follow these steps:

1. Deploy the contract to a supported blockchain network using Solidity compiler version ^0.8.9.
2. Initialize the contract by providing an initial balance value.
3. As the contract owner, you can perform the following operations:
   - Use the `deposit` function to add funds to the contract.
   - Use the `withdraw` function to withdraw funds from the contract.

Note: Only the contract owner can perform deposit and withdrawal operations.

## Example

Here's an example usage of the `Assessment` contract:

```solidity
Assessment contract = new Assessment(1000);

contract.getBalance(); // Returns 1000

contract.deposit{value: 500}(500); // Deposits 500 wei to the contract

contract.getBalance(); // Returns 1500

contract.withdraw(800); // Withdraws 800 wei from the contract

contract.getBalance(); // Returns 700
```

In this example, the contract is initialized with an initial balance of 1000 wei. The owner then makes a deposit of 500 wei and performs a withdrawal of 800 wei, resulting in a remaining balance of 700 wei.

## License Information

This project is licensed under the SPDX-License-Identifier: UNLICENSED. For more information, please refer to the SPDX-License-Identifier documentation.


1.Inside the project directory, in the terminal type: npm i
2.Open two additional terminals in your VS code
3.In the second terminal type: npx hardhat node
4.In the third terminal, type: npx hardhat run --network localhost scripts/deploy.js
5.Back in the first terminal, type npm run dev to launch the front-end.
6.After this, the project will be running on your localhost. Typically at http://localhost:3000/
