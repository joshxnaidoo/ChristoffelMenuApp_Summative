# Christoffel’s Menu App — Final POE Submission
This project is a React Native / Expo mobile application that allows a private chef (Christoffel) to create, manage, filter, and display menu items.  
It was built for the MAST5112 Portfolio of Evidence (POE).

## 📱 App Overview
Christoffel’s Menu App allows the chef to:

- Add menu items with:
  - Dish name  
  - Description  
  - Course (Starter, Main, Dessert)  
  - Price (R)
- View the complete menu  
- See the **total number of dishes**
- Remove menu items  
- View **average price by course**
- Guests can filter the menu by course (Starter / Main / Dessert)
- All screens are separated and connected via navigation


## 📂 Project Structure
src/
├── menuStore.ts # Global store managing menu items
├── types.ts # Shared TypeScript types
└── screens/
├── HomeScreen.tsx # Displays menu, totals, averages
├── ManageMenuScreen.tsx # Add/delete items
├── FilterScreen.tsx # Guest filter page
└── DishDetailsScreen.tsx # Individual dish details



## 🚀 How to Run the App

1. Install dependencies:

2. Start Expo:


3. Scan the QR code using:
- Expo Go on iOS or Android  
- Or run on an emulator


## ✔ Features Implemented (Matches POE Requirements)

### **Part 2 Requirements**
| Requirement | Completed |
|------------|-----------|
| Enter dish name | ✅ |
| Enter description | ✅ |
| Select course (Starter/Main/Dessert) | ✅ |
| Enter price | ✅ |
| Predefined list of courses | ✅ |
| Home screen displays menu | ✅ |
| Home screen shows total items | ✅ |
| Chef can add all items on homepage | ✅ |
| App runs on Expo | ✅ |

---

## 🆕 Final POE Updates (Part 3 Requirements)

### 🔹 **1. Average Price Per Course**
Displayed on the Home screen:
- Starter  
- Main  
- Dessert  

### 🔹 **2. Separate Screens Implemented**
- Home Screen  
- Manage Menu (Add + Remove items)  
- Guest Filter  
- Dish Details  

### 🔹 **3. Items Saved in an Array**
All menu items are stored in a global store using TypeScript arrays.

### 🔹 **4. Remove Items**
Each dish can be removed from the Manage Menu screen.

### 🔹 **5. Guest Filter Page**
Shows only items matching the selected course.

### 🔹 **6. Code Refactored**
- Moved logic into `menuStore.ts`
- Added reusable functions
- Used TypeScript types for cleaner code

---

## 📝 Change Log (Required for Final POE)

### **Changes Made After Part 2:**
- Created separate screens for:
- Home
- Manage Menu
- Filter
- Dish Details
- Added "Average Price per Course" section
- Added “Remove” feature for menu items
- Added course filter toggle for guests
- Improved UI styling and spacing
- Refactored code into multiple files and functions
- Added global state management with TypeScript
- Cleaned up layout with card components
- Added totals on Home screen
- Added sample dishes for demonstration
- Improved rounding and currency formatting

---

## 🎥 Video Demo
A screen recording showing:
- App launch  
- Adding dishes  
- Viewing all dishes  
- Removing dishes  
- Filtering items  
- Viewing averages  

youtube video link: https://youtu.be/-SyIfhMVJDg?si=sqkm8MdljbHEBjQH



## 🔗 GitHub Repository Link
https://github.com/joshxnaidoo/ChristoffelMenuApp_Summative  


## 👨‍💻 Technologies Used
- React Native (TypeScript)
- Expo
- React Navigation
- Functional Components + Hooks
- State management with global store


