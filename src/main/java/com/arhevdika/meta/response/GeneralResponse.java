package com.arhevdika.meta.response;

public class GeneralResponse {
String message;
String status;
String request_id;
public String getRequest_id() {
	return request_id;
}
public void setRequest_id(String request_id) {
	this.request_id = request_id;
}
public String getMessage() {
	return message;
}
public void setMessage(String message) {
	this.message = message;
}
public String getStatus() {
	return status;
}
public void setStatus(String status) {
	this.status = status;
}
public GeneralResponse(String message, String status, String request_id) {
	super();
	this.message = message;
	this.status = status;
	this.request_id = request_id;
}
public GeneralResponse(String message, String status) {
	super();
	this.message = message;
	this.status = status;
}


}
