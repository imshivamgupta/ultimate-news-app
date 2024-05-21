import axios from "axios";

const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const GUARDIAN_API_KEY = import.meta.env.VITE_GUARDIAN_API_KEY;
const NYT_API_KEY = import.meta.env.VITE_NYT_API_KEY;

const newsAPIEndpoint = `https://newsapi.org/v2/everything?`;
const guardianAPIEndpoint = `https://content.guardianapis.com/search?api-key=${GUARDIAN_API_KEY}&show-fields=all`;
const nytAPIEndpoint = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${NYT_API_KEY}`;

const fetchFromNewsAPI = async (query, filters) => {
  const { source, category, date } = filters;
  let url = `${newsAPIEndpoint}q=${query}`;
  if (source) url += `&sources=${source}`;
  if (category) url += `&category=${category}`;
  if (date) url += `&from=${date}`;

  const response = await axios.get(`${url}&apiKey=${NEWS_API_KEY}`);
  return response.data.articles;
};

const fetchFromGuardianAPI = async (query, filters) => {
  const { source, category, date } = filters;
  let url = `${guardianAPIEndpoint}&q=${query}`;

  if (source) url += `&section=${source}`;
  if (category) url += `&type=${category}`;
  if (date) url += `&from-date=${date}`;

  const response = await axios.get(url);
  return response.data.response.results.map((article) => ({
    title: article.webTitle,
    description: article.fields.trailText,
    url: article.webUrl,
    urlToImage: article?.fields?.thumbnail,
  }));
};

const fetchFromNYTAPI = async (query, filters) => {
  const { source, category, date } = filters;
  let url = `${nytAPIEndpoint}&q=${query}`;

  if (source) url += `&fq=source:("${source}")`;
  if (category) url += `&fq=news_desk:("${category}")`;
  if (date) url += `&begin_date=${date.replace(/-/g, "")}`;

  const response = await axios.get(url);
  return response.data.response.docs.map((article) => ({
    title: article.headline.main,
    description: article.abstract,
    url: article.web_url,
    urlToImage: "https://static01.nyt.com/" + article?.multimedia?.[0]?.url,
  }));
};

export const fetchArticles = async (query, filters) => {
  const [newsAPIArticles, guardianArticles, nytArticles] = await Promise.all([
    fetchFromNewsAPI(query, filters),
    fetchFromGuardianAPI(query, filters),
    fetchFromNYTAPI(query, filters),
  ]);

  return [...newsAPIArticles, ...guardianArticles, ...nytArticles];
};
