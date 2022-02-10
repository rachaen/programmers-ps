package AJDGS.src.level1;

public class P220210_2 {
    public String[] solution(int n, int[] arr1, int[] arr2) {
        String[] answer = new String[n];
        // 행별로 비교
        for(int i = 0; i < n; i++) {
            // 이진수
            String binary1 = Integer.toBinaryString(arr1[i]);
            String binary2 = Integer.toBinaryString(arr2[i]);
            int len1 = binary1.length();
            int len2 = binary2.length();

            // 숫자가 작을 경우에 앞에 0을 채워준다
            for(int j = len1; j < n; j++) {
                binary1 = "0" + binary1;
            }


            for(int j = len2; j < n; j++) {
                binary2 = "0" + binary2;
            }

            // 자리수별로 나눠준다
            String[] binary_arr1 = binary1.split("");
            String[] binary_arr2 = binary2.split("");

            //i행 지도 만들기
            String row = "";
            for(int j = 0; j < n; j++) {
                if(binary_arr1[j].equals(String.valueOf(1))|| binary_arr2[j].equals(String.valueOf(1))) {
                    row = row + "#";
                } else {
                    row = row + " ";
                }
            }
            answer[i] = row;
        }
        return answer;
    }
}
