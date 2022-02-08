package AJDGS.src.level1;

public class P220210_3 {
    public String solution(String s) {
        String answer = "";
        String[] arr = s.split("");
        int length = s.length();
        int n = length / 2;
        if(length % 2 == 0){
            answer = arr[n-1] + arr[n];
        } else {
            answer = arr[n];
        }
        return answer;
    }
}
