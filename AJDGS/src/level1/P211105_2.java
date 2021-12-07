package level1;

public class P211105_2 {
	public static void main(String[] args) {
		solution("...!@BaT#*..y.abcdefghijklm");
	}
	public static String solution(String new_id) {
		String answer = "";
		answer = new_id;
		System.out.println(answer);
		answer = answer.toLowerCase();
		System.out.println(answer);
		answer = answer.replaceAll("[^0-9a-z-_.]", "");
		System.out.println(answer);
		answer = answer.replaceAll("\\.{2,}", ".");
		System.out.println(answer);
		answer = answer.replaceAll("^[.]|[.]$", "");
		System.out.println(answer);
		if (answer.length() == 0)
			answer = "a";
		System.out.println(answer);
		if(answer.length() >= 16) {
			answer = answer.substring(0, 15);
		}
		System.out.println(answer);
		
		answer = answer.replaceAll("[.]$", "");
		System.out.println(answer);
		while(true) {
			if(answer.length() <= 2) {
				answer = answer + answer.substring(answer.length()-1);
			} else {
				break;
			}
		}
		System.out.println(answer);
        return answer;
    }
}
