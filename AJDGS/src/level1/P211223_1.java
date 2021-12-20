package level1;

import java.util.ArrayList;

public class P211223_1 {
    public int[] solution(int[] answers) {
    	
        int[] first = {1,2,3,4,5};
        int[] second = {2,1,2,3,2,4,2,5};
        int[] third = {3,3,1,1,2,2,4,4,5,5};
        int first_score = 0, second_score = 0, third_score = 0;
        
        // 맞춘 문제 수 구하기
        for(int i = 0 ; i < answers.length ; i++) {
        	if(first[i%first.length] == answers[i]) first_score++;
        	if(second[i%second.length] == answers[i]) second_score++;
        	if(third[i%third.length] == answers[i]) third_score++;
        }
        
        // 최고 점수 구하기
        int maxScore = Math.max(first_score, Math.max(second_score, third_score));
        
        // 제일 점수가 높은 사람 구하기
        ArrayList<Integer> list = new ArrayList<>();
        if(maxScore == first_score) {
        	list.add(1);
        }
        if(maxScore == second_score) {
        	list.add(2);
        }
        if(maxScore == third_score) {
        	list.add(3);
        }
        
        int[] answer = new int[list.size()];
        
        for(int i = 0 ; i< answer.length; i++) {
        	answer[i] = list.get(i);
        }
        return answer;
    }

}
