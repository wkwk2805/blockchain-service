// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import '../client/node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract SimpleStorage is ERC20("MyToken","MTK"){

  uint storedData;

  function set(uint x) public {
    storedData = x;
  }

  function get() public view returns (uint) {
    return storedData;
  }
}
