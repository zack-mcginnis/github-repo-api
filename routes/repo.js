import fetch from "node-fetch";
import { Router } from 'express';

const GITHUB_API_URL = `https://api.github.com/search/repositories`;

const router = Router();

router.get('/', async (req, res) => {
  // Since the request to Github requires the "q=" param, we set a default date if our users don't provide one
  // TODO: validate user provided date param
  const date = req?.query?.date || "2019-01-10";
  // TODO: validate
  const viewTop = req?.query?.viewTop || "";
  // TODO: validate
  const language = req?.query?.language || "";

  const url = `${GITHUB_API_URL}?q=created:>${date}${language && `+language:${language}`}&sort=stars&order=desc${viewTop && `&per_page=${viewTop}`}`;
  let jsonResponse;

  try {
    const response = await fetch(url);
    jsonResponse = await response.json();
  } catch (error) {
    // TODO: Add custom logger
    console.log("Error fetching repos from Github", error)
    return res.sendStatus(500);
  }

  return res.send(jsonResponse.items);
});

export default router;