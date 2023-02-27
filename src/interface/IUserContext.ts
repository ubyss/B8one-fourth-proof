import { IProducts } from './IProduct';

export interface IContext {
    modalStep: Number,
    setModalStep: Function
    clickedState: Function
    storeRegionalization: StoreRegionalization | null,
    loading: boolean
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
