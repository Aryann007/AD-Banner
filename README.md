# GrowEasy Front End Development Internship Assignment

## Overview

This project is a Next.js application with TypeScript, designed to display and edit ad banners. The application showcases a list of ad banners on the homepage, each with a title, description, CTA (Call-to-Action), image, and background/template. Users can edit these banners via a bottom sheet interface.

## Features

- **Next.js with TypeScript**: The project is built using Next.js and TypeScript for strong typing and better development experience.
- **Ad Banners Display**: Ad banners are dynamically rendered on the homepage using data from a JSON list.
- **Edit Functionality**: Each banner includes an edit icon that opens a bottom sheet for modifying banner details.
- **Component Structure**:
  - **Ad Banner Component**: `BannerImageComp` – A reusable component for displaying ad banners.
  - **Bottom Sheet Edit Component**: `EditBannerTemplateBs` – A separate component for the bottom sheet editing functionality.
- **Modular Code**: The code is structured to be modular and follows best practices for frontend development.

## Structure
-components/BannerImageComp.tsx: The component for displaying ad banners.
-components/EditBannerTemplateBs.tsx: The component for the bottom sheet edit functionality.
-data/bannerData.json: Contains a JSON list of ad banner data used to render banners on the homepage.
