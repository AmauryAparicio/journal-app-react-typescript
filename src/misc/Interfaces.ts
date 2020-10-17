import { FunctionComponent } from "react";

export interface iRoute{
  path: string,
  component: FunctionComponent<any>,
  type?: string,
  routes?: Array<iRoute>,
  exact?: boolean,
}