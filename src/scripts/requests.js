import { getRequests, deleteRequest } from "./dataAccess.js";

export const Requests = () => {
  const requests = getRequests() 
  // grab the local state of the requests data
  const listItems = (request) => {
      return `<li class="requestList">${request.description}
                  <button class="request__delete"
                          id="request--${request.id}">
                      Delete
                  </button>
              </li>`
            }

  let html = `<ul>
          ${requests.map(listItems).join("")
          }
      </ul>
  `

  return html
}
const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})