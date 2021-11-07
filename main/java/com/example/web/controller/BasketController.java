package com.example.web.controller;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.web.service.BasketService;
import com.example.web.vo.Basket;
import com.example.web.vo.Member;

@RestController
public class BasketController {
	
	@Autowired
	BasketService basketService;	
	
	@PostMapping("/orders")
	public String orders(HttpSession session) {
		Member m = (Member)session.getAttribute("m");
		if(m==null) {
			return "로그인 해주세요";
		}else {
			List<Basket> list=(List<Basket>)session.getAttribute("basketList");
			if(list==null) {
				return "장바구니 내역이 없습니다.";
			}else {
				try {
					basketService.orders(list,m.getId());
					return "주문완료";
				} catch (Exception e) {					
					e.printStackTrace();
					return "주문처리오류";
				}				
			}			
		}		
	}
	
	@GetMapping("/basketView")
	public String basketView(HttpSession session) {
		Member m = (Member)session.getAttribute("m");
		if(m==null) {
			return "로그인부터 하세요";
		}else {
			Basket b = new Basket();
			b.setMemberId(m.getId());
			List<Basket> list = basketService.basketView(b);
			session.setAttribute("basketList",list);
			
			System.out.println(list.size());
			String resultMsg="<html><head><script src=\"https://code.jquery.com/jquery-3.6.0.min.js\"></script><script src='js/my.js'></script></head>"
					+ "<body><h1>장바구니 목록</h1><br><table border=1><tr><th>품명</th><th>수량</th></tr>";
			for(Basket basket:list) {
				resultMsg += "<tr><td>"+basket.getProductName()+"</td><td>"+basket.getQuantity()+"</td></tr>";
			}
			resultMsg +="</table><br><br><button id='ordersBtn'>주문하기</button>"
					+ "<button onclick='window.close()'>닫기</button></body></html>";
			return resultMsg;
		}		
	}
	
	@PostMapping("/basketInsert")
	public String basketInsert(@ModelAttribute Basket b,HttpSession session) {
		JSONObject json = new JSONObject();
		
		Member m = (Member)session.getAttribute("m");
		if(m!=null) {
			b.setMemberId(m.getId());
			System.out.println(b);
			try {
				basketService.basketInsert(b);
				json.put("msg", "장바구니 넣기 완료");
			} catch (Exception e) {
				e.printStackTrace();
				json.put("msg", "장바구니 넣기 실패");
			}
						
		}else {
			json.put("msg","로그인 해주세요");
		}
		return json.toJSONString();
	}
}
