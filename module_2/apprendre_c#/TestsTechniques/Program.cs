class TestTechniques
{
    public static List<int> FilterAnormalTemperatures(List<int> temperatures)
    {
        List<int> resultat = new List<int>();

        foreach (var temperature in temperatures)
        {
            if (temperature > 90)
            {
                resultat.Add(temperature);
            }
        }

        Console.WriteLine($"{resultat.Count} températures anormales trouvées");
        return resultat;
    }

    static void Main() {
        List<int> temperatures = new List<int> { 65, 92, 78, 105, 60, 88 };
        List<int> resultat = FilterAnormalTemperatures(temperatures);
    }
}
