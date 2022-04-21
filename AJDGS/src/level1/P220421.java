package AJDGS.src.level1;

import java.util.ArrayList;

public class P220421 {
    public int[] solution(String[] id_list, String[] report, int k) {// 1. report를 돌면서
        // 1-1. 자신이 신고한 사용자가 누구인지 저장하기(user_report)
        // 1-2. 몇번 신고 당했는지 기록하기 (reported_num)
        // 1-3. k번 이상 신고되면 정지된 사용자에 저장하기 (stopped)
        // 2. 자신이 신고한 사용자와 정지된 사용자를 비교하면서 이메일이 몇번 가면 될지 count 하기 (answer)
        int user_num = id_list.length;  // 유저수
        int[] answer = new int[user_num];
        ArrayList<String>[] user_report = new ArrayList[user_num];  // 신고한 사용자
        for(int i = 0; i < user_num; i++) {
            user_report[i] = new ArrayList();
        }
        int[] reported_num = new int[user_num];   // 신고 받은 수
        ArrayList<String> stopped= new ArrayList<String>(); //정지된 사용자
        for(int i = 0; i < report.length; i++) {
            String[] arr = report[i].split(" ");
            String reporter = arr[0];   // 신고자
            String reported = arr[1];   // 신고된 이용자

            // 1-1
            for(int j = 0; j < user_num; j++) {
                if(id_list[j].equals(reporter)) {
                    if (!user_report[j].contains(reported)) {
                        user_report[j].add(reported);
                        for (int s = 0; s < user_num; s++) {
                            if (id_list[s].equals(reported)) {
                                //1-2
                                reported_num[s]++;
                                //1-3
                                if (reported_num[s] >= k && !stopped.contains(reported))
                                    stopped.add(reported);
                                break;
                            }
                        }
                    }
                    break;
                }
            }
        }

        // 이메일 보내기
        for(int i = 0; i < user_num; i++) {
            for(int j = 0; j < user_report[i].size(); j++) {
                for(int s = 0; s < stopped.size(); s++) {
                    if(user_report[i].get(j).equals(stopped.get(s)))
                        answer[i]++;
                }
            }
        }
        return answer;
    }
}
