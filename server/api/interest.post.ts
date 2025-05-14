interface Interest {
  name: String,
  email: String,
  phone: String,
  origin: String,
  interests: String[]
}

import Airtable from "airtable";

export default defineEventHandler(async (event) => {
  const data = await readBody<Interest>(event);

  try {
    await (new Airtable()
      .base('appZoyrtQIfDJ0wiS')
      .table('tblkn6qNqYB98nImM')
      .create(data)
    )

    return setResponseStatus(event, 202)
  } catch(error) {
    let statusMessage = 'Unknown Error'
	  if (error instanceof Airtable.Error) statusMessage = error.message

    return setResponseStatus(event, 400, statusMessage)
  }
})