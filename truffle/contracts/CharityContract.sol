// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CharityContract {
    // State variables
    address public owner;
    uint256 public totalDonations;

    // Event for logging donations
    event DonationReceived(address indexed donor, uint256 amount);
    // Event for logging withdrawals
    event Withdrawal(address indexed beneficiary, uint256 amount);

    // Mapping to track donations from each address
    mapping(address => uint256) public donations;

    // Modifier to restrict access to owner only
    modifier onlyOwner() {
        require(msg.sender == owner, "You are not the owner");
        _;
    }

    // Constructor to set the contract deployer as the owner
    constructor() {
        owner = msg.sender;
    }

    // Function to accept donations
    function donate() external payable {
        require(msg.value > 0, "Donation amount must be greater than zero");

        donations[msg.sender] += msg.value;
        totalDonations += msg.value;

        emit DonationReceived(msg.sender, msg.value);
    }

    // Function for the owner to withdraw funds
    function withdraw(uint256 _amount) external onlyOwner {
        require(_amount <= address(this).balance, "Insufficient balance");

        payable(owner).transfer(_amount);

        emit Withdrawal(owner, _amount);
    }

    // Function to check the contract balance
    function getBalance() external view returns (uint256) {
        return address(this).balance;
    }
}
