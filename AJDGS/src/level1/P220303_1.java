package AJDGS.src.level1;

public class P220303_1 {
    public boolean solution(String s) {
        if(s.length() != 6 && s.length() != 4)
            return false;
        for(int i = 0; i < s.length(); i++) {
            if(s.charAt(i) >= '0' && s.charAt(i) <= '9')
                continue;
            else {
                return false;
            }
        }
        return true;
    }
}
