import { useEffect } from 'react';

export const routeMetadata = {
  '/': {
    title: 'Lakshya Sharma | Software Engineer & AI/ML Engineer',
    description:
      "Lakshya Sharma's professional portfolio. MCA graduate and software developer building scalable web applications, robust backend systems, REST APIs, and intelligent AI/ML solutions.",
    keywords:
      'Lakshya Sharma, Full Stack Software Engineer, AI/ML Engineer, MCA, React, FastAPI, Node.js, Python, Generative AI, Portfolio',
  },
  '/full-stack': {
    title: 'Lakshya Sharma | Full Stack Software Engineer',
    description:
      'Full Stack Software Engineer portfolio of Lakshya Sharma. Specializing in React, Next.js, Node.js, Express, FastAPI, PostgreSQL, Docker, and scalable REST API architectures.',
    keywords:
      'Lakshya Sharma, Full Stack Engineer, Software Developer, React, Node.js, FastAPI, PostgreSQL, Docker, REST APIs, Portfolio',
  },
  '/ai-ml': {
    title: 'Lakshya Sharma | AI/ML Engineer & Generative AI Developer',
    description:
      'AI/ML Engineer specializing in machine learning, deep learning, Generative AI, RAG, NLP, computer vision, Python, FastAPI, and backend development.',
    keywords:
      'AI, ML, Machine Learning, Deep Learning, NLP, Computer Vision, Generative AI, RAG, LangChain, Python, PyTorch, TensorFlow, FastAPI, Portfolio',
  },
};

export const usePageMetadata = (route) => {
  useEffect(() => {
    const meta = routeMetadata[route] || routeMetadata['/'];

    // Title
    document.title = meta.title;

    // Meta description
    const descEl = document.querySelector('meta[name="description"]');
    if (descEl) descEl.setAttribute('content', meta.description);

    // Meta keywords
    const kwEl = document.querySelector('meta[name="keywords"]');
    if (kwEl) kwEl.setAttribute('content', meta.keywords);

    // Open Graph
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', meta.title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', meta.description);

    // Twitter
    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute('content', meta.title);

    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute('content', meta.description);
  }, [route]);
};
