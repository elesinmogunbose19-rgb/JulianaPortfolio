# Juliana Elesinmogun – Personal Portfolio

This repository contains my personal portfolio website for CTEC, built with **HTML, CSS, and JavaScript**.  
The site showcases my skills, coursework, projects, resume, and includes an interactive chatbot and QR code.

## 🔗 Live Site

Once GitHub Pages is enabled, the site will be available at:

`https://elesinmogunbose19-rgb.github.io/JulianaPortfolio/`

## 📂 Sections

- **Home** – Introduction, profile photo, and QR code that links to this portfolio.
- **About** – Education, GPA, relevant coursework, and technical skills.
- **Projects** – Links to my GitHub repositories (portfolio, wind speed program, catering database).
- **Resume** – Viewable and downloadable PDF resume.
- **Contact** – Simple contact form (demo only).

## 🤖 Chatbot

The chatbot is a simple JavaScript keyword-based assistant.  
It can answer questions about:

- Who Juliana is
- Education and degrees
- GPA and graduation date
- Skills and coursework
- Tenable AWS experience
- DARCARS and Wendy’s work experience
- Projects and resume
- Contact information and internship availability

The chatbot logic is implemented in `script.js` (function `botReply()`).

## 📱 QR Code

The QR code is generated on the **Home** section using the `qrcodejs` library.  
It encodes the GitHub Pages URL of this portfolio:

```js
const portfolioURL = "https://elesinmogunbose19-rgb.github.io/JulianaPortfolio/";
