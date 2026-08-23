export const useEvent = async (location = "nesselwang") => {
  const { event, formattedDate } = await import("../event-" + location);
  return { event, formattedDate, registration: null };
};
