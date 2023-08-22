import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

import javax.xml.stream.events.Characters;

import java.util.Random;



public class Käyttöliittymäv2 {
    public static void main(String [] args) throws FileNotFoundException {
    Scanner scanner = new Scanner(new File("words.txt"));
    Scanner nappaimisto = new Scanner(System.in);

    List<String> sanat = new ArrayList<>();
    while (scanner.hasNext()) {
    sanat.add(scanner.nextLine());
    }
    Random arpa = new Random();
    String sana = sanat.get(arpa.nextInt(sanat.size()));

    System.out.println(sana);

    List<Character> arvaukset = new ArrayList<>();

    int vaarat = 0;

    while(true) {
        System.out.println(vaarat);

        if (vaarat >= 6) {
            System.out.println("Hävisit pelin!");
            System.out.println("sanat oli: " + sana);
            break;
        }

        if(vaarat >= 1) {
        System.out.println("O");
        }
        if(vaarat >= 2) {
            System.out.println("|");
        }

        printtaaja(sana, arvaukset);
        if (!pelaajasyote(nappaimisto, sana, arvaukset));{
                vaarat++;
            }
            if (printtaaja(sana, arvaukset)) {
                System.out.println("Voitit pelin");
                break;
            }

            System.out.println("arvaa kirjain:");
            if(nappaimisto.nextLine().equals(sana)) {
                System.out.println("Voitit pelin");
                break;
            }
            else{
                System.out.println("väärin");
            }   
        }
    }



    private static boolean pelaajasyote(Scanner nappaimisto, String sana,List<Character> arvaukset) {
    System.out.println("Arvaa kirjain");
    String arvattu = nappaimisto.nextLine();
    arvaukset.add(arvattu.charAt(0));

    return sana.contains(arvattu);
    }

    private static boolean printtaaja(String sana, List<Character> arvaukset) {  
       int montaoikein = 0;
        for (int i = 0; i < sana.length(); i++) {
            if (arvaukset.contains(sana.charAt(i))) {
                System.out.print(sana.charAt(i));
                montaoikein++;
            }
            else {
                System.out.print("-");
            }
        }
        System.out.println();

        return (sana.length() == montaoikein);
    }
   
}
