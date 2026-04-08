import { Controller } from "@hotwired/stimulus"

/*
  CONTROLLER STIMULUS : select-coach
  Equivalent de : app/frontend/controllers/change_expert_controller.js dans Simundia

  CE CONTROLLER GERE :
  1. La selection d'un coach via le carousel (clic sur une carte)
  2. La saisie d'un email dans le champ de recherche
  3. La validation et l'envoi du formulaire

  PRINCIPE CLE :
  Les deux modes ecrivent dans le MEME hidden field "coach_email".
  → Pas de conflit, pas besoin de detecter quel mode a ete utilise.
*/
export default class extends Controller {

  // TARGETS : references vers des elements du DOM
  // Dans le HTML : data-select-coach-target="emailInput"
  // Dans le JS  : this.emailInputTarget (element DOM)
  static targets = [
    "emailInput",      // champ de recherche visible
    "emailHidden",     // hidden field (valeur envoyee au serveur)
    "messageWrapper",  // zone d'affichage des messages
    "form",            // le formulaire
  ]

  // VALUES : donnees passees depuis le HTML
  // Dans le HTML : data-select-coach-no-selection-message-value="..."
  // Dans le JS  : this.noSelectionMessageValue
  static values = {
    noSelectionMessage: String,
  }

  // ================================================================
  // Clic sur une carte du carousel
  // ================================================================
  // Declenchee par : data-action="click->select-coach#selectFromCarousel"
  //
  // event.currentTarget = le div avec le data-action (card-wrapper)
  // event.currentTarget.dataset.coachEmail = la valeur de data-coach-email
  selectFromCarousel(event) {
    const coachEmail = event.currentTarget.dataset.coachEmail

    // Trouve la carte et le bouton radio visuel
    const card = event.currentTarget.querySelector(".coach-card")
    const check = card.querySelector(".coach-card__button")

    // Deselectionne toutes les cartes
    this.unselectAllCards()

    // Selectionne visuellement cette carte
    card.classList.add("coach-card--selected")
    check.classList.add("coach-card__button--checked")

    // Vide le champ de recherche et ecrit dans le hidden
    this.emailInputTarget.value = ""
    this.emailHiddenTarget.value = coachEmail
  }

  // ================================================================
  // Saisie dans le champ de recherche
  // ================================================================
  // Declenchee par : data-action="input->select-coach#onEmailChange"
  onEmailChange() {
    // Deselectionne le carousel si on tape quelque chose
    if (this.emailInputTarget.value.length > 0) {
      this.unselectAllCards()
    }

    // Ecrit dans le MEME hidden que le carousel
    this.emailHiddenTarget.value = this.emailInputTarget.value
  }

  // ================================================================
  // Validation
  // ================================================================
  // Declenchee par : data-action="click->select-coach#validate"
  validate() {
    if (this.emailHiddenTarget.value === "") {
      this.showMessage(this.noSelectionMessageValue, "error")
      return
    }

    // Envoie le formulaire en AJAX (comme Rails UJS dans Simundia)
    const formData = new FormData(this.formTarget)

    fetch(this.formTarget.action, {
      method: "POST",
      body: formData,
      headers: { "Accept": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        const type = data.message.includes("introuvable") ? "error" : "success"
        this.showMessage(data.message, type)
      })
  }

  // ================================================================
  // Methodes privees
  // ================================================================

  unselectAllCards() {
    this.element
      .querySelectorAll(".coach-card--selected, .coach-card__button--checked")
      .forEach((el) => {
        el.classList.remove("coach-card--selected", "coach-card__button--checked")
      })
  }

  showMessage(message, type) {
    if (!this.hasMessageWrapperTarget) return
    this.messageWrapperTarget.textContent = message
    this.messageWrapperTarget.className = `message message--${type}`
  }
}
