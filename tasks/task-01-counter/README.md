# 🧮 Task 01 – React Counter App

This is a foundational ReactJS project aimed at helping you understand **React state**, **event handling**, **component design**, and **code clarity** using hooks and minimal JSX.

---

## 🧠 Objective

The goal of this task is to implement a basic counter app in React that:

- Increments the count
- Decrements the count
- Resets the count to zero

While this seems simple, it covers some of the most fundamental concepts in React that developers are expected to master early in their journey — and interviewers often focus on these during screening rounds.

---

## 📚 Concept: React State Management with `useState`

### 🔹 What is `useState`?

`useState` is a **React Hook** that lets you add **state variables** to functional components.

> Before Hooks were introduced, state management was only possible in class components using `this.state`. `useState` allows functional components to become stateful.

---

### 🔹 Syntax:

```js
const [state, setState] = useState(initialValue);
```

- `state` → the current value (read-only)
- `setState` → function to update the state
- `initialValue` → value you want the state to start with (e.g., 0)

---

### 🔹 How We Use It in This Task:

```js
const [count, setCount] = useState(0);
```

This means:

- `count` is initialized with `0`
- Whenever we call `setCount(newValue)`, the component will re-render with `count` updated to `newValue`

---

## 🧩 Component Logic Explained

We define **three handler functions**:

```js
const handleIncrement = () => setCount(count + 1);
const handleDecrement = () => setCount(count - 1);
const handleReset = () => setCount(0);
```

These are attached to three buttons to increment, decrement, and reset the counter.

---

## 🎯 Why This Task Matters

- React apps are built on user interactions — and buttons are a common way users interact.
- Managing state properly and updating the UI accordingly is a core skill.
- Writing clean, separated logic is essential for maintainable code.

---

## 💬 Interview Questions & Deep Explanations

### 🔸 Q1. What is the purpose of `useState` in React?

**A:** It allows functional components to hold and manage their own local state, giving them the power to re-render when something changes.

---

### 🔸 Q2. Why do we use separate handler functions?

**A:** It improves code readability, modularity, and scalability. If the logic grows (e.g., you log analytics or check limits), you can manage it inside the handler instead of inline.

---

### 🔸 Q3. What are the performance considerations with `useState`?

- Calling `setState` does **not** mutate the state immediately.
- React **batches** multiple updates to avoid excessive rendering.
- Using functional updates (`setCount(prev => prev + 1)`) is **preferred** when the new state depends on the old one.

---

### 🔸 Q4. What causes a React component to re-render?

**A:** A component re-renders when:
- Its **state** changes via `setState`
- Its **props** change
- Its **context** value changes

---

### 🔸 Q5. What happens if you call `setCount(count + 1)` twice in a row?

You may still see the count increment by **only 1**, not 2. Why?

Because React batches state updates. That's why you should use:

```js
setCount(prev => prev + 1);
setCount(prev => prev + 1);
```

This guarantees the state is based on the most recent update.

---

## 🚀 How to Run the App

```bash
git clone https://github.com/YOUR_USERNAME/ReactJS_Tasks.git
cd ReactJS_Tasks
npm install
npm start
```

In `App.jsx`:

```js
import CounterApp from '../tasks/task-01-counter-app/CounterApp';
```

Make sure you render `<CounterApp />` inside your main component.

---

## ✅ Output (Sample)

```
🧮 React Counter App
Count: 0

[➕ Increment] [➖ Decrement] [🔄 Reset]
```

---

## 📁 File Structure

```
tasks/
└── task-01-counter-app/
    ├── CounterApp.jsx
    └── README.md
```

---

## 🛠 Technologies Used

- ReactJS
- JavaScript (ES6+)
- Inline styling
- React Hooks (`useState`)

---

