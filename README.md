#  Answer the following questions clearly: <br>
What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll? <br>
How do you create and insert a new element into the DOM? <br>
What is Event Bubbling and how does it work? <br>  
What is Event Delegation in JavaScript? Why is it useful? <br>
What is the difference between preventDefault() and stopPropagation() methods? <br>

প্রশ্ন ও উত্তর <br>
==========

---

## 1. `getElementById`, `getElementsByClassName`, এবং `querySelector` / `querySelectorAll` এর পার্থক্য

- **`getElementById`**  
  - একটি নির্দিষ্ট `id` দ্বারা **একটি element** নির্বাচন করে।  
  - **একটি DOM element** রিটার্ন করে।  
  ```javascript
  const box = document.getElementById("myBox");
getElementsByClassName

একটি নির্দিষ্ট class থাকা সব element নির্বাচন করে।

HTMLCollection রিটার্ন করে।

javascript
Copy code
const items = document.getElementsByClassName("item");
querySelector / querySelectorAll

querySelector CSS selector অনুযায়ী প্রথম element নির্বাচন করে।

querySelectorAll CSS selector অনুযায়ী সব element নির্বাচন করে।

NodeList রিটার্ন করে যা forEach দিয়ে iterate করা যায়।

javascript
Copy code
const firstItem = document.querySelector(".item");
const allItems = document.querySelectorAll(".item");
মূল পার্থক্য:
getElementById শুধুমাত্র ID এর জন্য, getElementsByClassName class এর জন্য এবং live collection দেয়,
querySelector / querySelectorAll CSS selector ব্যবহার করে এবং আরও flexible।

## 2. কিভাবে DOM এ নতুন element তৈরি এবং insert করা যায়?
ধাপগুলো:

Element তৈরি করা – document.createElement দিয়ে।

Content বা attribute সেট করা (ঐচ্ছিক)।

DOM এ insert করা – appendChild, prepend, before, বা after দিয়ে।

javascript
Copy code
const newDiv = document.createElement("div"); // ধাপ 1
newDiv.textContent = "Hello World";          // ধাপ 2
newDiv.classList.add("my-class");

const container = document.getElementById("container");
container.appendChild(newDiv);               // ধাপ 3

##3. Event Bubbling কি এবং কিভাবে কাজ করে?
Event Bubbling হলো যখন কোনো event target element থেকে শুরু করে parent element পর্যন্ত উপরে উঠে যায়।

উদাহরণ: একটি button ক্লিক করলে প্রথমে button এর click, পরে parent div এর click trigger হয়।

javascript
Copy code
document.getElementById("child").addEventListener("click", () => {
  console.log("Child clicked");
});

document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
});
Child ক্লিক করলে log হবে:

nginx
Copy code
Child clicked
Parent clicked

##4. Event Delegation কি? এটি কেন useful?
Event Delegation হলো একটি parent element এ listener বসানো যাতে তার child element এর event handle করা যায়।

Child element এ আলাদা listener বসানোর প্রয়োজন হয় না।

কেন useful?

অনেক child element এ listener না বসিয়ে performance better হয়।

DOM এ dynamically add হওয়া element এর event handle করা যায়।

javascript
Copy code
const list = document.getElementById("list");

list.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    console.log("List item clicked:", event.target.textContent);
  }
});

##5. preventDefault() এবং stopPropagation() এর পার্থক্য
preventDefault()

element এর default action বন্ধ করে।

উদাহরণ: link navigate হওয়া বা form submit বন্ধ করা।

javascript
Copy code
document.querySelector("a").addEventListener("click", (e) => {
  e.preventDefault(); // link navigate হবে না
});
stopPropagation()

event এর bubbling বা capturing বন্ধ করে।

parent element এর listener trigger হবে না।

javascript
Copy code
child.addEventListener("click", (e) => {
  e.stopPropagation(); // parent click trigger হবে না
});
মূল পার্থক্য:
preventDefault browser এর default behavior বন্ধ করে,
stopPropagation event flow বন্ধ করে।
