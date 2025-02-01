# Crypto Board

A **React + TypeScript + Vite** web application that provides real-time cryptocurrency data and trading capabilities.

---

## 📌 Features

### 📊 Crypto List Board

- Displays a list of the **top 10 cryptocurrencies** with:
  - Name 🏷️
  - Symbol 💠
  - Live Prices 💲 (Updated via WebSockets in real-time)

### 📈 Chart Page

- Click on any coin from the list to view its **price changes over 1 day, 7 days, or 30 days**.

### 🔄 Trade Page

- Select two cryptocurrencies and **convert** one into another seamlessly.

---

## ⚡ Installation

Clone the repository:

```bash
 git clone "git@github.com:Matuta14/crypto-board.git"
```

Navigate to the project folder:

```bash
 cd crypto-board
```

Install dependencies:

```bash
 npm install
```

---

## 🛠 Development

Start the development server:

```bash
 npm start
```

This will start the **Vite** development server and provide a local URL to preview the project (default port: **3000**).

---

## 🚀 Technologies Used

- ⚡ **Vite** - Fast build tool
- ⚛️ **React** - Component-based UI framework
- ⌨️ **TypeScript** - Static typing
- 📏 **ESLint** - Code linting
- 💅 **styled-components** - CSS-in-JS styling

---

## 🔄 Data Flow

### 🔍 Data Fetching

- **React Query** is used for fetching data, with automatic updates every minute.

### 📡 Real-time Data

- **WebSockets** are used to push live price updates in real-time.

---

## ✅ Testing

- Unit tests are written using **Vitest** 🔬
- Key functions (such as the **converter helper functions**) are tested to ensure correct calculations.

---

## 🏛 Architecture

### 🗂 State Management

- **🟥 Redux** - Managing fetched data
- **💾 LocalStorage** - Storing the selected coin for the chart page
- **🧩 Context API** - Managing WebSocket connections & viewport size detection

### 🛤 Routing

- **🔗 React Router** - Handles navigation between pages
- **🗺 Route Map** - Defines paths and corresponding components

### 🎨 Styling

- **💅 Styled-components** - Modular styles per component
- **🗂 Each component has a dedicated `styled/` folder**

---

## 📁 Folder Structure

```
crypto-board/
│── public/            # Static assets 🌍
│── src/               # Source code 📂
│   ├── api/           # Handles API calls and related logic 🌐
│   ├── helpers/       # Utility functions and helper methods 🛠
│   ├── hooks/         # Custom React hooks 🔄
│   ├── pages/         # Page-level components 📄
│   ├── shared-components/ # Reusable UI components 🏗
│   ├── assets/        # Images and icons 🖼
│   ├── store/         # Redux store & actions 🏪
│   ├── context/       # Context providers (WebSocket, viewport) 🌍
│── App.tsx            # Main application component 🏠
│── main.tsx           # Entry point, renders the React app 🚀
│── index.html         # Base HTML file where the app is mounted 📜
│── package.json       # Manages dependencies and scripts 📦
│── ...

```
