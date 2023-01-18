declare type RootState = ReturnType<typeof import('./src/app/store/store').store.getState>
declare module "*.module.scss";
declare module "*.scss";
declare module "*.svg";

declare global {
  interface Window{
    ethereum:any
  }
}
