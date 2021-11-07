package com.example.web.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Repository;

import com.example.web.vo.Basket;

@Mapper
@Repository
public interface BasketDAO {
	public void basketInsert(Basket b) throws DataAccessException;

	public Integer basketSelect(Basket b) throws DataAccessException;

	public void basketUpdate(Basket b) throws DataAccessException;

	public List<Basket> basketView(Basket b) throws DataAccessException;

	public void basketDelete(String id) throws DataAccessException;

}
