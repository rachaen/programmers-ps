package level1;

import java.util.ArrayList;

public class P211202_3 {
	public static void main(String[] args) {
		int[][] board = {{0,0,0,0,0},{0,0,1,0,3},{0,2,5,0,1},{4,2,4,4,2},{3,5,1,3,1}};
		int[] moves = {1,5,3,5,1,2,1,4};
		System.out.println(solution(board ,moves)); 
	}
	public static int solution(int[][] board, int[] moves) {
        int answer = 0;
        
        ArrayList<Integer> basket = new ArrayList<Integer>();
        for (int m = 0; m < moves.length; m++) {
        	int num = moves[m] - 1;	
        	for(int b = 0; b < board.length; b++) {
        		if(board[b][num] != 0) {
        			basket.add(board[b][num]);	
        			board[b][num] = 0;
        			int length = basket.size();	
        			if(length == 1) {	
        				break;
        			} else {	
        				if(basket.get(length-2) == basket.get(length-1)) {	
        					basket.remove(length-1);
        					basket.remove(length-2);
        					answer++;
        				} else {
        				}
        			}
            		break;
            	} else {
            	}
        	}
        }
        return answer*2;
    }
	
}
