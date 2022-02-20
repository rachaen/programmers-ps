package AJDGS.src.level1;

import java.util.*;

public class P220224_1 {
    public String[] solution(String[] strings, int n) {
        String[] answer = new String[strings.length];
        Map<String, Character> map= new HashMap<String, Character>();
        for(int i = 0; i < strings.length; i++) {
            map.put(strings[i], strings[i].charAt(n));
        }

        List<Map.Entry<String, Character>> list = new LinkedList<>(map.entrySet());

        Collections.sort(list, new Comparator<Map.Entry<String, Character>>() {
            @Override
            public int compare(Map.Entry<String, Character> o1, Map.Entry<String, Character> o2) {
                int comparision = (o1.getValue() - o2.getValue()) * 1;
                return comparision == 0 ? o1.getKey().compareTo(o2.getKey()) : comparision;
            }
        });

        /*for(Map.Entry<String, Character> entry : list){
            System.out.println("key : " + entry.getKey() + ", value : " + entry.getValue());
        }*/

        for(int i = 0; i < strings.length; i++) {
            answer[i] = list.get(i).getKey();
        }


        // 순서유지를 위해 LinkedHashMap을 사용
        /*Map<String, Character> sortedMap = new LinkedHashMap<>();
        for(Iterator<Map.Entry<String, Character>> iter = list.iterator(); iter.hasNext();){
            Map.Entry<String, Character> entry = iter.next();
            sortedMap.put(entry.getKey(), entry.getValue());
        }

        System.out.println(sortedMap);
        */
        return answer;
    }
}
//참고
//Map에 있는 데이터를 Value기준으로 정렬하기 https://cornswrold.tistory.com/114
//https://velog.io/@cgw0519/Java-HashMap-Value-%EA%B8%B0%EC%A4%80%EC%9C%BC%EB%A1%9C-%EC%A0%95%EB%A0%AC%ED%95%98%EA%B8%B0

