import { Controller } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js"

/*
  Ce controller Stimulus gere la selection d'un coach.
  Il y a deux facons de selectionner un coach :
    1. Cliquer sur une carte dans le carousel
    2. Taper un email dans le champ de recherche

  Les deux modes ecrivent dans le MEME champ hidden "coach_email".
  C'est ce champ qui serait envoye au serveur dans un vrai formulaire.

  CONCEPTS STIMULUS UTILISES :
  - targets  : references vers des elements du DOM (comme des querySelector)
  - values   : donnees passees via data attributes (comme des props)
  - actions  : liaison evenement -> methode (comme des addEventListener)
*/
export default class extends Controller {

  // --- TARGETS ---
  // Declares les elements du DOM auxquels le controller a besoin d'acceder.
  // Pour chaque target "foo", Stimulus cree automatiquement :
  //   - this.fooTarget        -> l'element DOM
  //   - this.hasFooTarget     -> boolean (existe-t-il ?)
  //   - this.fooTargets       -> tableau de tous les elements avec ce target
  //
  // Dans le HTML, on les declare avec : data-select-coach-target="foo"
  static targets = [
    "emailInput",      // le champ de recherche visible
    "emailHidden",     // le champ hidden (valeur envoyee au serveur)
    "messageWrapper",  // zone d'affichage des messages
    "debugDisplay",    // zone de debug (pour l'entrainement)
  ]

  // --- VALUES ---
  // Donnees passees depuis le HTML via data attributes.
  // Pour une value "foo" de type String, Stimulus lit :
  //   data-select-coach-foo-value="..."
  // et cree automatiquement : this.fooValue
  static values = {
    noSelectionMessage: String,  // message si aucun coach selectionne
  }

  // ================================================================
  // METHODE 1 : Selection depuis le carousel
  // ================================================================
  // Declenchee par : data-action="click->select-coach#selectFromCarousel"
  // L'email vient de : data-coach-email="..." sur le div clique
  //
  // event.currentTarget = l'element qui a le data-action (le card-wrapper)
  // event.target        = l'element reellement clique (peut etre un enfant)
  selectFromCarousel(event) {
    // Recupere l'email depuis le data attribute de la carte
    const coachEmail = event.currentTarget.dataset.coachEmail

    // Trouve la carte visuelle et le bouton radio
    const card = event.currentTarget.querySelector(".coach-card")
    const check = card.querySelector(".coach-card__button")

    // Deselectionne toutes les cartes
    this.unselectAllCards()

    // Selectionne visuellement cette carte
    card.classList.add("coach-card--selected")
    check.classList.add("coach-card__button--checked")

    // Ecrit l'email dans le hidden (meme champ que la recherche)
    this.emailInputTarget.value = ""
    this.emailHiddenTarget.value = coachEmail

    // Met a jour le debug
    this.updateDebug()
  }

  // ================================================================
  // METHODE 2 : Saisie dans le champ de recherche
  // ================================================================
  // Declenchee par : data-action="input->select-coach#onEmailChange"
  // A chaque frappe clavier, on :
  //   1. Deselectionne le carousel (visuellement)
  //   2. Met a jour le hidden avec la valeur tapee
  onEmailChange() {
    if (this.emailInputTarget.value.length > 0) {
      this.unselectAllCards()
    }

    // La recherche ecrit dans le MEME hidden que le carousel
    this.emailHiddenTarget.value = this.emailInputTarget.value

    this.updateDebug()
  }

  // ================================================================
  // VALIDATION
  // ================================================================
  validate() {
    // Verifie simplement que le hidden a une valeur
    if (this.emailHiddenTarget.value === "") {
      this.showMessage(this.noSelectionMessageValue, "error")
      return
    }

    this.showMessage(
      `Coach selectionne : ${this.emailHiddenTarget.value}`,
      "success"
    )
  }

  // ================================================================
  // METHODES PRIVEES (convention : pas de data-action qui les appelle)
  // ================================================================

  unselectAllCards() {
    // Cherche dans tout le scope du controller (this.element)
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

  updateDebug() {
    if (!this.hasDebugDisplayTarget) return
    this.debugDisplayTarget.textContent =
      this.emailHiddenTarget.value || "vide"
  }
}
