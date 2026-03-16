# Node.js Architecture Assignment

## 📝 Objective
Write an article explaining Node.js architecture covering V8 engine, libuv, Node.js bridging, and the difference between `global` and `globalThis`.

---

## 📚 Topics to Cover

### 1. **V8 Engine** (200-300 words)
- What is V8?
- How does it compile JavaScript to machine code?
- Why is it important for Node.js?

**Example:**
```javascript
function add(a, b) {
  return a + b;
}

// V8 optimizes repeated calls
for (let i = 0; i < 1000000; i++) {
  add(i, i + 1);
}
```

---

### 2. **libuv** (200-300 words)
- What is libuv?
- What is the event loop and its phases?
- What is the thread pool?

**Example:**
```javascript
const fs = require('fs');

// libuv handles this asynchronously
fs.readFile('file.txt', (err, data) => {
  console.log('File loaded');
});

console.log('Reading file...'); // Runs first
```

---

### 3. **Node.js Bridging** (200-300 words)
- How do V8 and libuv work together?
- How does a callback flow through the system?
- Simple flow diagram

**Flow:**
```
JavaScript Code
    ↓
Node.js Bindings
    ↓
V8 (Compile) ←→ libuv (Async I/O)
    ↓
Operating System
```

---

### 4. **global vs globalThis** (200-300 words)

| Feature | `global` | `globalThis` |
|---------|----------|--------------|
| Where | Node.js only | All JS environments |
| Standard | Node.js specific | ES2020 standard |
| Recommended | ❌ No | ✅ Yes |

**Example:**
```javascript
// Node.js
console.log(global === globalThis); // true

// ✅ Use this (works everywhere)
globalThis.myVar = 'value';

// ❌ Avoid this (Node.js only)
global.myVar = 'value';
```

---

## 📋 Requirements

- **Length**: 800-1000 words total
- **Format**: Markdown, Word, or PDF
- **Code Examples**: At least 3-4 examples
- **Diagram**: At least 1 simple diagram
- **Clarity**: Easy to understand, well-organized

---

## ✅ Checklist

- [ ] V8 Engine explained
- [ ] libuv explained
- [ ] Node.js Bridging explained
- [ ] global vs globalThis difference clear
- [ ] Code examples included
- [ ] Diagram included
- [ ] Grammar checked
- [ ] 800-1000 words

---

## 📚 Resources

- [Node.js Official Docs](https://nodejs.org/)
- [V8 Engine](https://v8.dev/)
- [libuv](http://docs.libuv.org/)

---

**Due Date**: [Your Date]  
**Submit**: [Your Method]