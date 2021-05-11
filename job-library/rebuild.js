#!/usr/bin/env node

const axios = require('axios');
const apiUrl = 'https://staging.openfn.org/api/public';

async function loadContent() {
  /* ... */
  console.log('loading job library');
  return await axios.get(`${apiUrl}/jobs`).then(function (response) {
    // handle success
    const jobs = response.data;
    return jobs;
  });
}

const jobs = loadContent();
console.log(jobs);
