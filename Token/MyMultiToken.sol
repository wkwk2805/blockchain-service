// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC1155/ERC1155.sol";

contract MyMultiToken is ERC1155 {
    // id
    uint256 public constant GOLD = 0;
    uint256 public constant SILVER = 1;
    uint256 public constant THORS_HAMMER = 2;
    uint256 public constant SWORD = 3;
    uint256 public constant SHIELD = 4;

    // id로 확인
    constructor() ERC1155("https://game.example/api/item/{id}.json") { }
    
    function mint(address account, uint256 itemId, uint256 amount) public {
        _mint(account, itemId, amount);
    }

    function burn (address account, uint256 itemId, uint256 amount) public {
        _burn(account, itemId, amount);
    }
}