package AJDGS.src.level1;

public class P220317_2 {
    public String solution(String s) {
        String answer = "";
        String[] arr = s.split("");

        int index = 0;
        for(int i=0; i<arr.length; i++) {
            if(arr[i].equals(" ")) {
                index = 0;
            } else if(index % 2 == 0) {
                arr[i] = arr[i].toUpperCase();
                index++;
            } else if(index % 2 != 0) {
                arr[i] = arr[i].toLowerCase();
                index++;
            }
            answer += arr[i];
        }

        return answer;
    }
}
