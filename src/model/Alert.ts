export enum AlertEnum {
  ERRO = 'ERRO',
  OK = 'OK',
}

export type AlertType = { title: string; icon: string };

export const AlertValues: Record<AlertEnum, AlertType> = {
  [AlertEnum.ERRO]: {
    title: 'ERROR',
    icon: 'fa fa-duotone fa-triangle-exclamation text-red',
  },
  [AlertEnum.OK]: {
    title: 'OK',
    icon: 'fa fa-solid fa-circle-check text-pine-green',
  },
};
