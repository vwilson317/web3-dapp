//SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract VWTestTokenContract is ERC20("VWTest Token", "VWTT") {
    mapping(address => uint256) public balances;

    constructor() {
        // Set the starting balance for the contract deployer
        _mint(msg.sender, 1000);// Set the desired starting balance
    }

    function mintToken() public {
        _mint(msg.sender, 1000);
    }
}