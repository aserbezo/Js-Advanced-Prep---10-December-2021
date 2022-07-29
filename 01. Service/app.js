window.addEventListener("load", solve);

function solve() {
  let sendButtonElement = document.querySelector('#right form button')
  sendButtonElement.addEventListener('click', sendInfo)
 
  let productTypeSelectElement = document.querySelector('#type-product')
  let descriptionTextAreaElememt = document.querySelector('#description')
  let clientNameInputElement = document.querySelector('#client-name')
  let clientPhoneInputElement = document.querySelector('#client-phone')
  ///
  let receiveOrdersSectionElement = document.querySelector('#received-orders')
  let completeOrdersSectionElement = document.querySelector('#completed-orders')
  ///

  let clearButtonElement = document.querySelector('#completed-orders button')
  clearButtonElement.addEventListener('click', clearOrders)

  function sendInfo(e){
    e.preventDefault()

    let productType = productTypeSelectElement.value
    let description = descriptionTextAreaElememt.value
    let clientName = clientNameInputElement.value
    let clientPhone = clientPhoneInputElement.value

    if(description == "" || clientName == "" || clientPhone == "" ){
      return
    }

    productTypeSelectElement.value = ""
    descriptionTextAreaElememt.value = ""
    clientNameInputElement.value = ""
    clientPhoneInputElement.value = ""

    let containerDivElement = document.createElement('div')
    containerDivElement.classList.add('container') 
    let h2Element = document.createElement('h2')
    h2Element.textContent = `Product type for repair: ${productType}`
    let h3Element = document.createElement('h3')
    h3Element.textContent = `Client information: ${clientName}, ${clientPhone}`
    let h4Element = document.createElement('h4')
    h4Element.textContent = `Description of the problem: ${description}`

    let buttonStart =document.createElement('button')
    buttonStart.classList.add('start-btn')
    buttonStart.textContent = `Start repair`

    let buttonFinish =document.createElement('button')
    buttonFinish.classList.add('finish-btn')
    buttonFinish.textContent = `Finish repair`
    
    buttonFinish.disabled = true

    buttonStart.addEventListener('click', startRepair)
    buttonFinish.addEventListener('click', finishRepair)

    containerDivElement.appendChild(h2Element)
    containerDivElement.appendChild(h3Element)
    containerDivElement.appendChild(h4Element)
    containerDivElement.appendChild(buttonStart)
    containerDivElement.appendChild(buttonFinish)

    receiveOrdersSectionElement.appendChild(containerDivElement)
  }

  function startRepair (e) {
    e.currentTarget.disabled = true
    e.currentTarget.parentNode.querySelector('.finish-btn').disabled = false


  }

  function finishRepair (e) {
    let containerDiv = e.currentTarget.parentNode
    e.currentTarget.remove()

    containerDiv.querySelector('.start-btn').remove()
    completeOrdersSectionElement.appendChild(containerDiv)

  }
  function clearOrders(e){
    let allContainers = Array.from(e.currentTarget.parentNode.querySelectorAll('.container'))
    for (const container of allContainers) {
        container.remove()
    } 
  }
}
