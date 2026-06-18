# produits = [
#   {"nom": "Vis M5", "prix": 5.50, "stock": 150},
#   {"nom": "Écrou acier", "prix": 2.10, "stock": 0},
#   {"nom": "Roulement SKF", "prix": 125.00, "stock": 45},
#   {"nom": "Joint torique", "prix": 8.75, "stock": 320}
# ]

# def filter_produits(produits):
#     resultat = []
#     for produit in produits:
#         if produit["stock"] > 0 and produit["prix"] < 100:
#             resultat.append(produit)
#     print(f"{len(resultat)} produits en stock et moins de 100 euros")
#     return resultat

# print(filter_produits(produits))

machines = [
    {"id": "M001", "temperature": 75, "vibration": 2.3, "derniere_maintenance": "2026-01-15"},
    {"id": "M002", "temperature": 95, "vibration": 4.8, "derniere_maintenance": "2025-11-02"},
    {"id": "M003", "temperature": 60, "vibration": 1.1, "derniere_maintenance": "2026-05-10"},
    {"id": "M004", "temperature": 88, "vibration": 5.2, "derniere_maintenance": "2025-08-20"},
]

machines_vide = []

def analyser_machines(machines):
    resultat = {
        "critique" : [],
        "a_surveiller" : [],
        "normal" : [],
    }
    
    for machine in machines:
        if machine["temperature"] > 90 or machine["vibration"] > 5:
            resultat["critique"].append(machine["id"])
        elif machine["temperature"] > 80 or machine["vibration"] > 4:
            resultat["a_surveiller"].append(machine["id"])
        else:
            resultat["normal"].append(machine["id"])

    return resultat

print(analyser_machines(machines))
print(analyser_machines(machines_vide))
