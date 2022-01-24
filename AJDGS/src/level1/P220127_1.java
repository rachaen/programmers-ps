package AJDGS.src.level1;
//[[60, 50], [30, 70], [60, 30], [80, 40]]
public class P220127_1 {
    public int solution(int[][] sizes) {
        int answer = 0;
        int x = 0;
        int y = 0;
        int a  = 0;
        for (int i = 0; i < sizes.length; i++) {
            // 가로보다 세로가 더 크면 방향을 바꿔주기
            if(sizes[i][0] < sizes[i][1]){
                a = sizes[i][0];
                sizes[i][0] = sizes[i][1];
                sizes[i][1] = a;
            }
            //max값 구하기
            if(sizes[i][0] > x)
                x = sizes[i][0];
            if(sizes[i][1] > y)
                y = sizes[i][1];
        }

        answer = x * y;
        return answer;
    }
}
