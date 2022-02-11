const axios = require("axios");
const apiKey = "55a704003bad07615460";
const apiSecretKey =
  "1707ed247b8c764c1ab68b3a5ffac84aec9f0843e28969217b627327bc0a0072";

export const pinFileToIPFS = async (dataInFile, fileName) => {
  const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;

  const metadata = JSON.stringify({
    name: fileName,
  });
  dataInFile.append("pinataMetadata", metadata);

  const pinataOptions = JSON.stringify({
    cidVersion: 0,
    customPinPolicy: {
      regions: [
        {
          id: "FRA1",
          desiredReplicationCount: 1,
        },
        {
          id: "NYC1",
          desiredReplicationCount: 2,
        },
      ],
    },
  });
  dataInFile.append("pinataOptions", pinataOptions);
  const response = await axios.post(url, dataInFile, {
    maxBodyLength: "Infinity", //this is needed to prevent axios from erroring out with large files
    headers: {
      "Content-Type": `multipart/form-data; boundary=${dataInFile._boundary}`,
      pinata_api_key: apiKey,
      pinata_secret_api_key: apiSecretKey,
    },
  });
  return response.data;
};

export const pinJSONToIPFS = async (JSONBody) => {
  const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;
  const response = await axios.post(url, JSONBody, {
    headers: {
      pinata_api_key: apiKey,
      pinata_secret_api_key: apiSecretKey,
    },
  });
  return response.data;
};

export const getIPFSData = async (uri) => {
  const response = await axios.get(uri);
  return response.data;
};
