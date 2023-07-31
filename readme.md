# Geeks for Geeks Olympics Hackathron Project Documentation

## Introduction

The Geeks for Geeks Olympics Hackathron project is a web application developed using React, which showcases a map containing markers representing the medals won by different countries in the Olympics. The application uses Mapbox API for interactive map integration. Additionally, Chart.js is utilized to display various graphs and visualizations related to Olympic data. This documentation aims to provide an overview of the project's architecture, features, and how to set it up for local development.

## Table of Contents

1. Installation and Setup
   1. Prerequisites
   2. Project Setup
   3. Running the Application

2. Features and Functionalities
   1. Interactive Map
   2. Medal Markers
   3. Olympic Data Graphs

3. Architecture and Technologies
   1. React
   2. Mapbox API (for Map)
   3. Chart.js

## 1. Installation and Setup

### 1.1 Prerequisites

Before setting up the project, ensure that you have the following prerequisites installed on your system:

1. Node.js: Install Node.js from the official website - https://nodejs.org/

### 1.2 Project Setup

To set up the project, follow these steps:

1. Clone the repository from GitHub:

bash
git clone https://github.com/Sid-the-Slothh/gfgOlympics.git
cd geeks-for-geeks-olympics


2. Install project dependencies:

bash
npm install


### 1.3 Running the Application

To run the Geeks for Geeks Olympics Hackathron web application, use the following command:

bash
npm start


The application will be accessible at `http://localhost:3000`.

## 2. Features and Functionalities

### 2.1 Interactive Map

The project's main feature is an interactive map that displays the geographical locations of countries that have won medals in the Olympics. Users can zoom in/out and pan across the map to explore different regions.

### 2.2 Medal Markers

The map is populated with markers, each representing a country that has won one or more medals in the Olympics. The markers are visually differentiated based on the type of medal (gold, silver, or bronze) and may include additional information like the country's name and the number of medals won.

### 2.3 Olympic Data Graphs

The project incorporates Chart.js to showcase various graphs and visualizations related to Olympic data. These graphs may include:

- Medal Distribution: A bar chart displaying the distribution of gold, silver, and bronze medals across different countries.
- Top Medalists: A pie chart illustrating the top countries with the highest number of medals.
- Historical Trends: A line chart showcasing the medal count of specific countries over multiple Olympic events.

## 3. Architecture and Technologies

### 3.1 React

React is a JavaScript library for building user interfaces. It provides a component-based architecture that allows developers to create reusable UI elements and manage the application's state efficiently. In this project, React is the foundation for building the user interface, managing map interactions, and rendering the graphs.

### 3.2 Mapbox API (for Map)

Mapbox is a popular API that provides interactive maps and spatial data services. It offers various features for customizing and integrating maps into web applications. In this project, Mapbox API is used to create an interactive map and display medal markers at the appropriate geographical locations.

### 3.3 Chart.js

Chart.js is a popular open-source JavaScript library for data visualization. It provides a simple and flexible API to create various types of interactive charts and graphs. In this project, Chart.js is utilized to generate and display the graphs related to Olympic data.

## Conclusion

Congratulations on completing the Geeks for Geeks Olympics Hackathron project documentation! This documentation should provide a comprehensive overview of the project, including its installation instructions, features, technologies used, and architecture. The project demonstrates the use of React for building the web application, Mapbox API for interactive map integration, and Chart.js for data visualization, creating a visually appealing and informative application related to Olympic data. Happy coding and best of luck with your project!
