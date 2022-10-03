import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xA6d74DB1cF887B753631b36EC4f6c372f9Ce3807"
);

export default instance;
