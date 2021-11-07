package com.example.web.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.web.dao.BasketDAO;
import com.example.web.dao.OrdersDAO;
import com.example.web.vo.Basket;
import com.example.web.vo.Orders;

@Transactional
@Service
public class BasketService {
	
	@Autowired
	BasketDAO basketDAO;
	
	@Autowired
	OrdersDAO ordersDAO;
	
	public void basketInsert(Basket b) throws Exception{
		Integer quantity = basketDAO.basketSelect(b);
		System.out.println(quantity);
		if(quantity==null) {
			b.setQuantity(1);
			basketDAO.basketInsert(b);
		}else {
			b.setQuantity(quantity.intValue()+1);
			basketDAO.basketUpdate(b);
		}
		
	}

	public List<Basket> basketView(Basket b) {
		return basketDAO.basketView(b);
	}

	@Transactional
	public void orders(List<Basket> list, String id) throws Exception{
		//장바구니에 있는 내역을 orders 테이블에 insert
		Orders o = new Orders();
		o.setMemberId(id);
		String contents ="";
		for(Basket basket:list) {
			contents += basket.getProductName()+":"+basket.getQuantity()+"\t";			
		}
		o.setContents(contents);
		Integer count=ordersDAO.ordersCount();
		o.setOrderNo(count.intValue()+1);
		ordersDAO.ordersInsert(o);
		//basket 테이블에 있는 내역을 delete
		basketDAO.basketDelete(id);
		
	}
}
