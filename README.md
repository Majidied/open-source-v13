# Open Source v13

Open Source v13 is a landing page project created with React and Tailwind CSS to promote the latest version of an open-source event. It features multiple sections, including an interactive hero section, event planning details, historical overview of previous versions, team showcase, and augmented reality experience. The project also integrates Framer Motion for smooth animations to enhance user experience.

## Table of Contents

- [Project Features](#project-features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [License](#license)

## Project Features

- **Hero Section**: Includes the event's title and a call-to-action button with smooth animations.
- **Planning Section**: A breakdown of the event days using a responsive grid layout.
- **Historique Section**: Overview of previous versions of Open Source, detailing their key features.
- **Team Section**: Display of team members with a clean, minimal card layout.
- **Augmented Reality Section**: Introduces the immersive AR experience as part of the event.
- **Responsive Design**: Optimized for various screen sizes using Tailwind CSS.
- **Smooth Animations**: Leveraging Framer Motion for subtle yet engaging animations.
- **Modular Components**: Each section is encapsulated in its own component, making it easy to maintain and scale.

## Tech Stack

- **React**: Front-end library for building the user interface.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Framer Motion**: Library for animations in React.
- **React Icons**: For adding icons to components (e.g., navbar toggle).

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

Make sure you have the following installed:

- **Node.js**: v14.x or later
- **npm**: v6.x or later (comes with Node.js)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/open-source-v13.git
   ```

2. Navigate into the project directory:

   ```bash
   cd open-source-v13
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Running the Project

1. Start the development server:

   ```bash
   npm start
   ```

2. Open your browser and navigate to `http://localhost:3000` to view the application.

## Project Structure

```bash
.
├── public
│   └── index.html
├── src
│   ├── components
│   │   ├── Navbar/Navbar.js
│   │   ├── Hero/Hero.js
│   │   ├── Planning/Planning.js
│   │   ├── Historique/Historique.js
│   │   ├── Team/Team.js
│   │   ├── Sponsors/Sponsors.js
│   │   ├── ARSection/ARSection.js
│   │   ├── Footer/Footer.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

- **components/**: Contains all the modular components for each section of the landing page.
- **App.js**: The main component that renders all sections.
- **index.css**: Tailwind CSS styles and custom CSS.

## Usage

- **Navbar**: A responsive navigation bar with links to sections like "Home," "Planning," "Historique," "Team," and "Augmented Reality."
- **Hero Section**: The opening section that grabs attention with the event title and a call-to-action button.
- **Planning Section**: Displays the schedule of the event.
- **Historique Section**: Details the past versions of Open Source.
- **Team Section**: Introduces the team behind the event.
- **Augmented Reality Section**: Presents the AR experience to users.
- **Footer**: Basic footer with event copyright.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
