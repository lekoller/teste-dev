import { http } from "./config";

const customersURL = "enterprises/customers/";
const providersURL = "enterprises/providers/";

export interface IEnterpriseForm {
  name: string;
  doc: string;
  about: string;
  active: boolean;
  site: string;
}

export default {
  listCustomers: () => http.get(customersURL),
  listProviders: () => http.get(providersURL),

  createCustomer: (customerForm: IEnterpriseForm) => http.post(customersURL, customerForm),
  createProvider: (providerForm: IEnterpriseForm) => http.post(providersURL, providerForm),
};
