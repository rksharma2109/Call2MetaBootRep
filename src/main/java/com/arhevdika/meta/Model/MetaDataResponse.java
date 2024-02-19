package com.arhevdika.meta.Model;
import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;

@Entity
@Table(name = "metadata_response")
@SequenceGenerator(name = "request_gen", sequenceName = "request_gen", initialValue = 1000)
public class MetaDataResponse {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "request_gen")
    private Long request_id;

    private Long applicant_id;
    private Date datetime_of_request;
    private String applicant_response;
    private String user_pin;
    private String request_type;
    private Date datetime_of_response;

    // Constructors, getters, and setters

    public Long getRequest_id() {
        return request_id;
    }

    public void setRequest_id(Long request_id) {
        this.request_id = request_id;
    }

    public Long getApplicant_id() {
        return applicant_id;
    }

    public void setApplicant_id(Long applicant_id) {
        this.applicant_id = applicant_id;
    }

    public Date getDatetime_of_request() {
        return datetime_of_request;
    }

    public void setDatetime_of_request(Date datetime_of_request) {
        this.datetime_of_request = datetime_of_request;
    }

    public String getApplicant_response() {
        return applicant_response;
    }

    public void setApplicant_response(String applicant_response) {
        this.applicant_response = applicant_response;
    }

    public String getUser_pin() {
        return user_pin;
    }

    public void setUser_pin(String user_pin) {
        this.user_pin = user_pin;
    }

    public String getRequest_type() {
        return request_type;
    }

    public void setRequest_type(String request_type) {
        this.request_type = request_type;
    }

    public Date getDatetime_of_response() {
        return datetime_of_response;
    }

    public void setDatetime_of_response(Date datetime_of_response) {
        this.datetime_of_response = datetime_of_response;
    }
}


