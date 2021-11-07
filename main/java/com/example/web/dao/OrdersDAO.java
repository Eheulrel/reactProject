package com.example.web.dao;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Repository;

import com.example.web.vo.Orders;

@Mapper
@Repository
public interface OrdersDAO {
	public void ordersInsert(Orders o) throws DataAccessException;		
	
	public Integer ordersCount() throws DataAccessException;
}
