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
      lastName: "",
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

const elTableBody =document.querySelector(".lists__table-body")

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

students.forEach(function(item){
    const elTr = myEl("tr")
    const elId = myEl("td",'','', item.id)
    const elName = myEl("td", '','', item.name + ' ' + item.lastName)
    const elMarkDate = myEl("td",'', '', item.markedDate)
    const elMark = myEl("td", item.mark)
    const elStatus = myEl("td", '', '', "pass")

    const elTdEdit = myEl("td")
    const elEditImg = myEl("img", "src", "img/edit.svg")
    elTdEdit.appendChild(elEditImg)

    const elTdDel = myEl("td")
    const elDelImg = myEl("img", "src", "img/delete.svg")
    elTdDel.appendChild(elDelImg)

    elTableBody.appendChild(elTr)
    elTr.appendChild(elId)
    elTr.appendChild(elName)
    elTr.appendChild(elMarkDate)
    elTr.appendChild(elMark)
    elTr.appendChild(elStatus)
    elTr.appendChild(elTdEdit)
    elTr.appendChild(elTdDel)
})
