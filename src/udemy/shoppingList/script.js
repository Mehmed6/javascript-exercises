let ulItem = document.querySelector(".shopping-list")
let inputItem = document.querySelector(".form-control")
let filterButtons = document.querySelectorAll(".filter-buttons button");
let clearBtn = document.querySelector(".clear")

const selectedButton = () => {
    for (let btn of filterButtons) {
        btn.addEventListener("click", e=> {
            for (let b of filterButtons)
                b.className = "btn btn-secondary"

            e.target.classList.add("btn-primary")
            e.target.classList.remove("btn-secondary")
            filterItems(e.target.getAttribute("item-filter"))
        })
    }
}
document.addEventListener("DOMContentLoaded", () => {
    selectedButton()
    loadFromLS()
    updateState()

    clearBtn.addEventListener("click", clear)
})

const filterItems = filterType => {
    const li_items = ulItem.querySelectorAll("li")
    for (let li of li_items) {
        li.classList.remove("d-flex")
        li.classList.remove("d-none")
        const completed = li.hasAttribute("item-completed")

        if (filterType === "completed")
            li.classList.add(completed ? "d-flex" : "d-none")
        else if (filterType === "incomplete")
            li.classList.add(completed ? "d-none" : "d-flex")
        else
            li.classList.add("d-flex")
    }

}

const clear = () => {
    ulItem.innerHTML = "";
    localStorage.removeItem("itemsToLS")
    updateState()
}

const updateState = () => {
    const isEmpty = ulItem.querySelectorAll("li").length === 0;
    const alert = document.querySelector(".alert")
    alert.classList.toggle("d-none", !isEmpty)
    clearBtn.classList.toggle("d-none", isEmpty)
    document.querySelector(".filter-buttons").classList.toggle("d-none", isEmpty)
}

const updateFilteredItems = () => {
    const activeFilter = document.querySelector(".btn-primary[item-filter]")
    filterItems(activeFilter.getAttribute("item-filter"))
}

const createItem = value => {
    let li = document.createElement("li")
    let input = document.createElement("input")
    let div = document.createElement("div")
    let deleteIcon = document.createElement("i")

    li.className += " border rounded p-3 mb-1"
    input.type = "checkbox"
    input.className += " form-check-input"
    input.addEventListener("change", e => {
        e.target.parentElement.toggleAttribute("item-completed", e.target.checked)
        updateFilteredItems()
        saveToLS()
    })
    div.textContent = value
    div.className += " item-name"
    div.addEventListener("click", e => {
        const li = e.target.parentElement
        if (!li.hasAttribute("item-completed"))
            e.target.contentEditable = true

    })
    div.addEventListener("blur", e => {
        e.target.contentEditable = false
        saveToLS()

    })
    div.addEventListener("keydown", e => {
        if (e.key === "Enter") {
            e.preventDefault()
            e.target.contentEditable = false
        }
    })
    deleteIcon.className += " fs-3 bi bi-x text-danger delete-icon"
    deleteIcon.addEventListener("click", e => {
        const li = e.target.parentElement
        li.remove()
        saveToLS()
        updateState()
    })
    li.append(input)
    li.appendChild(div)
    li.appendChild(deleteIcon)

    return li
}

const addItem = (e) => {
    e.preventDefault()

    if (inputItem.value.trim() === "") {
        alert("Item cannot be empty");
        return
    }

    let li = createItem(inputItem.value);
    ulItem.appendChild(li);

    inputItem.value = "";
    saveToLS()
    updateState()

}

const saveToLS = () => {
    let liItems = ulItem.querySelectorAll("li")
    let items = []

    for (let li of liItems) {
        let name = li.querySelector(".item-name").textContent;
        let completed = li.hasAttribute("item-completed");

        items.push({name, completed})
    }

    localStorage.setItem("itemsToLS", JSON.stringify(items));
}

const loadFromLS = () => {
    const items = JSON.parse(localStorage.getItem("itemsToLS")) || [];

    for (let item of items) {
        let li = createItem(item.name);

        if (item.completed) {
            li.setAttribute("item-completed", "");
            li.querySelector("input").checked = true;
        }

        ulItem.appendChild(li);
    }
    updateFilteredItems();
}

let form = document.querySelector(".shopping-form")
form.addEventListener("submit", addItem)


/*
<ul class="shopping-list list-unstyled">
    <li class="border rounded p-3 mb-1">
        <input type="checkbox" class="form-check-input">
            <div class="item-name">Item</div>
            <i class="fs-3 bi bi-x text-danger delete-icon"></i>
    </li>*/
