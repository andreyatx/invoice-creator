const orders = [];

const services = [
  {
    name: "Wash Car",
    price: 10,
  },
  {
    name: "Mow Lawn",
    price: 20,
  },
  {
    name: "Pull Weeds",
    price: 30,
  },
];

const tasks = document.querySelectorAll(".service-btn");
console.log(tasks[0].textContent);

Array.from(tasks).forEach((element, i) => {
  element.innerHTML = `${services[i].name}: $${services[i].price}`;
});

Array.from(tasks).forEach(function (element) {
  element.addEventListener("click", myFunction);
});

const taskContainer = document.querySelector("#task-container");

for (let i = 0; i < 3; i++) {
  let tempString = `
    <div class="task">
        <p class="task-name">
            ${services[i].name}
        </p>
        <p class="task-price">
            <span class="dollar-sign">
            $
            </span>
            ${services[i].price}
        </p>
    </div>`;

  taskContainer.insertAdjacentHTML("beforeend", tempString);
}

function myFunction() {
  console.log(123);
}
// const secondTask = document.querySelector(".secondTask");
// const thirdTask = document.querySelector(".thirdTask");

// const taskContainer = document.querySelector(".task-container");

// document
//   .querySelector("#task1")
//   .addEventListener("click", () => addTask("task1"), { once: true });

// document
//   .querySelector("#task2")
//   .addEventListener("click", () => addTask("task2"), { once: true });

// document
//   .querySelector("#task3")
//   .addEventListener("click", () => addTask("task3"), { once: true });

// function addTask(task) {
//   switch (task) {
//     case "task1":
//       const taskOneTemlate = `
//       <div class="task" id="task1div">
//         <p class="task-name" class="task-name-1">${services.washCar.name}</p>
//         <p class="remove" class="remove-1">remove</p>
//       </div>
//       <p class="price"><span class="dollar">$</span>${services.washCar.price}</p> `;
//       requests.push(taskOneTemlate);
//       break;
//     case "task2":
//       const taskTwoTemlate = `
//       <div class="task" id="task2div">
//         <p class="task-name" class="task-name-2">${services.mowLawn.name}</p>
//         <p class="remove" class="remove-2">remove</p>
//       </div>
//       <p class="price"><span class="dollar">$</span>${services.mowLawn.price}</p> `;
//       requests.push(taskTwoTemlate);
//       break;
//     case "task3":
//       const taskThreeTemlate = `
//       <div class="task" id="task3div">
//         <p class="task-name" class="task-name-3">${services.pullWeeds.name}</p>
//         <p class="remove" class="remove-3">remove</p>
//       </div>
//       <p class="price"><span class="dollar">$</span>${services.pullWeeds.price}</p> `;
//       requests.push(taskTwoTemlate);
//       break;
//   }
//   renderRequest();
// }

// function removeTask(task) {
//   switch (task) {
//     case "task1":
//       firstTask.innerHTML = "";
//       break;
//     case "task2":
//       secondTask.innerHTML = "";
//       break;
//     case "task3":
//       thirdTask.innerHTML = "";
//       break;
//   }
// }

// function renderRequest() {
//   requests.map((item) => {
//     taskContainer.innerHTML = item;
//   });
// }

// // const remove1 = document.querySelector(".remove-1");
// // console.log(remove1);
// // remove1.addEventListener("click", () => console.log("aasas"));
