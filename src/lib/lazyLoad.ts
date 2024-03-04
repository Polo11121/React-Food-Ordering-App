import { lazy } from "react";

export const lazyLoad = (namedExport: string, path: string = "../pages") =>
  /* @vite-ignore */
  lazy(() => import(path).then((module) => ({ default: module[namedExport] })));
