## 🍽️ Recipe Finder v1.0

### **Project Overview**

The **Recipe Finder** is a dynamic web application built using **ReactJS** that allows users to quickly browse and filter recipes. This is **Version 1.0** of the application, which focuses on delivering a smooth user experience for viewing recipes sourced from a local data file.

---

### **✨ Key Features**

* **Browsing:** View a comprehensive list of all available recipes.
* **Filtering:** Easily filter recipes based on specific criteria (e.g., ingredients, cuisine type, etc.).
* **Local Data Source:** Recipes are sourced efficiently from a static **JSON file**, ensuring fast load times.
* **Modern Frontend:** Built with **ReactJS** for a fast, responsive, and component-based user interface.

---

### **⚙️ Tech Stack**

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend Framework** | **ReactJS** | Building the user interface (components, state management). |
| **Styling** | **CSS** | Defining the visual design, layout, and responsiveness. |
| **Markup** | **HTML** | Structuring the content and recipes. |
| **Logic** | **JavaScript** | Handling all application logic, including filtering and data processing. |

---

### **🚀 Getting Started**

Follow these steps to get a copy of the project up and running on your local machine for development and testing.

#### **Prerequisites**

You will need the following installed on your system:

* **Node.js** (LTS version recommended)
* **npm** (Node Package Manager) or **Yarn**

#### **Installation**

1.  **Clone the repository:**
    ```bash
    git clone [Your Repository URL Here]
    cd recipe-finder
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # OR
    yarn install
    ```

3.  **Run the application:**
    This command runs the app in development mode. Open `http://localhost:3000` to view it in your browser.
    ```bash
    npm start
    # OR
    yarn start
    ```

---

### **👨‍💻 Project Structure**

The core of the application logic resides in these key files:

| Path | Description |
| :--- | :--- |
| `src/App.js` | The main **React** component that renders the entire application. |
| `src/components/` | Contains all reusable UI components (e.g., `RecipeCard.js`, `FilterBar.js`). |
| `src/data/recipes.json` | **The source of all recipe data.** This file is loaded upon application startup. |
| `src/index.css` / `src/App.css` | Global and component-specific CSS styling. |

#### **Data Source (`recipes.json` format)**

The local JSON file should contain an array of recipe objects, similar to the following structure:

```json
[
  {
    "id": 1,
    "name": "Classic Tomato Pasta",
    "cuisine": "Italian",
    "ingredients": ["Tomatoes", "Pasta", "Garlic", "Basil"],
    "prep_time": "30 mins"
  },
  {
    "id": 2,
    "name": "Spicy Chicken Curry",
    "cuisine": "Indian",
    "ingredients": ["Chicken", "Curry Paste", "Coconut Milk", "Rice"],
    "prep_time": "45 mins"
  }
]
