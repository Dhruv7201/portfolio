import work1 from "../../assets/portfolio.png";
import work2 from "../../assets/monitoring.png";
import work3 from "../../assets/chatbot.png";
import work4 from "../../assets/webhook.png";
import work5 from "../../assets/vendingmachine.png";
import work6 from "../../assets/git-lab.png";
import work7 from "../../assets/ocr.png";
import work8 from "../../assets/pdf_scrapping.png";
import work9 from "../../assets/india_mart.png";

export const projectsData = [
  {
    id: 1,
    image: work1,
    title: "Portfolio",
    category: "web",
    description:
      "Made static portfolio website using React, vanilla CSS, firebase and google domains. This website is used to showcase my projects and skills.",
  },
  {
    id: 2,
    image: work2,
    title: "Employee Monitoring",
    category: "fullstack",
    description:
      "Made Employee Monitoring System using React, FastAPI, Python libs (win32, pynput, pyautoGUI, etc), rabbitMQ and MongoDB. This system can monitor employee activity, take screenshots, and send it to the server.",
  },
  {
    id: 3,
    image: work3,
    title: "Doctor AI Chatbot",
    category: "fullstack",
    description:
      "Used django, vanilla CSS, and vanilla JS to make a website with chatbot that can diagnose a disease based on symptoms. This website is made for my final year project in college.",
  },
  {
    id: 4,
    image: work4,
    title: "Web Hook",
    category: "backend",
    description:
      "Made a web hook using FastAPI and Uptime Kuma for Godaddy domain. This web hook is used to automatically update the IP address of the domain if server is down for more than 10 minutes.",
  },
  {
    id: 5,
    image: work5,
    title: "Vending Machine",
    category: "iot",
    description:
      "Made a vending machine using Raspberry Pi, python, Flask, Paytm API. For automatic vending process based on QR code.",
  },
  {
    id: 6,
    image: work6,
    title: "GitLab Dashboard",
    category: "fullstack",
    description:
      "Made a dashboard using React, Material UI, GitLab GraphQL API. This dashboard is used to monitor and analyze the GitLab projects.",
  },
  {
    id: 7,
    image: work7,
    title: "Text Detection",
    category: "backend",
    description:
      "Made a text detection and recognition using Python, yolov5/yolovNAS, OpenCV, Tesseract OCR. This project is used to detect and recognize text and batch number from images. Used in DWS Machines for Accurate Batch Number Detection.",
  },
  {
    id: 8,
    image: work8,
    title: "PDF Scrapping",
    category: "scrapping",
    description:
      "Made scrapping scripts using python requests, beautifulsoup, pdfplumber, etc. This script is used to scrap data from PDF files website and store it in CSV file.",
  },
  {
    id: 9,
    image: work9,
    title: "India Mart Scrapping",
    category: "scrapping",
    description:
      "Made dynamic scrapping scripts that runs asynchronously and gathered hague amount of data from India Mart website. This script is used to scrap data from India Mart website and store it in CSV file.", 
  },
];

export const projectsNav = [
  {
    name: "all",
  },
  {
    name: "web",
  },
  {
    name: "backend",
  },
  {
    name: "fullstack",
  },
  {
    name: "iot",
  },
  {
    name: "scrapping",
  }
];
