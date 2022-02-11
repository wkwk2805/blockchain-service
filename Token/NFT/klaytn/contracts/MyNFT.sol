//SPDX-License-Identifier:UNLICENSED

pragma solidity ^0.8.0;

import '../client/node_modules/@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol';
import '../client/node_modules/@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol';
import '../client/node_modules/@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol';
import '../client/node_modules/@openzeppelin/contracts/access/Ownable.sol';
import '../client/node_modules/@openzeppelin/contracts/utils/Counters.sol';

contract MyNFT is ERC721("MyNFT", "MNFT"), ERC721URIStorage, ERC721Enumerable, ERC721Burnable, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    
    struct ReturnData {
        uint256 tokenId;
        string uri;
    }

    function create(address player, string memory tokenUri)
        public
        returns (uint256)
    {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(player, newItemId);
        _setTokenURI(newItemId, tokenUri);

        return newItemId;
    }
    
    function getItems(address from) public view returns(ReturnData[] memory){
        uint256 balance = balanceOf(from);
        ReturnData[] memory items = new ReturnData[](balance);
        for(uint i = 0; i < balance; i++) {
            uint256 id = tokenOfOwnerByIndex(from, i);
            items[i] = ReturnData(id, tokenURI(id));
        }
        return items;
    }

    function _beforeTokenTransfer(address from, address to, uint256 tokenId) 
        internal 
        virtual 
        override(ERC721, ERC721Enumerable) 
    {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

}