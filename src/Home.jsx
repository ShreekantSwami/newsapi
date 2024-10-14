import axios from "axios";
import React, { useEffect, useState } from "react";

function Home() {
  const [news, setNews] = useState([]);
  const [filter, setFilter] = useState([]);
  let filtered = "";
  let inputTxt = "";
  useEffect(() => {
    axios
      .get(
        "https://newsdata.io/api/1/news?apikey=pub_556627816202561f60501489d533c62282b18&q=news"
      )
      .then((response) => {
        console.log(response.data.results);
        setNews(response.data.results);
      });
  }, []);
  const txtHandler = (e) => {
    inputTxt = e.target.value;
    filtered = news.filter((curr) =>
      curr.title
        .toLowerCase()
        .includes(
          inputTxt.toLowerCase() ||
            curr.description.toLowerCase().includes(inputTxt.toLowerCase())
        )
    );
    setFilter(filtered);
  };

  return (
    <div className="flex flex-col  gap-10 p-3 w-full h-full items-center">
      <input
        type="search"
        className="ring-2 outline-none  rounded-md p-3 w-[60%]"
        placeholder="Type to search the news"
        onChange={txtHandler}
        id="input"
      />
      <div className="w-full flex flex-wrap justify-around">
        {(filter.length > 0 ? filter : news).map((e) => {
          return (
            <div className="bg-white shadow-lg shadow-black/50 p-3 rounded-md size-[350px] overflow-hidden overflow-y-scroll my-2">
              {e.urlToImage !== "" && (
                <div className="h-[35%] flex justify-center">
                  <img src={e.source_icon} className="h-full" />
                </div>
              )}

              <div>
                <p className="text-lg text-slate-600">Title:</p>

                <p className="text-[12px] text-slate-400">{e.title}</p>
              </div>
              <div>
                <p className="text-lg text-slate-600">Creator:</p>

                <p className="text-[12px] text-slate-400">{e.author}</p>
              </div>
              <div>
                <p className="text-lg text-slate-600">Description:</p>

                <p className="text-[12px] text-slate-400">{e.description}</p>
              </div>
              <div>
                <p className="text-lg text-slate-600">Date:</p>

                <p className="text-[12px] text-slate-400">{e.publishedAt}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
