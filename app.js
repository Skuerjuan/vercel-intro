import {config} from './dbconfig.js'
import express from "express";
import 'dotenv/config'

import pkg from 'pg'
const {Client} = pkg;

import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const app = express()
const PORT = 8000

app.get('/cancion', async (req, res) => {
  const client = new Client(config);
  await client.connect();
  let result = await client.query("select * from public.cancion");
  await client.end();
  console.log(result.rows);
  res.send(result.rows)

})

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
})