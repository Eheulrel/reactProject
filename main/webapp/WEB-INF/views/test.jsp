<!DOCTYPE html>
<%@page language="java" contentType="text/html;charset=UTF-8"
 pageEncoding="UTF-8" import="com.example.web.vo.Board"%>
<%@page import="java.util.List"%>
<html lang="kr">
<head>
  <title>Bootstrap Example</title>
  <meta charset="UTF-8" >
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
</head>
<body>

<div class="container">
  <h2>게시판</h2>  
  <table class="table">
    <thead>
      <tr class="danger">
        <th>번호</th>
        <th>작성자</th>
        <th>제목</th>
        <th>작성일</th>
      </tr>
    </thead>
    <tbody>
    <% 
    List<Board> list = (List<Board>)request.getAttribute("articlesList");
    
    for(Board b:list){
    	if(b.getParentNO()==0){
   	%>    
      <tr>
        <td><%=b.getArticleNO() %></td>
        <td><%=b.getId() %></td>
        <td><%=b.getTitle() %></td>
        <td><%=b.getWriteDate() %></td>
      </tr>
    <%
    	}else{
    %>
    	<tr>
            <td><%=b.getArticleNO() %></td>
            <td><%=b.getId() %></td>
            <td>↪️<%=b.getTitle() %></td>
            <td><%=b.getWriteDate() %></td>
        </tr>
    <%
    	}
    }
    %>                  
    </tbody>
  </table>
</div>

</body>
</html>

