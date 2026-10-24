export const profile = {
  name: "Dhruv Modi",
  role: "AI/ML Engineer & Full-Stack Developer",
  location: "Vadodara, India",
  email: "dhruv.modi2345@gmail.com",
  phone: "917201982878",
  cv: "/cv.pdf",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/dhruv-modi-082219195/" },
    { label: "GitHub", href: "https://github.com/Dhruv7201" },
    { label: "Instagram", href: "https://www.instagram.com/dhruv.it.is" },
    { label: "WhatsApp", href: "https://api.whatsapp.com/send?phone=917201982878" },
  ],
};

export const stats = [
  { value: "4.5", label: "years building" },
  { value: "16+", label: "projects shipped" },
];

// `shape` is the form the particle orb takes while this group is in focus.
export const skillGroups = [
  {
    name: "AI & Vision",
    shape: "eye",
    blurb: "Computer vision and language models taken from training to production, optimised to run fast and reliably wherever they are deployed.",
    items: ["Python", "OpenCV", "Ultralytics YOLO", "Custom OCR", "LLMs", "VLMs", "LangChain", "OpenVINO", "TensorRT", "ONNX"],
  },
  {
    name: "Backend",
    shape: "loop",
    blurb: "APIs and services that stay up: queues for heavy work, real-time video and RPC, auth that holds, and endpoints that answer fast.",
    items: ["FastAPI", "Django", "Flask", "RabbitMQ", "GraphQL", "gRPC", "WebRTC", "JWT auth"],
  },
  {
    name: "Frontend",
    shape: "cube",
    blurb: "Dashboards and tools people use every day, with clear charts and state that behaves.",
    items: ["React", "Redux", "JavaScript", "Tailwind", "shadcn/ui", "Chart.js"],
  },
  {
    name: "Data",
    shape: "stack",
    blurb: "Where everything lands: relational, analytical, vector and geo stores, caches and object storage.",
    items: ["PostgreSQL", "MongoDB", "Redis", "ClickHouse", "pgvector", "Milvus", "PostGIS", "S3"],
  },
  {
    name: "Tooling",
    shape: "helix",
    blurb: "The kit for shipping: containers, version control, pipelines, model serving and workflow orchestration.",
    items: ["Docker", "Git", "GitLab CI", "Linux", "Portainer", "Vim", "vLLM", "Dagster", "Prefect"],
  },
];

export const projects = [
  {
    id: "anpr",
    title: "ANPR Truck Tracking",
    category: "AI / Vision",
    stack: ["YOLO26", "OpenOCR", "RFID reader", "Portainer"],
    description:
      "Tracks trucks through the gate without anyone writing anything down. A YOLO26 vision model spots each number plate, OpenOCR reads it, and an RFID reader confirms the vehicle. Every truck is then mapped to the shipment container it carries, and the services run as containers managed through Portainer.",
  },
  {
    id: "aiscraper",
    title: "AI Web & PDF Scraper",
    category: "AI / Data",
    stack: ["Python", "LLM extraction", "Playwright", "asyncio", "pdfplumber"],
    description:
      "A scraper that reads pages the way a person does. An LLM maps each page onto a fixed schema, so when a site changes its layout the extraction adapts instead of breaking. Async crawlers cover large sites like IndiaMART, PDF tables are pulled out as structured rows, and every record is validated, retried on failure and flagged when confidence is low before it lands as clean CSV.",
  },
  {
    id: "ocr",
    title: "Medicine Checker",
    category: "AI / Vision",
    stack: ["YOLOv26 OBB", "OpenVINO", "OpenCV", "Custom OCR model"],
    description:
      "Reads the batch number and printed details on medicine packs as they move down the line. A YOLOv26 OBB model finds text regions even when packs are rotated, a custom OCR model reads them, and the pipeline runs on OpenVINO for fast inference on the machine itself.",
  },
  {
    id: "checkout",
    title: "Self-Checkout Counter",
    category: "AI / Vision",
    stack: ["React", "YOLO26n-seg", "Custom OCR model"],
    description:
      "A pharmacy counter that bills medicines on its own. Place full boxes or loose strips under the camera: a YOLO26n-seg model outlines each item, a custom OCR model reads what it is, and the bill builds itself at box or strip level in a React interface, ready to pay.",
  },
  {
    id: "facetrack",
    title: "Face Detection AI",
    category: "AI / Vision",
    stack: ["YOLO-Pose", "AntelopeV2", "Kafka", "ClickHouse"],
    description:
      "Follows people across a floor covered by multiple cameras and logs where they go. YOLO-Pose finds each person, AntelopeV2 face embeddings recognise the same person from one camera to the next, and every sighting streams through Kafka into ClickHouse, building a movement log that is fast to query.",
  },
  {
    id: "monitoring",
    title: "Employee Monitoring",
    category: "Full Stack",
    stack: ["React", "FastAPI", "RabbitMQ", "MongoDB"],
    description:
      "A desktop agent plus dashboard that tracks activity, captures screenshots and streams them to a central server through a RabbitMQ queue. Built with React, FastAPI and native Python libraries (win32, pynput, pyautogui).",
  },
  {
    id: "vending",
    title: "Vending Machine",
    category: "IoT",
    stack: ["Raspberry Pi", "Flask", "Paytm API"],
    description:
      "A Raspberry Pi vending machine that dispenses automatically once a QR-code payment clears.",
  },
];

export const experience = [
  { title: "AI/ML Engineer", place: "Ethics InfoTech", time: "Dec 2025 - Now" },
  { title: "Python Developer", place: "MSBC Group", time: "Jan 2025 - Dec 2025" },
  { title: "Associate Software Engineer", place: "Ethics InfoTech", time: "Mar 2023 - Jan 2025" },
];

export const education = [
  {
    title: "MLflow in Action: MLOps with MLflow",
    place: "Udemy, J Garg",
    time: "Oct 2026",
    href: "https://www.udemy.com/certificate/UC-1e99a5bc-abf4-4348-885d-38b09cd9e3d8/",
  },
  {
    title: "TensorFlow 2: Deep Learning & AI",
    place: "Udemy, Lazy Programmer",
    time: "May 2025",
    href: "https://www.udemy.com/certificate/UC-95a1aa27-0a0b-4e55-af0b-dcc65b95ab82/",
  },
  { title: "Bachelor's Degree", place: "Parul University", time: "2020 - 2023" },
  { title: "Diploma, Computer Engineering", place: "Parul Technology", time: "2016 - 2019" },
];

export const testimonials = [
  {
    name: "Ayushkumar Santoki",
    quote:
      "Remarkably hardworking, excelling across various domains. A true asset to the team, always willing to help and share his knowledge.",
  },
  {
    name: "Drashti Bhrambhatt",
    quote:
      "Always inspiring to work alongside Dhruv. His drive to learn new things is infectious, and he consistently goes above and beyond.",
  },
  {
    name: "Samruddhi Sonpal",
    quote:
      "Your dedication is truly inspiring. You always go the extra mile and make everyone feel heard and appreciated.",
  },
  {
    name: "Alpesh Vasani",
    quote:
      "Consistently impresses with his dedication to learning and solving complex problems. A proactive, tireless, invaluable teammate.",
  },
  {
    name: "Harish Vispute",
    quote:
      "Exceptional coworker who fosters a positive work environment, with a wealth of skills that contribute to team success.",
  },
  {
    name: "Nidhi Padariya",
    quote:
      "Unwavering dedication to the team, a strong work ethic, a positive attitude and a willingness to get the job done - and done well.",
  },
];
