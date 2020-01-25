//Check if the elment has been created by the current user
export default function ownership(element,user) {
  return  element.user.id === user.id
}