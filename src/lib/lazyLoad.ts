import { lazy } from "react";

export const lazyLoad = (namedExport: string, path: string = "../pages") =>
  lazy(() => import(path).then((module) => ({ default: module[namedExport] })));
