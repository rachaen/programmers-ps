package level1;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class P211223_2 {
	 public int solution(int n, int[] lost, int[] reserve) {
	        int answer = n - lost.length;
	        
	        Arrays.sort(lost);
	        Arrays.sort(reserve);
	        
	        // 여벌 체육복을 가져온 학생이 체육복을 도난
	        for(int i=0; i<lost.length; i++){
	            for(int j=0; j<reserve.length; j++){
	                if(lost[i] == reserve[j]){
	                    answer++;
	                    lost[i] = -1;
	                    reserve[j] = -1; 
	                    break; 
	                }
	            }
	        }
	        
	        // 일반적인 경우
	        for(int i=0; i<lost.length; i++){
	            for(int j=0; j<reserve.length; j++){
	                if((lost[i]-1 == reserve[j]) || (lost[i]+1 == reserve[j])){
	                    answer++;
	                    reserve[j] = -1; 
	                    break; 
	                }
	            }
	        }
	        return answer;
	    }
}
