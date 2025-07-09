import { event, formattedDate } from "../event";

export const useEvent = async () => {
  const { data: registration } = await useFetch("/api/event/registration");
  return { event, formattedDate, registration };
};
