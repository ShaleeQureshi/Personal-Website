import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import App from "../src/scripts/App";
import MainApp from "../parent components/home-component";
import SoftwareApp from "../parent components/software-component";
import ContactApp from "../parent components/contact-component";
import AboutApp from "../parent components/about-component";
import LoginApp from "../parent components/login-component";

const server = express();

server.get("/", (req, res) => {
  const appString = renderToString(<App />);
  res.send(
    MainApp({
      body: appString,
    })
  );
});
server.get("/home", (req, res) => {
  const appString = renderToString(<App />);
  res.send(
    MainApp({
      body: appString,
    })
  );
});
server.get("/software", (req, res) => {
  const appString = renderToString(<App />);
  res.send(
    SoftwareApp({
      body: appString,
    })
  );
});
server.get("/about", (req, res) => {
  const appString = renderToString(<App />);
  res.send(
    AboutApp({
      body: appString,
    })
  );
});
server.get("/contact", (req, res) => {
  const appString = renderToString(<App />);
  res.send(
    ContactApp({
      body: appString,
    })
  );
});
server.get("/login", (req, res) => {
  const appString = renderToString(<App />);
  res.send(
    LoginApp({
      body: appString,
    })
  );
});
