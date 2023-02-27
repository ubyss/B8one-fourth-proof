import { gql } from "@apollo/client";

export const OBTER_PRODUTOS = gql`
  query getData($input: SendRegionalizationInput!) {
    storeRegionalization(input: $input) {
      name
      address
      neighborhood
      city
      state
      postalCode
      hour
      celphone
      phone
      products {
        id
        image
        name
        listPrice
        price
        installments
      }
    }
  }
`;
