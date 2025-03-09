export default [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        directives: {
          'script-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'https://trustwise-insurance-frontend.onrender.com', 'https://res.cloudinary.com'],
          'media-src': ["'self'", 'data:', 'blob:', 'https://trustwise-insurance-frontend.onrender.com', 'https://res.cloudinary.com'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      origin: ['https://trustwise-insurance-frontend.onrender.com','https://trustwise-insurance-git-designtwo-amansgiths-projects.vercel.app', 'http://localhost:3000'], // Add your Vercel domain here
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization'],
      keepHeadersOnError: true,
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];