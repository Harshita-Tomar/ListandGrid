// FETCHING JSON DATA
const employee = fetch('data/employee.json')
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    myFunction(data)
  })

// Calling myFunction
var myFunction = function (employee) {
  const len = employee.length
  // List Items
  const list = document.querySelector('.list-holder')
  const table = document.createElement('table')
  const rowhead = document.createElement('tr')
  list.appendChild(table)
  table.appendChild(rowhead)
  // Looping through JSON Data
  Array.from(employee).forEach((element, i) => {
    // Card Creation
    const cardHolder = document.querySelector('.card-holder')
    const card = document.createElement('div')
    const box = document.createElement('div')
    const img = document.createElement('img')
    const info = document.createElement('div')
    const icon = document.createElement('ion-icon')
    const input7 = document.createElement('button')

    // Adding Classes & Ids & Events
    card.classList.add('card')
    card.id = 'crd' + i
    icon.classList.add('cross')
    icon.id = 'ion' + i
    icon.name = 'close-circle'
    icon.addEventListener('click', deleteItem)
    img.classList.add('card-img')
    box.classList.add('inner')
    info.classList.add('info')

    // Appending Elements
    cardHolder.appendChild(card)
    card.appendChild(icon)
    card.appendChild(box)
    box.appendChild(img)
    box.appendChild(info)

    // Inserting Data
    const arr = ['Name', 'ID', 'Gender', 'Skills', 'Project', 'HCM']
    for (let j = 0; j < arr.length; j++) {
      const div = document.createElement('div')
      const label = document.createElement('label')
      const input = document.createElement('input')
      info.appendChild(div)
      div.appendChild(label)
      div.appendChild(input)
      input.id = 'in' + j + i
      label.innerHTML = arr[j] + ': '
    }
    info.appendChild(input7)
    input7.innerHTML = 'EDIT'
    input7.id = 'btn'
    const input1 = document.getElementById('in0' + i)
    const input2 = document.getElementById('in1' + i)
    const input3 = document.getElementById('in2' + i)
    const input4 = document.getElementById('in3' + i)
    const input5 = document.getElementById('in4' + i)
    const input6 = document.getElementById('in5' + i)
    input1.value = employee[i].Name
    input2.value = employee[i].ID
    input3.value = employee[i].Gender
    input4.value = ''
    for (let x in employee[i].Skills) {
      input4.value += employee[i].Skills[x] + ' '
    }
    input5.value = employee[i].Project
    input6.value = employee[i].HCM
    input7.addEventListener('click', saveChange1)
    input4.addEventListener('change', textChange1)

    input1.disabled = true
    input2.disabled = true
    input3.disabled = true
    input4.disabled = true
    input5.disabled = true
    input6.disabled = true
    // Imge according to Gender
    if (employee[i].Gender == 'Male') {
      img.src = 'imgs/male.jpg'
    } else {
      img.src = 'imgs/female.jpg'
    }

    // LIST CREATION
    const row = document.createElement('tr')
    const icon1 = document.createElement('ion-icon')
    const icon2 = document.createElement('ion-icon')
    row.id = 'tr' + i
    icon1.name = 'create'
    icon1.id = 'edt' + i
    icon1.classList.add('tbl-icon1')
    icon1.addEventListener('click', saveChange2)
    icon2.name = 'close-circle'
    icon2.id = 'close' + i
    icon2.classList.add('tbl-icon2')
    icon2.addEventListener('click', deleteItem)
    var arr1 = ['Name', 'ID', 'Gender', 'Skills', 'Project', 'HCM', '']
    table.appendChild(row)

    // Adding table header
    if (i == 0) {
      for (let j = 0; j < arr1.length; j++) {
        const th = document.createElement('th')
        rowhead.appendChild(th)
        th.innerText = arr1[j]
      }
    }

    for (let j = 0; j < arr1.length; j++) {
      const td = document.createElement('td')
      row.appendChild(td)
      td.id = 'td' + j + i
      if (j == 3) {
        const skill = document.createElement('input')
        td.appendChild(skill)
        skill.id = 'skill' + i
      }
    }
    const td1 = document.getElementById('td0' + i)
    const td2 = document.getElementById('td1' + i)
    const td3 = document.getElementById('td2' + i)
    const td4 = document.getElementById('skill' + i)
    td4.addEventListener('change', textChange2)
    const td5 = document.getElementById('td4' + i)
    const td6 = document.getElementById('td5' + i)
    const td7 = document.getElementById('td6' + i)
    td1.innerHTML = employee[i].Name
    td2.innerHTML = employee[i].ID
    td3.innerHTML = employee[i].Gender
    td4.value = ''
    for (let x in employee[i].Skills) {
      td4.value += employee[i].Skills[x] + ' '
    }
    td4.disabled = true
    td5.innerHTML = employee[i].Project
    td6.innerHTML = employee[i].HCM
    td7.appendChild(icon1)
    td7.appendChild(icon2)

    // EVENT LISTENER FUNCTION
    function deleteItem() {
      document.getElementById('crd' + i).style.display = 'none'
      document.getElementById('tr' + i).style.display = 'none'
    }
    var f1 = true
    function saveChange1() {
      if (f1) {
        input4.disabled = false
        input4.classList.add('edit')
        input7.innerHTML = 'SAVE'
        f1 = false
      } else {
        input4.disabled = true
        input4.classList.remove('edit')
        input7.innerHTML = 'EDIT'
        f1 = true
      }
    }
    var f2 = true
    function saveChange2() {
      if (f2) {
        document.getElementById('edt' + i).name = 'save'
        document.getElementById('skill' + i).disabled = false
        document.getElementById('skill' + i).classList.add('edit')
        f2 = false
      } else {
        document.getElementById('edt' + i).name = 'create'
        document.getElementById('skill' + i).disabled = true
        document.getElementById('skill' + i).classList.remove('edit')
        f2 = true
      }
    }
    function textChange1() {
      var val = input4.value
      document.getElementById('skill' + i).value = val
    }
    function textChange2() {
      var val = document.getElementById('skill' + i).value
      input4.value = val
    }
  })
}

// Toggle Card & List
function showCard() {
  var para = document.getElementById('content')
  para.classList.toggle('show')
}
function showList() {
  var para = document.getElementById('list')
  para.classList.toggle('show')
}
