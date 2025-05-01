---
title: Search
layout: single
permalink: /search/
---

<div class="search-container">
  <input type="text" id="search-input" placeholder="Search for content...">
  <div id="results-container"></div>
</div>

<script src="https://cdn.jsdelivr.net/npm/simple-jekyll-search@latest/dest/simple-jekyll-search.min.js"></script>
<script>
  window.simpleJekyllSearch = new SimpleJekyllSearch({
    searchInput: document.getElementById('search-input'),
    resultsContainer: document.getElementById('results-container'),
    json: '{{ site.baseurl }}/search.json',
    searchResultTemplate: '<div class="search-result"><a href="{url}"><h3>{title}</h3></a><p>{excerpt}</p></div>',
    noResultsText: 'No results found',
    limit: 10,
    fuzzy: false
  })
</script>

<style>
  .search-container {
    margin: 40px 0;
  }

  #search-input {
    width: 100%;
    padding: 15px;
    font-size: 16px;
    border: 2px solid #e9e9ef;
    border-radius: 8px;
    margin-bottom: 20px;
    transition: all 0.3s ease;
  }

  #search-input:focus {
    border-color: #614CE1;
    outline: none;
    box-shadow: 0 0 10px rgba(97, 76, 225, 0.1);
  }

  #results-container {
    margin-top: 20px;
  }

  .search-result {
    margin-bottom: 30px;
    padding-bottom: 20px;
    border-bottom: 1px solid #e9e9ef;
  }

  .search-result h3 {
    color: #1d1c3d;
    margin-bottom: 10px;
  }

  .search-result a {
    text-decoration: none;
  }

  .search-result p {
    color: #6e6e8a;
    font-size: 16px;
    line-height: 1.6;
  }
</style>

<!-- Search schema removed to fix Liquid syntax error -->
