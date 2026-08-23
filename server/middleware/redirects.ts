import { getRequestURL, sendRedirect } from "h3";

export default defineEventHandler((event) => {
  const url = new URL(getRequestURL(event));
  const inboundUrl = new URL(getRequestURL(event));

  const hostnameMatch = url.hostname.match(
    /(www\.)?fire-trail-(nesselwang|immenstadt)\.de$/,
  );
  if (hostnameMatch) {
    const location = hostnameMatch[2];
    url.hostname = "www.fire-trail-allgäu.de";

    const pathMatch = new RegExp("^/" + location);
    if (!url.pathname.match(pathMatch)) {
      url.pathname = "/" + location + url.pathname;
    }
  }

  const urlStr = url.toString();
  const inboundUrlStr = inboundUrl.toString();
  if (urlStr != inboundUrlStr) {
    return sendRedirect(event, urlStr);
  }
});
