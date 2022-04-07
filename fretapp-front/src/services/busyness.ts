import { http } from "./config";

const offersURL = "busyness/offers/";
const bidsURL = "busyness/bids/";

export interface IOfferForm {
  from: string;
  to: string;
  initial_value: number;
  amount: number;
  amount_type: string;
  id_customer: number;
}

export interface IBidForm {
  value: number;
  amount: number;
  id_provider: number;
  id_offer: number;
}

export default {
  listOffers: () => http.get("busyness/offers/"),
  listBids: () => http.get("busyness/bids/"),

  createOffer: (offer: IOfferForm) => http.post(offersURL, offer),
  createBid: (bid: IBidForm) => http.post(bidsURL, bid),
};
