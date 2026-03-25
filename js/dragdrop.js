/* =============================================
   DRAG & DROP — dragdrop.js
   Purpose:
   - Provide drag-and-drop activity for code ordering
   - Validate user arrangement against correct order
   - Display results with feedback and retry option
   ============================================= */

let draggedItem = null; // Stores the item currently being dragged

// Activity definitions: each concept has a correct order and a shuffled order
let activities = {
    class: {
        correct: [
            "class Car {",
            "String brand;",
            "void drive(){",
            'System.out.println("Driving");',
            "}",
            "}"
        ],
        shuffled: [
            "String brand;",
            "class Car {",
            "}",
            'System.out.println("Driving");',
            "void drive(){",
            "}"
        ]
    },

    object: {
        correct: [
            "Car myCar = new Car();",
            'myCar.brand = "Toyota";',
            "myCar.drive();"
        ],
        shuffled: [
            "myCar.drive();",
            "Car myCar = new Car();",
            'myCar.brand = "Toyota";'
        ]
    },

    inheritance: {
        correct: [
            "class Animal {",
            "void eat(){ }",
            "}",
            "class Dog extends Animal {",
            "void bark(){ }",
            "}"
        ],
        shuffled: [
            "class Dog extends Animal {",
            "}",
            "void bark(){ }",
            "class Animal {",
            "void eat(){ }",
            "}"
        ]
    },

    encapsulation: {
        correct: [
            "class Person {",
            "private int age;",
            "public void setAge(int a){ age = a; }",
            "public int getAge(){ return age; }",
            "}"
        ],
        shuffled: [
            "public int getAge(){ return age; }",
            "class Person {",
            "}",
            "private int age;",
            "public void setAge(int a){ age = a; }"
        ]
    }
};

/**
 * Loads the selected activity into the container.
 * - Clears previous content
 * - Displays shuffled code lines
 * - Resets result card and retry button
 */
function loadActivity() {
    let concept = document.getElementById("conceptSelect").value;
    let container = document.getElementById("code-container");
    container.innerHTML = "";

    // Populate container with shuffled lines
    activities[concept].shuffled.forEach(line => {
        let div = document.createElement("div");
        div.className = "list-group-item draggable";
        div.draggable = true;
        div.innerText = line;
        container.appendChild(div);
    });

    // Reset result card and retry button
    const resultCard = document.getElementById("result-card");
    if (resultCard) resultCard.style.display = "none";
    const existingRetry = document.getElementById("retryBtn");
    if (existingRetry) existingRetry.remove();
    document.getElementById("result").innerHTML = "";

    enableDrag();
}

/**
 * Enables drag-and-drop functionality for code lines.
 * - Tracks dragged item
 * - Allows swapping of text between items
 */
function enableDrag() {
    let items = document.querySelectorAll(".draggable");
    items.forEach(item => {
        item.addEventListener("dragstart", function () {
            draggedItem = item;
        });
        item.addEventListener("dragover", function (e) {
            e.preventDefault(); // Allow drop
        });
        item.addEventListener("drop", function () {
            // Swap text between dragged item and target
            let temp = this.innerHTML;
            this.innerHTML = draggedItem.innerHTML;
            draggedItem.innerHTML = temp;
        });
    });
}

/**
 * Checks if the user’s arrangement matches the correct order.
 * - Compares user order with correct order
 * - Displays result card with feedback
 * - Adds retry button if needed
 */
function checkOrder() {
    let concept = document.getElementById("conceptSelect").value;
    let correct = activities[concept].correct;
    let lines = document.querySelectorAll("#code-container .list-group-item");
    let userOrder = [];
    lines.forEach(line => userOrder.push(line.innerText));

    const isCorrect = JSON.stringify(userOrder) === JSON.stringify(correct);

    // Show styled result card
    const resultCard = document.getElementById("result-card");
    const resultTitle = document.getElementById("result-title");
    const resultMsg = document.getElementById("result-msg");

    if (resultCard && resultTitle && resultMsg) {
        resultTitle.textContent = isCorrect ? "Correct!" : "Not quite!";
        resultMsg.textContent = isCorrect
            ? "Great job arranging the code blocks."
            : "The order isn't right yet. Try rearranging the blocks.";
        resultCard.style.display = "block";
        resultCard.className = "result-card " + (isCorrect ? "result-correct" : "result-wrong");
        resultCard.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    // Add Try Again button if not already present
    if (!document.getElementById("retryBtn")) {
        const retryBtn = document.createElement("button");
        retryBtn.id = "retryBtn";
        retryBtn.className = "quiz-retry-btn";
        retryBtn.innerText = "Try Again";
        retryBtn.onclick = () => {
            loadActivity();
            window.scrollTo({ top: 0, behavior: "smooth" });
        };
        resultCard.appendChild(retryBtn);
    }
}

// Initialize with default activity on page load
loadActivity();
