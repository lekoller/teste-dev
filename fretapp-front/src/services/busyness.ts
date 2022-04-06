import { http } from "./config";

export default {
    listOffers: () => (
        http.get('busyness/offers/')
    ),
    listBids: () => (
        http.get('busyness/bids/')
    )
}