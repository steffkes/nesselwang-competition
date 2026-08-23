import * as generic from "../event";
import * as nesselwang from "../event-nesselwang";

export const useGenericEvent = async () => {
  return { registration: null, ...generic };
};

export const useNesselwangEvent = async () => {
  return { registration: null, ...nesselwang };
};
