=begin
Les bases de Ruby
- Variables et types de données
=end

# VARIABLES
## variable locale
variable = 'ma variable'
## variable d'instance (dans une classe)
@variable_d_instance = 'variable d\'instance'
## variable de classe (partagée entre instances)
@@compteur = 0
## variable globale (éviter autant que possible)
$globale = '1.0'
## constante
MAX_TENTATIVES = 3

# TYPES DE DONNÉES PRIMITIVES
## integer (entier)
age = 25
population = 1_000_000 # Le "_" améliore la lisibilité
## float (décimaux)
float = 19.999
pi = 3.14159
## Opérations
puts 10 + 5   # 15
puts 10 - 5   # 5
puts 10 * 5   # 50
puts 10 / 3   # 3 (division entière)
puts 10.0 / 3 # 3.3333... (division décimale)
puts 10 % 3   # 1 (modulo)
puts 2 ** 3   # 8 (puissance)
## Méthodes utiles
puts 5.even?    # false (impair)
puts 4.even?    # true (pair)
puts 5.odd?     # true (impair)
puts -5.abs     # 5 (retourne la valeur absolue de l'entier)
puts 3.5.round  # 4 (`num.round(ndigits)`: arrondi le nombre, ndigits: le nombre de décimale)
puts 3.5.floor  # 3 (arrondi à l'inférieur ou égal)
puts 3.5.ceil   # 4
## Booléens
vrai = true
faux = false
# Valeurs "truthy" et "falsy"
# false et nil sont "falsy"
# Tout le reste est "truthy" (y compris 0 et "")
## nil
### nil représente l'absence de valeur
valeur = nil
puts valeur.nil? # true
## Chaînes de caractères
### Guillemets doubles : permettent l'interpolation
nom = "Alice"
message = "Bonjour #{nom}" # "Bonjour Alice"
### Guillemets simples : pas d'interpolation
message = 'Bonjour #{nom}'  # "Bonjour #{nom}"
### Chaînes multilignes
texte = <<-TEXT
  Ceci est un texte
  sur plusieurs lignes
TEXT
## Méthodes courantes
puts "ruby".upcase      # "RUBY"
puts "RUBY".downcase    # "ruby"
puts "ruby".capitalize  # "Ruby"
puts "hello".reverse    # "olleh"
puts "hello".length     # 5
puts "  test  ".strip   # "test"
puts "hello"[0]         # "h"
puts "hello"[1..3]      # "ell"
## Conversion de type
### Vers entier
puts "42".to_i       # 42
puts "3.14".to_i     # 3
puts 3.14.to_i       # 3
### Vers décimal
puts "3.14".to_f     # 3.14
puts 5.to_f          # 5.0
### Vers chaîne
puts 42.to_s         # "42"
puts 3.14.to_s       # "3.14"
### Vers symbole
puts "nom".to_sym    # :nom
### Vers tableau
puts "hello".chars   # ["h", "e", "l", "l", "o"]

# Opérateurs
## Opérateurs arithmétiques
a = 10
b = 3
puts a + b   # 13 (addition)
puts a - b   # 7  (soustraction)
puts a * b   # 30 (multiplication)
puts a / b   # 3  (division)
puts a % b   # 1  (modulo)
puts a ** b  # 1000 (puissance)
## Opérateurs de comparaison
a = 10
b = 5
puts a == b   # false (égal à)
puts a != b   # true  (différent de)
puts a > b    # true  (supérieur à)
puts a < b    # false (inférieur à)
puts a >= b   # true  (supérieur ou égal)
puts a <= b   # false (inférieur ou égal)
puts a <=> b  # 1 (spaceship : retourne -1, 0, ou 1, )
=begin
  if a < b then return -1
  if a = b then return  0
  if a > b then return  1
  if a and b are not comparable then return nil
=end
## Opérateurs logiques
a = true
b = false
puts a && b   # false (ET logique)
puts a || b   # true  (OU logique)
puts !a       # false (NON logique)
### Formes alternatives
puts a and b  # false (priorité plus faible)
puts a or b   # true  (priorité plus faible)
puts not a    # false
## Opérateurs d'affectation
x = 10
x += 5   # x = x + 5  (15)
x -= 3   # x = x - 3  (12)
x *= 2   # x = x * 2  (24)
x /= 4   # x = x / 4  (6)
x %= 4   # x = x % 4  (2)
x **= 3  # x = x ** 3 (8)
## Opérateurs spéciaux
### Opérateur ternaire
age = 20
statut = age >= 18 ? "majeur" : "mineur"
puts statut  # "majeur"
### Opérateur de coalescence (||=)
#### Assigne seulement si la variable est nil ou false
nom = nil
nom ||= "Anonyme"
puts nom  # "Anonyme"
nom ||= "Autre"
puts nom  # "Anonyme" (pas changé)
### Safe navigation operator (&.)
utilisateur = nil
puts utilisateur&.nom  # nil (pas d'erreur)
