package AJDGS.src.level1;

import java.util.ArrayList;
import java.util.Arrays;

/*
점수|보너스|[옵션]
S: single
D: double
T: triple
*: 스타상
#: 아차상
*/
public class P220210_4 {
    public int solution(String dartResult) {
        int answer = 0;

        String arr[] = dartResult.split("");
        int len = dartResult.length();

        ArrayList<Integer> scores = new ArrayList<Integer>();
        ArrayList<String> bonuses = new ArrayList<String>();
        ArrayList<String> options = new ArrayList<String>();

        int num = 0;
        for(int i = 0; i < len; i++) {
            if(arr[i].equals("S") || arr[i].equals("D") || arr[i].equals("T")) {
                int score = 0;
                score = Integer.parseInt(dartResult.substring(num, i));
                scores.add(score);
                bonuses.add(arr[i]);

                if(i+1 < len && (arr[i+1].equals("*") || arr[i+1].equals("#"))) {
                    options.add(arr[i+1]);
                    num = i+2;
                    i++;
                } else {
                    options.add("x");
                    num = i + 1;
                }
            }
        }

        // 계산하기
        int[] result_score = new int[3];
        for(int i = 0; i < 3; i++) {
            String bonus = bonuses.get(i);
            String option = options.get(i);
            result_score[i] = scores.get(i);

            //보너스 점수 계산하기
            if(bonus.equals("D")) {
                result_score[i] = (int)Math.pow(result_score[i],2);
            } else if(bonus.equals("T")) {
                result_score[i] = (int)Math.pow(result_score[i],3);
            }

            //옵션 계산하기
            if(option.equals("#")) {
                result_score[i] = result_score[i] * (-1);
            } else if(option.equals("*")) {
                result_score[i] = result_score[i] * 2;
                if(i > 0) {
                    result_score[i-1] = result_score[i-1]*2;
                }
            }

        }
        answer = Arrays.stream(result_score).sum();
        return answer;
    }
}
