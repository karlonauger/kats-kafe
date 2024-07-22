# Kat's  Kafe (Name TBD)

### [www.kats-kafe.com](https://www.kats-kafe.com/)

Coffee Roaster based in Burlington, VT

## Admin Portal

### [strapi.kats-kafe.com/admin/](https://strapi.kats-kafe.com/admin/)

Strapi CMS Admin Portal for managing site content

## Built With
[React](https://react.dev/) - The web framework used for the frontend.  
[Medusa](https://medusajs.com/) - Commerce Platform.  
[Netlify](https://www.netlify.com/) - Hosting Service used for React frontend.  
[Railway](https://railway.app/) - Hosting Service used for Strapi backend and Postgres DB.  
[Cloudinary](https://cloudinary.com/) - Cloud service for storing and optimizing images.  

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (preferably the latest stable version)
- npm (comes installed with Node.js)
- Strapi CLI (for managing the Strapi backend)

### Installation

Configure env variables files, follow example files.

#### Install dependencies and run Next.js Storefront

```bash
cd frontend
npx @medusajs/medusa-cli develop
npm run dev
```

#### Setup and run the Medusa backend

```bash
cd ../backend
npm install
npm run dev
```

Your default web browser should automatically open and load the Admin Portal at http://localhost:7001/ and the Storefront at http://localhost:8000/

## Author

### [www.auger-architecture.com](https://www.auger-architecture.com/)
Auger Architecture (Karlon Auger) - Design and development.

# License

Copyright (c) 2024 Karlon Auger

All rights reserved.

This software and associated documentation files (the "Software") are the proprietary information of Karlon Auger. They may not be copied, modified, distributed, or used without the express written permission of Karlon Auger.
