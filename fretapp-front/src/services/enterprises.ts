import { http } from "./config";

export default {
    listCustomers: () => (
        http.get('enterprises/customers/')
    ),
    listProviders: () => (
        http.get('enterprises/providers/')
    )
}