
export const selectPlayerOne = ({ sex }: { sex: string }) => {
  let avatars = document.querySelectorAll(".player-one") as NodeListOf<Element>
  avatars.forEach((button) => button.classList.remove("character-container-active"))

  let choosedAvatar = document.getElementById(sex) as HTMLElement
  choosedAvatar.classList.add("character-container-active")
}
