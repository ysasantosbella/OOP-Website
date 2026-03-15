let draggedItem = null;

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



function loadActivity() {

    let concept = document.getElementById("conceptSelect").value; // drop down menu for oop concepts selection

    let container = document.getElementById("code-container");

    container.innerHTML = ""; // removes old code lines when new concept is selected

    activities[concept].shuffled.forEach(line => { // for each line in the shuffled array of the selected concept, create a div and make it draggable

        let div = document.createElement("div");

        div.className = "list-group-item draggable";

        div.draggable = true;

        div.innerText = line;

        container.appendChild(div);

    });

    enableDrag();

}

function enableDrag() { // enables drag and drop functionality for the code lines

    let items = document.querySelectorAll(".draggable");

    items.forEach(item => {

        item.addEventListener("dragstart", function () {
            draggedItem = item;
        });

        item.addEventListener("dragover", function (e) {
            e.preventDefault();
        });

        item.addEventListener("drop", function () {

            let temp = this.innerHTML;
            this.innerHTML = draggedItem.innerHTML;
            draggedItem.innerHTML = temp;

        });

    });

}



function checkOrder() { // triggerred when user clicks "Check Answer" button, compares the current order of code lines with the correct order for the selected concept and displays result

    let concept = document.getElementById("conceptSelect").value;

    let correct = activities[concept].correct;

    let lines = document.querySelectorAll("#code-container .list-group-item");

    let userOrder = [];

    lines.forEach(line => {
        userOrder.push(line.innerText);
    });


    let result = document.getElementById("result");


    if (JSON.stringify(userOrder) === JSON.stringify(correct)) {

        result.innerHTML = "Correct!";
        result.style.color = "green";

    }
    else {

        result.innerHTML = "Incorrect order. Try again.";
        result.style.color = "red";

    }

}

loadActivity();