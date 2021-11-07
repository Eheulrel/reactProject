package com.example.web.vo;

public class Orders {
	private String memberId, contents;
	private int orderNo;
	public Orders() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Orders(String memberId, String contents, int orderNo) {
		super();
		setMemberId(memberId);
		setContents(contents);
		setOrderNo(orderNo);
	}
	public String getMemberId() {
		return memberId;
	}
	public void setMemberId(String memberId) {
		this.memberId = memberId;
	}
	public String getContents() {
		return contents;
	}
	public void setContents(String contents) {
		this.contents = contents;
	}
	public int getOrderNo() {
		return orderNo;
	}
	public void setOrderNo(int orderNo) {
		this.orderNo = orderNo;
	}
	@Override
	public String toString() {
		return "Orders [memberId=" + memberId + ", contents=" + contents + ", orderNo=" + orderNo + "]";
	}	
	
}
