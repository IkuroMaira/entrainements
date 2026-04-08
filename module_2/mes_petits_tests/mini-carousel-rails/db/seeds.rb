Coach.find_or_create_by!(email: "marie.dupont@coaching.fr") do |c|
  c.name = "Marie Dupont"
  c.specialty = "Leadership"
end

Coach.find_or_create_by!(email: "pierre.martin@coaching.fr") do |c|
  c.name = "Pierre Martin"
  c.specialty = "Communication"
end

Coach.find_or_create_by!(email: "sophie.bernard@coaching.fr") do |c|
  c.name = "Sophie Bernard"
  c.specialty = "Gestion du stress"
end

Coach.find_or_create_by!(email: "luc.moreau@coaching.fr") do |c|
  c.name = "Luc Moreau"
  c.specialty = "Management"
end

Coach.find_or_create_by!(email: "claire.petit@coaching.fr") do |c|
  c.name = "Claire Petit"
  c.specialty = "Prise de parole"
end

Coach.find_or_create_by!(email: "thomas.roux@coaching.fr") do |c|
  c.name = "Thomas Roux"
  c.specialty = "Confiance en soi"
end

puts "#{Coach.count} coaches en base."
