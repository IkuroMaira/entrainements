SELECT nom, temperature
FROM machines
WHERE temperature > 80;

SELECT atelier_id, COUNT(*) as nb_machines
FROM machines
GROUP BY atelier_id;

SELECT id, nom, temperature
FROM machines
WHERE derniere_maintenance < '2026-01-01'
ORDER BY temperature DESC;

SELECT nom, vibration
FROM machines
WHERE vibration > 5;

SELECT atelier_id, COUNT(*) as nb_machines
FROM machines
GROUP BY atelier_id
HAVING COUNT(*) > 1;

SELECT id, nom, derniere_maintenance, vibration
FROM machines
WHERE derniere_maintenance < '2026-01-01'
ORDER BY vibration ASC;

SELECT machines.nom, ateliers.nom_atelier, ateliers.responsable
FROM machines
JOIN ateliers ON machines.atelier_id = ateliers.atelier_id;

SELECT machines.nom, ateliers.nom_atelier
FROM machines
LEFT JOIN ateliers ON machines.atelier_id = ateliers.atelier_id;

SELECT ateliers.nom_atelier, COUNT(*) as nb_machines
FROM machines
INNER JOIN ateliers ON machines.atelier_id = ateliers.atelier_id
GROUP BY ateliers.nom_atelier;
