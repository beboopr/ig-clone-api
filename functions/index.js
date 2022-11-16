import functions from "firebase-functions";
import express from "express";
import cors from "cors";
import { getAllPhotos, addNewPhotos } from "./src/photos.js";

const app = express()
app.use(cors());
app.use(express.json()); // any time we do anything other than .get

// Routes here..
app.get('/photos', getAllPhotos);
app.post('/photos', addNewPhotos);

export const api = functions.https.onRequest(app);