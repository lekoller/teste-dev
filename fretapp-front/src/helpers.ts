export interface IEnterprise {
  id: number;
  name: string;
  doc: string;
  about: string;
  active: boolean | string;
  site: string;
}

export interface IOffer {
  id: number;
  id_customer: number;
  from: string;
  to: string;
  initial_value: number;
  amount: number;
  amount_type: string;
}

export interface IBid {
  id_provider: number;
  id_offer: number;
  value: number;
  amount: number;
}

export interface IEnterpriseNameAndId {
  id: number;
  name: string;
}

export interface IOfferInfoAndId {
  id: number;
  info: string;
}

export const enterprisesRowMap = (provider: IEnterprise) => {
  if (provider.active) {
    provider.active = "Sim";
  } else {
    provider.active = "Não";
  }

  return provider;
};
