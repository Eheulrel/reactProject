package com.example.web.vo;

public class Basket {
	
	private String memberId, productName;
	private int quantity;
	
	public Basket() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Basket(String memberId, String productName, int quantity) {
		super();
		setMemberId(memberId);
		setProductName(productName);
		setQuantity(quantity);
	}

	public String getMemberId() {
		return memberId;
	}

	public void setMemberId(String memberId) {
		this.memberId = memberId;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	@Override
	public String toString() {
		return "Basket [memberId=" + memberId + ", productName=" + productName + ", quantity=" + quantity + "]";
	}
	
	
}
