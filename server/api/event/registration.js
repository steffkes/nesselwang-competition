import { defineEventHandler } from "h3"; // needed for test
import { ofetch } from "ofetch";

export const extract = (content) => {
  return { slots: content["RegistrationConfig"]["Registrations"][0]["SlotsLeft"] };
};

export default defineEventHandler(async (event) => {
  try {
    const content = await ofetch(
      "https://my.raceresult.com/343456/RRRegStart/data/config",
      {
        timeout: 1000,
      },
    );

    return extract(content);
  } catch (error) {
    console.error({ error });
    return { slots: null };
  }
});
