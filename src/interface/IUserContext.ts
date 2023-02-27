import { IProducts } from './IProduct';

export interface IContext {
    modalStep: Number,
    setModalStep: Function
    clickedState: Function
    getInfo: Function
    storeRegionalization: StoreRegionalization | null,
    storeInfo: StoreInfo | null,
  }

export type IUserContext = {
    variables?: IContext
}

export type StoreRegionalization = {
  name: string
  address: string
  neighborhood: string
  city: string
  state: string
  postalCode: string
  hour: string
  celphone: string
  phone: string
  products : IProducts
}

export type StoreInfo = {
  storeRegionalization: StoreRegionalization
}
