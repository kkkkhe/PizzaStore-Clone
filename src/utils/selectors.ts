import { RootState } from "../reduxStore/redux-store"
export const isLoading = (state: RootState) => state.getAllPizzas.isLoading

export const getPizza = (state: RootState) => state.getAllPizzas.pizza

export const getPage = (state: RootState) => state.getAllPizzas.page

export const getSortBy = (state: RootState) => state.getAllPizzas.sortBy

export const getCategory = (state: RootState) => state.getAllPizzas.category

export const getTotalSum = (state: RootState) => state.setCart.totalSum

export const getTotalCount = (state: RootState) => state.setCart.totalCount