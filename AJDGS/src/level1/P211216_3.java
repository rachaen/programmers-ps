package level1;
import java.util.Arrays;

public class P211216_3 {
    public int[] solution(int[] array, int[][] commands) {
    	int[] answer = new int[commands.length];
        for(int i = 0; i < commands.length; i++) {
        	int[] new_array = Arrays.copyOfRange(array, commands[i][0]-1, commands[i][1]);
        	Arrays.sort(new_array);
        	answer[i] = new_array[commands[i][2]-1];
        }
        return answer;
    }
}
