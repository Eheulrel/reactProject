package com.example.web.controller;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.web.service.MemberService;
import com.example.web.vo.Member;

@RestController
@CrossOrigin(origins="http://localhost:3000", allowCredentials="true")
public class MemberController {

	@Autowired
	MemberService memberService;
	
	@PostMapping("logout")
	public String logout(HttpSession session) {
		session.invalidate();
		return "로그아웃ok";
	}	
	
	@PostMapping("login")
	public String login(@ModelAttribute Member m, HttpSession session, HttpServletResponse response) {
		System.out.println("로그인 시 할당받은 세션ID :"+session.getId());
		 
		JSONObject json = new JSONObject();
		try {
			System.out.println(m);
			String name= memberService.login(m);			
			
			if(name!=null) {				
				m.setName(name);
				session.setAttribute("m", m);
				json.put("name", name);				
			}else {
				json.put("errMsg", "로그인 오류");
			}
		}catch(Exception e) {
			json.put("errMsg", "로그인오류");
		}
		return json.toJSONString();
	}	
	
	@RequestMapping("memberInsert")
	public String memberInsert(@ModelAttribute Member m) {
			
		System.out.println(m);		
		
		try {
			memberService.memberInsert(m);
			return "회원 가입 완료 <button onclick='window.close()'>닫기</button>";
		} catch (Exception e) {			
			e.printStackTrace();
			return "회원가입실패:ID를 확인하세요";
		}	
		
	}
}
