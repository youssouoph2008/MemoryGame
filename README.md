# 🃏 Memory Card Game (React)

A simple memory game built with **React** using hooks, API fetching, and state management.

---

## 🚀 Live Demo

(Add your deployed link here)

---

## 📸 Preview

(Add screenshot here)

---

## 🎮 How It Works

* Click cards to earn points
* Cards shuffle after every click
* Don’t click the same card twice
* Game resets when you lose
* Best score is saved

---

## ⚠️ Why the App Might Not Work (Debug Guide)

If the app shows a blank screen or doesn’t behave correctly, it is usually caused by one of the following issues:

### 1. ❌ “React is not defined” error

This happens when `React` is used directly without importing it properly.

**Fix:**

* Avoid using `React.useState` or `React.useEffect`
* Use named imports instead:

```js id="fix1"
import { useState, useEffect } from "react";
```

---

### 2. ❌ Broken or incomplete JSX (return errors)

A missing `}` or `)` can break the entire app.

**Example of a common mistake:**

```jsx id="fix2"
if (loading) {
  return (
    <div>Loading...</div>
```

**Fix:**

```jsx id="fix3"
if (loading) {
  return (
    <div>Loading...</div>
  );
}
```

---

### 3. ❌ Incorrect state usage

Using variables before declaring them or mixing logic order can break the component.

Example:

```js id="fix4"
setBestScore((prev) =>
  newScore > prev ? newScore : prev
);
```

Make sure `newScore` is defined first.

---

### 4. ❌ Mixing `Set` and `Array` methods

If you use an array:

```js id="fix5"
clickedCards.includes(id)
```

If you use a Set:

```js id="fix6"
clickedCards.has(id)
```

Mixing them will break the logic.

---

### 5. ❌ Loading state stuck

If the screen stays blank, the API may not be finishing or `loading` is never set to `false`.

**Fix:**
Make sure:

```js id="fix7"
setLoading(false);
```

is always reached after fetching data.

---

## 🧠 Summary

Most issues come from:

* JSX not properly closed
* Incorrect React imports
* State logic mistakes
* Mixing data types (Set vs Array)
* Loading state not updating

---

## 🛠️ Tech Stack

* React
* JavaScript
* PokéAPI

---

## 📦 Setup

```bash id="setup1"
npm install
npm run dev
```

---

## 👨‍💻 Author

React learning project.

---
