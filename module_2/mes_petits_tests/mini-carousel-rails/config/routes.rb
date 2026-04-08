Rails.application.routes.draw do
  # Page principale : affiche le formulaire de changement de coach
  # Le coach actuel est passé via le parametre :current_coach_id
  # Ex: http://localhost:3000/?current_coach_id=1
  root "coachings#show"

  # Action pour changer de coach (recoit coach_email en POST)
  post "change_coach", to: "coachings#change_coach"
end
