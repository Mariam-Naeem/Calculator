function EnterNumber (num) {
    let all = document.getElementById('Answer').value += num
  }
  function EnterEqual () {
    let x = document.getElementById('Answer').value
    let y = eval(x)
    document.getElementById('Answer').value = y
  }
  function EnterOperator (operator) {
    document.getElementById('Answer').value += operator
  }
  function EnterClear () {
    document.getElementById('Answer').value = ''
  }
  function erase () {
    let length = document.getElementById('Answer').value.length
  
    document.getElementById('Answer').value = document.getElementById('Answer').value.substring(0, length - 1)
  }