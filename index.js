const students = [
    {
      id: 100,
      name: "Nurmuhammad",
      lastName: "Mahmudov",
      mark: 140.5,
      markedDate: new Date("2021-12-05").toISOString()
    },
    {
      id: 101,
      name: "Asadbek",
      lastName: "Asadov",
      mark: 146,
      markedDate: new Date("2021-12-06").toISOString()
    },
    {
      id: 102,
      name: "Ahmadjon",
      lastName: "Hasanjanov",
      mark: 75,
      markedDate: new Date("2021-12-01").toISOString()
    },
    {
      id: 103,
      name: "G'anivoy",
      lastName: "Teshayev",
      mark: 40,
      markedDate: new Date("2021-12-05").toISOString()
    },
    {
      id: 104,
      name: "Kamronbek",
      lastName: "Zoirov",
      mark: 150,
      markedDate: new Date("2022-03-29").toISOString()
    }
  ]

  

//   const tableFragment = document.createDocumentFragment()  
// function render (param1){
//   param1.forEach(function(item){
//       const elTr = myEl("tr")
//       const elId = myEl("td",'','', item.id)
//       const elName = myEl("td", '','', item.name + ' ' + item.lastName)
//       const elMarkDate = myEl("td",'', '', item.markedDate)
//       const elMark = myEl("td", '', '', item.mark)
//       const elStatus = myEl("td", 'class', 'lists__table-body-status', "pass")
//       if(item.mark < 50){
//         elStatus.textContent = "fail"
//         elStatus.style.color = "#FF3D00"
//       }
  
//       const elTdEdit = myEl("td")
//       const elEditImg = myEl("img", "src", "img/edit.svg")
//       elTdEdit.appendChild(elEditImg)
  
//       const elTdDel = myEl("td")
//       const elDelImg = myEl("img", "src", "img/delete.svg")
//       elTdDel.appendChild(elDelImg)
  
//       tableFragment.appendChild(elTr)
//       elTr.appendChild(elId)
//       elTr.appendChild(elName)
//       elTr.appendChild(elMarkDate)
//       elTr.appendChild(elMark)
//       elTr.appendChild(elStatus)
//       elTr.appendChild(elTdEdit)
//       elTr.appendChild(elTdDel)
//     })
// }

// elTableBody.appendChild(tableFragment)

// const elSelect = document.querySelector(".filter__form-sort-selector")

// students.forEach(function(item){
  //   const elOptions = myEl("option", 'value', item.name, item.name)
  //   elSelect.appendChild(elOptions)
  // })
  
  // render(students)
  const elTableBody = document.querySelector(".lists__table-body")
  const elTemplate = document.querySelector(".template").content
  
  
  function render (param1){
    const elFragment = document.createDocumentFragment()
    param1.forEach(function(item){
      const clonedTr = elTemplate.cloneNode(true)
      clonedTr.querySelector(".id").textContent = item.id
      clonedTr.querySelector(".name").textContent = item.name + ' ' + item.lastName
      clonedTr.querySelector(".markedDate").textContent = item.markedDate
      clonedTr.querySelector(".mark").textContent = item.mark
      const status = clonedTr.querySelector(".status")
      if(item.mark >= 50){
        status.textContent = "pass"
      }else{
        status.textContent = "fail"
        status.style.color = "red"
      }
      clonedTr.querySelector(".edit").src = "img/edit.svg"
      clonedTr.querySelector(".del").src = "img/delete.svg"
      const btnEdit = clonedTr.querySelector(".button-edit")
      btnEdit.id = item.id 
      elFragment.appendChild(clonedTr)
    })
    elTableBody.appendChild(elFragment)
  }
  
  console.log()
  function myEl(tagName, attributeValue, className, textContent){
      const newEl = document.createElement(tagName || "div")
      if(attributeValue && className){
        newEl.setAttribute(attributeValue, className)
      }
      if(textContent){
        newEl.textContent = textContent
      }
      
      return newEl;
    }  
  
  const elAddLink = document.querySelector(".main__content-link")
  
  const elModal = document.querySelector(".modal")
  const elModalHeaderBtn = document.querySelector(".modal__header-button")
  const elModalBtn = document.querySelector(".js--modal-btn")
  
elAddLink.addEventListener("click", function(){
  elModal.classList.toggle("js--open")
})
elModalHeaderBtn.addEventListener("click", function(){
  elModal.classList.toggle("js--open")
})
elModal.addEventListener("click", function(e){
  if(!e.target.closest(".modal__content"))
  elModal.classList.toggle("js--open")
})



// FILTER
const filterForm = document.querySelector(".filter__form")
const elInputSearch = document.querySelector(".js--input-name")
const elInputFrom = document.querySelector(".js--input-from")
const elInputTo = document.querySelector(".js--input-to")


filterForm.addEventListener("change", function(){
  elTableBody.textContent = ""
  const filterStudent = students.filter(function(item){
    if(item.name.includes(elInputSearch.value)){
      return item
    }
  })
  render(filterStudent)
})

filterForm.addEventListener("submit", function(){
  elTableBody.textContent = ""
  const filterStudent = students.filter(function(item){
    if(item.mark >= elInputFrom.value && item.mark <= elInputTo.value){
      return item
    }
  })
  render(filterStudent)
})
render(students)

// ADD STUDENT
const elModalForm = document.querySelector(".modal__form")
const elModalInputName = document.querySelector(".modal__form-input-name")
const elModalInputSurname = document.querySelector(".modal__form-input-surname")
const elModalInputMark = document.querySelector(".modal__form-input-mark")


elModalForm.addEventListener("submit", function(){
  const currentDate = new Date().toISOString()
  const clonedTr = elTemplate.cloneNode(true)
  let id = students[4].id++
  clonedTr.querySelector(".id").textContent = ++id

  clonedTr.querySelector(".name").textContent = elModalInputName.value + ' ' + elModalInputSurname.value

  clonedTr.querySelector(".markedDate").textContent = currentDate

  clonedTr.querySelector(".mark").textContent = elModalInputMark.value

  const status = clonedTr.querySelector(".status")

  if(elModalInputMark.value >= 50){
    status.textContent = "pass"
  }else{
    status.textContent = "fail"
    status.style.color = "red"
  }
  clonedTr.querySelector(".button-edit").id = id
  clonedTr.querySelector(".edit").src = "img/edit.svg"

  clonedTr.querySelector(".del").src = "img/delete.svg"  

  elTableBody.appendChild(clonedTr)
})
elModalForm.addEventListener("submit", function(){
  elModal.classList.toggle("js--open")
})

// EDIT

const elBtnEdit = elTableBody.querySelectorAll(".button-edit")

elBtnEdit.forEach((item) => {
  item.addEventListener("click", function(){
    elModal.classList.toggle("js--open")
    elModal.querySelector(".modal__header-parag").textContent = "Edit"
    elModalBtn.textContent = "Edit"

  })
})


console.log(elBtnEdit)
console.log(elTableBody)