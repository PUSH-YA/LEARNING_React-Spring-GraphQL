import React, { Component, useState, useEffect } from 'react';


const App = () => {
  // state
  const [news, setNews] = useState([])
  const [searchQuery, setSearchQuery] = useState('machine learning')
  const [url, setUrl] = useState('http://hn.algolia.com/api/v1/search?query=machine learning')
  const [loading, setLoading] = useState(false)

  //fetch news
  const fetchNews = () => {
    // set loading true
    setLoading(true)

    fetch(url)
    // promises once we api hits and we get data
    .then(result => result.json())
    .then(data => setNews(data.hits), setLoading(false))
    .catch(error => console.log(error))
  }

  useEffect(() => {
    fetchNews()
    // dependency on url state changing
  }, [url])

  const handleChange = (e) => {
    // take the user input
    setSearchQuery(e.target.value);
  }

  const handleSubmit = (e) => {
    // don't wanna reload immediately
    e.preventDefault()
    setUrl(`http://hn.algolia.com/api/v1/search?query=${searchQuery}`)
  }

  const showLoading = () => ( 
    loading ? <h2>Loading ...</h2> : ''
    )

  const searchForm = () => (
    <form onSubmit={handleSubmit}>
    <input type = "text" value = {searchQuery} onChange={handleChange}/>
    <button>Search</button>
    </form>)

  const showNews = () => (
    news.map((n, i) => 
      (<p key={i}>{n.title}</p>))
  )

  return(
    <div>
      <h1>News</h1>
      {showLoading()}
      <hr/>
      {searchForm()}
      <hr/>
      {showNews()}
    </div>
  )
}

export default App;
