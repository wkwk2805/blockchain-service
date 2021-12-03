// SPDX-License-Identifier:UNLICENSED

pragma solidity ^0.8.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20{
    constructor() ERC20("MyToken ","MTK") {}

    function mint(address _to, uint256 _amount) public {
        _mint(_to, _amount);
    }

    function burn(uint256 amount) public {
        _burn(msg.sender, amount);
    }
}