// class TestTechniques
// {
//     public static List<int> FilterAnormalTemperatures(List<int> temperatures)
//     {
//         List<int> resultat = new List<int>();

//         foreach (var temperature in temperatures)
//         {
//             if (temperature > 90)
//             {
//                 resultat.Add(temperature);
//             }
//         }

//         Console.WriteLine($"{resultat.Count} températures anormales trouvées");
//         return resultat;
//     }

//     static void Main() {
//         List<int> temperatures = new List<int> { 65, 92, 78, 105, 60, 88 };
//         List<int> resultat = FilterAnormalTemperatures(temperatures);
//     }
// }

// ===== IMPORTS (équivalent des "import" en Python) =====
using System;                          // donne accès à Console.WriteLine, etc.
using System.Collections.Generic;      // donne accès à List<T>

// Un "namespace" regroupe tout le code du projet sous un même nom
// C'est surtout utile pour éviter les conflits de noms entre projets différents
namespace TestTechnique
{
    // ===== CLASSE "Machine" =====
    // Une classe = un "moule" pour créer des objets.
    // Ici, Machine décrit les données d'une machine industrielle.
    public class Machine
    {
        // Ce sont des "propriétés" : des variables accessibles via machine.Id, machine.Temperature, etc.
        // { get; set; } veut dire : on peut LIRE (get) et MODIFIER (set) cette valeur depuis l'extérieur
        public string Id { get; set; }
        public double Temperature { get; set; }
        public double Vibration { get; set; }
    }

    // ===== CLASSE "Program" =====
    // C'est ici qu'on met la logique de notre programme (nos méthodes)
    public class Program
    {
        // ----- MÉTHODE 1 : GetStatus -----
        // "public" = accessible depuis n'importe où
        // "static" = on peut appeler la méthode sans créer d'objet Program (Program.GetStatus(...))
        // "string" = le TYPE de ce que la méthode va retourner (ici, du texte)
        // (Machine machine) = le paramètre : on reçoit UNE machine en entrée
        public static string GetStatus(Machine machine)
        {
            // On compare machine.Temperature (un nombre) à 90
            // || veut dire "OU" (comme "or" en Python)
            if (machine.Temperature > 90 || machine.Vibration > 5)
            {
                return "Critique"; // on arrête la méthode ici et on renvoie ce texte
            }
            // "else if" = sinon, si cette autre condition est vraie
            else if (machine.Temperature > 80 || machine.Vibration > 4)
            {
                return "A surveiller";
            }
            // "else" = dans tous les autres cas
            else
            {
                return "Normal";
            }
        }

        // ----- MÉTHODE 2 : GetCriticalMachineIds -----
        // Cette méthode retourne une LISTE de string (List<string>)
        // et prend en entrée une LISTE de Machine (List<Machine>)
        public static List<string> GetCriticalMachineIds(List<Machine> machines)
        {
            // On crée une liste vide qui va stocker les IDs des machines critiques
            List<string> idsCritiques = new List<string>();

            // "foreach" = on parcourt chaque élément de la liste "machines", un par un
            // "var machine" = à chaque tour de boucle, "machine" représente l'élément actuel
            foreach (var machine in machines)
            {
                // On appelle la MÉTHODE 1 définie au-dessus, en lui donnant la machine actuelle
                // Le résultat ("Critique", "A surveiller" ou "Normal") est stocké dans "statut"
                string statut = GetStatus(machine);

                // On compare le texte "statut" avec le texte "Critique"
                // En C#, on utilise == pour comparer des string (contrairement à Java par exemple)
                if (statut == "Critique")
                {
                    // .Add() ajoute un élément à la fin d'une liste
                    // machine.Id récupère l'identifiant de la machine actuelle
                    idsCritiques.Add(machine.Id);
                }
            }

            // On renvoie la liste complète des IDs critiques trouvés
            return idsCritiques;
        }

        // ----- Main() : LE POINT DE DÉPART DU PROGRAMME -----
        // Quand tu exécutes ton programme C#, c'est CETTE méthode qui se lance en premier
        static void Main()
        {
            // On crée une liste de 4 objets Machine
            // "new Machine { Id = "M001", ... }" = on crée un nouvel objet et on remplit ses propriétés directement
            List<Machine> machines = new List<Machine>
            {
                new Machine { Id = "M001", Temperature = 75, Vibration = 2.3 },
                new Machine { Id = "M002", Temperature = 95, Vibration = 4.8 },
                new Machine { Id = "M003", Temperature = 60, Vibration = 1.1 },
                new Machine { Id = "M004", Temperature = 88, Vibration = 5.2 }
            };

            // On appelle notre MÉTHODE 2 avec la liste de machines
            // Le résultat (une liste d'IDs) est stocké dans "critiques"
            List<string> critiques = GetCriticalMachineIds(machines);

            // Console.WriteLine affiche du texte dans la console (équivalent de print() en Python)
            Console.WriteLine("Machines critiques :");

            // On parcourt la liste "critiques" pour afficher chaque ID un par un
            foreach (var id in critiques)
            {
                Console.WriteLine(id);
            }
        }
    }
}
