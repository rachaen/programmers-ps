package level1;

public class P220106_3 {
	public static void main(String[] args) {
		System.out.println(solution(45));
	}
    public static int solution(int n) {
        int answer = 0;
        String s_answer = "";
        
        while (n > 0) {
        	s_answer += n % 3;
        	n /= 3;
        }

        answer = Integer.parseInt(s_answer, 3);	
        return answer;
    }
}
