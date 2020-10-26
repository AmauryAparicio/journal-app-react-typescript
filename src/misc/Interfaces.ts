import { FunctionComponent } from "react";

export interface iRoute {
  path: string,
  component: FunctionComponent<any>,
  type?: string,
  routes?: Array<iRoute>,
  exact?: boolean,
}

export interface iAuthState {
  uid?: string,
  name?: string,
  loggedIn: boolean,
}

export interface iUiState {
  loading: boolean,
  msgError?: string | null
}

export interface iAction<T> {
  type: string,
  payload?: T
}

export interface iAuthPayload {
  uid: string,
  displayName: string,
  loggedIn: boolean
}
export interface iAppState {
  auth: iAuthState,
  ui: iUiState,
  loggedIn: boolean
}

export type iUiPayload = string | null