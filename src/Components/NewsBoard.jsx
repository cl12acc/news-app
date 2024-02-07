import { useEffect } from "react";
import { useState } from "react";
import NewsItem from "./NewsItem";

const Newsboard = ({category}) => {

  const[articles,setArticles] = useState([]);

  useEffect(() => {
      let url=`https://newsdata.io/api/1/news?country=gb&image=1&category=${category}&apikey=${import.meta.env.VITE_API_KEY}`;

      fetch(url).then(response => response.json()).then(data => setArticles(data.results));
    },[category])

  return (
    <div>
      <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
      {articles.map((news,index) => {
        return <NewsItem key={index} title={news.title} description={news.description} src={news.image_url} url={news.link}/>
      })}
    </div>
    )
  }


export default Newsboard