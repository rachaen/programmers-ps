package AJDGS.src.level1;

public class P220224_2 {
    boolean solution(String s) {
        boolean answer = true;
        int pCount = 0;
        int yCount = 0;

        for(int i = 0; i < s.length(); i++) {
            if(s.charAt(i) == 80 || s.charAt(i)==112)
                pCount++;
            else if(s.charAt(i) == 89 || s.charAt(i)==121)
                yCount++;
        }

        if(pCount != yCount)
            answer = false;
        return answer;
    }
}
