package AJDGS.src.level1;

import java.util.ArrayList;
import java.util.Comparator;

public class P220224_3 {
    public String solution(String s) {
        String answer = "";
        ArrayList<Character> lower = new ArrayList<>();
        ArrayList<Character> upper = new ArrayList<>();
        for(int i = 0; i < s.length(); i++) {
            if(s.charAt(i) <=90 && s.charAt(i) >= 65)
                upper.add(s.charAt(i));
            else
                lower.add(s.charAt(i));
        }

        lower.sort(Comparator.reverseOrder());
        upper.sort(Comparator.reverseOrder());

        ArrayList<Character> answerList = new ArrayList<>();
        answerList.addAll(lower);
        answerList.addAll(upper);

        for(int i = 0; i < answerList.size(); i++) {
            answer += answerList.get(i);
        }
        return answer;
    }
}

//arraylist 정렬하기 https://hianna.tistory.com/569
