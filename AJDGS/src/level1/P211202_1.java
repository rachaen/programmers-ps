package level1;

public class P211202_1 {
	
	public int solution(String s) {
        int answer = 0;
        String str_answer = "";	
        String str = "";
        
        for(int i = 0; i < s.length(); i++) {
        	char ch = s.charAt(i);
        	if (48 <= ch && ch <= 57) {	
        		str_answer += ch;
        		
        	} else {
        		str += ch;
        		if (change(str)==0) {
        			continue;
        		} else {
        			str_answer += change(str);
        			str = ""; 
        		}
        	}
        }
        answer = Integer.valueOf(str_answer);
        return answer;
    }
	
	public char change(String s) {
		char i = ' ';
		System.out.println("i:"+ i);
		switch(s) {
		case "zero": i = '0'; break;
		case "one": i = '1'; break;
		case "two": i = '2'; break;
		case "three": i = '3'; break;
		case "four": i = '4'; break;
		case "five": i = '5'; break;
		case "six": i = '6'; break;
		case "seven": i ='7'; break;
		case "eight": i = '8'; break;
		case "nine" : i = '9'; break;
		default:
			i = 0;
		}
		return i;
	}
}



