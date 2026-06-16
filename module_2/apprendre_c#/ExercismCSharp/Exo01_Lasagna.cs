// Exo01_Variables.cs
public class Exo01_Lasagna
{
    public static int ExpectedMinutesInOven()
    {
        Console.WriteLine(40);
        return 40;
    }

    public static int RemainingMinutesInOven(int min)
    {
        Console.WriteLine(min);
        return 40 - min;
    }

    public static int PreparationTimeInMinutes(int couchs)
    {
        Console.WriteLine(2 * couchs);
        return 2 * couchs;
    }

    public static int ElapsedTimeInMinutes(int couchs, int min)
    {
        Console.WriteLine(couchs * 2 + min);
        return couchs * 2 + min;
    }
}
