package com.example.web.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.web.dao.MemberDAO;
import com.example.web.vo.Member;

@Service
public class MemberService {

	@Autowired
	MemberDAO memberDAO;
	
	public void memberInsert(Member m) throws Exception{
		memberDAO.memberInsert(m);
		
	}

	public String login(Member m) throws Exception{
		return memberDAO.login(m);
	}

}
