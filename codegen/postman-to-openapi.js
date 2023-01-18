/* eslint-disable unicorn/prevent-abbreviations */
/* eslint-disable no-console */
/* eslint-disable unicorn/prefer-top-level-await */
/* eslint-disable unicorn/prefer-module */
/* eslint-disable import/no-extraneous-dependencies */
require('dotenv').config({
  path: '.env.development',
})

const path = require('node:path')
const fs = require('node:fs/promises')
const postmanToOpenApi = require('postman-to-openapi')
const fetch = require('node-fetch')

// Postman Collection Path
const COLLECTION = path.resolve(__dirname, './postman-collection.json')
// Output OpenAPI Path
const OUTPUT = path.resolve(__dirname, 'postman.json')

const getCollection = async () => {
  try {
    const postmanCollection = await fetch(
      process.env.REACT_APP_POSTMAN_COLLECTION_URL
    ).then((res) => res.json())

    await fs.writeFile(COLLECTION, JSON.stringify(postmanCollection))
  } catch (error) {
    console.error(error)
  }
}

// Async/await
const convert = async () => {
  try {
    await getCollection()
    await postmanToOpenApi(COLLECTION, OUTPUT, {
      defaultTag: 'General',
      outputFormat: 'json',
      pathDepth: 1,
    })

    fs.unlink(COLLECTION)
  } catch (error) {
    console.error(error)
  }
}

convert()
