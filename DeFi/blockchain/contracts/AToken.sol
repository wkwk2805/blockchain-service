// SPDX-License-Identifier:UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract AToken is ERC20{

    constructor() ERC20("AToken", "ATK") {}
    
    function mint (address account, uint256 amount )  public {
        _mint(account, amount);
    }

    function burn (address account, uint256 amount )  public {
        _burn(account, amount);
    }
}