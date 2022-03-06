package AJDGS.src.level1;

public class P220310_3 {
    public String solution(String s, int n) {
        String answer = "";
        for(int i = 0; i < s.length(); i++) {
            // 공백
            if(s.charAt(i) == ' ') {
                answer += (char)(s.charAt(i));
                continue;
            }

            // 대문자
            if(s.charAt(i) >= 'A' && s.charAt(i) <= 'Z') {
                if(s.charAt(i) + n > 'Z')
                    answer += (char)(s.charAt(i) - 26 +n);
                else
                    answer += (char)(s.charAt(i)+n);
            }

            // 소문자
            if(s.charAt(i) >= 'a' && s.charAt(i) <= 'z') {
                if((s.charAt(i) + n) > 'z')
                    answer += (char)(s.charAt(i) - 26 +n);
                else
                    answer += (char)(s.charAt(i) +n);
            }
        }
        return answer;
    }
}
