package com.example.web.controller;

import java.util.List;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.web.service.BoardService;
import com.example.web.vo.Board;
import com.example.web.vo.Member;


@Controller
@CrossOrigin(origins="http://localhost:3000", allowCredentials="true")
public class BoardController {
	
	@Autowired
	BoardService boardService;
	
	@PostMapping("/boardWrite")
	@ResponseBody
	public String boardWrite(@ModelAttribute Board b, HttpSession session) {	
//		System.out.println("새글쓰기 요청시 할당받은 세션ID :"+session.getId());
		
		Member m =(Member)session.getAttribute("m");
		if(m==null) {
			return "로그인하세요";
		}else {
			b.setId(m.getId());
			System.out.println(b);
			
			try {
				boardService.boardWrite(b);
			} catch (Exception e) {				
				e.printStackTrace();
				return "글작성 실패";
			}
			return "글작성 성공";
		}
	}
	
	@PostMapping("/boardWrite2")
	@ResponseBody
	public String boardWrite2(@ModelAttribute Board b, HttpSession session) {	
		System.out.println(b);
		
		Member m =(Member)session.getAttribute("m");
		if(m==null) {
			return "로그인하세요";
		}else {
			b.setId(m.getId());
			System.out.println(b);
			try {
				boardService.boardWrite2(b);
			} catch (Exception e) {				
				e.printStackTrace();
				return "글작성 실패";
			}
			return "글작성 성공";
		}
	}
	
	@GetMapping("/boardList")
	public String boardList(Model model) {
		List<Board> list=boardService.boardList();
		model.addAttribute("articlesList",list);
		return "test";
	}
		
	@GetMapping("/boardList2")
	@ResponseBody
	public String boardList2(HttpServletRequest request) {
		String page=request.getParameter("page");
		int pageNo=Integer.parseInt(page);
		System.out.println(pageNo);
		
		List<Board> list=boardService.boardList(pageNo);		
		JSONArray arr=new JSONArray();
		for(Board b:list) {
			JSONObject o=new JSONObject();
			o.put("articleNo", b.getArticleNO());
			o.put("title", b.getTitle());
			o.put("content", b.getContent());
			o.put("id", b.getId());
			o.put("parentNo", b.getParentNO());
			o.put("writeDate", b.getWriteDate().toString());
			o.put("level", b.getLevel());
			arr.add(o);
		}
		System.out.println(arr);
		return arr.toJSONString();
	}

}
