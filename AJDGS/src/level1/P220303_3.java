package AJDGS.src.level1;

public class P220303_3 {
    public int solution(int n) {
        int answer = 0;
        boolean[] prime = new boolean[n+1];
        for(int i = 2; i <= n; i++)
            prime[i] = true;

        for(int i = 2; i < Math.sqrt(n); i++) {
            if(prime[i]==true){
                for(int j = i+i; j <= n; j += i) {
                    prime[j] = false;
                }
            }
        }

        for(int i = 2;i <=n; i++)
            if(prime[i] == true)
                answer++;
        return answer;
    }
}
