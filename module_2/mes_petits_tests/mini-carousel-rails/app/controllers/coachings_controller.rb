# Ce controller reproduit le pattern de Simundia :
# - UsersController#action_required  ->  CoachingsController#show
# - RelationshipsController#change_coach  ->  CoachingsController#change_coach

class CoachingsController < ApplicationController
  def show
    # Simule le coach actuel (comme @relationship.expert dans Simundia)
    @current_coach = Coach.find_by(id: params[:current_coach_id]) || Coach.first

    # Charge les coaches disponibles (comme load_change_coach_experts dans Simundia)
    @coaches = Coach.all

    # L'email du coach actuel, passe a la vue puis aux partials
    # C'est la meme logique que expert_email dans _change_coach_form
    @current_coach_email = @current_coach.email
  end

  def change_coach
    # Exactement comme RelationshipsController#change_coach dans Simundia :
    # on recoit UNIQUEMENT coach_email (que ce soit via carousel ou recherche)
    new_coach_email = params[:coach_email]
    new_coach = Coach.find_by(email: new_coach_email)

    if new_coach.nil?
      render json: { message: "Coach introuvable avec l'email : #{new_coach_email}" },
             status: :unprocessable_entity
    else
      render json: { message: "#{new_coach.name} (#{new_coach.email}) est le nouveau coach !" },
             status: :ok
    end
  end
end
